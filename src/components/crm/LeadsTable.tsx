import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Eye, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState, useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type LeadStatus = 'new' | 'in_progress' | 'completed';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  status: LeadStatus;
  price: number | null;
  created_at: string;
}

interface LeadsTableProps {
  leads: Lead[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, newStatus: LeadStatus) => Promise<void>;
  onPriceChange: (id: string, newPrice: number | null) => Promise<void>;
}

const LeadsTable = ({ leads, onDelete, onStatusChange, onPriceChange }: LeadsTableProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [loadingStatus, setLoadingStatus] = useState<string | null>(null);
  const [editingPrice, setEditingPrice] = useState<string | null>(null);
  const [priceValue, setPriceValue] = useState<string>('');
  const [loadingPrice, setLoadingPrice] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (editingPrice && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingPrice]);

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    setLoadingStatus(leadId);
    await onStatusChange(leadId, newStatus as LeadStatus);
    setLoadingStatus(null);
  };

  const handlePriceClick = (leadId: string, currentPrice: number | null) => {
    setEditingPrice(leadId);
    setPriceValue(currentPrice?.toString() || '');
  };

  const handlePriceChange = (value: string) => {
    setPriceValue(value);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      savePriceChange();
    }, 300);
  };

  const savePriceChange = async () => {
    if (!editingPrice) return;
    
    setLoadingPrice(editingPrice);
    const newPrice = priceValue ? parseFloat(priceValue) : null;
    
    if (newPrice !== null && newPrice < 0) {
      setLoadingPrice(null);
      return;
    }
    
    await onPriceChange(editingPrice, newPrice);
    setEditingPrice(null);
    setLoadingPrice(null);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePriceBlur = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    savePriceChange();
  };

  const handlePriceKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      savePriceChange();
    } else if (e.key === 'Escape') {
      setEditingPrice(null);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return '-';
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
  };

  const getStatusColor = (status: LeadStatus) => {
    switch (status) {
      case 'new': return 'bg-blue-500 text-white';
      case 'in_progress': return 'bg-yellow-500 text-white';
      case 'completed': return 'bg-green-500 text-white';
    }
  };

  const getStatusLabel = (status: LeadStatus) => {
    switch (status) {
      case 'new': return 'New';
      case 'in_progress': return 'In Progress';
      case 'completed': return 'Completed';
    }
  };

  if (leads.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No leads
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="space-y-4">
        {leads.map((lead) => (
          <Card key={lead.id} className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{lead.name}</h3>
                  <p className="text-sm text-muted-foreground">{lead.email}</p>
                  {lead.phone && <p className="text-sm text-muted-foreground">{lead.phone}</p>}
                </div>
                <Select
                  value={lead.status}
                  onValueChange={(value) => handleStatusChange(lead.id, value)}
                  disabled={loadingStatus === lead.id}
                >
                  <SelectTrigger className={`w-[120px] text-xs ${getStatusColor(lead.status)}`}>
                    <SelectValue>
                      {loadingStatus === lead.id ? 'Saving...' : getStatusLabel(lead.status)}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <p className="text-sm font-medium">{lead.subject}</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Price</p>
                  {editingPrice === lead.id ? (
                    <Input
                      ref={inputRef}
                      type="number"
                      step="0.01"
                      min="0"
                      value={priceValue}
                      onChange={(e) => handlePriceChange(e.target.value)}
                      onBlur={handlePriceBlur}
                      onKeyDown={handlePriceKeyDown}
                      className="w-32 h-9"
                      disabled={loadingPrice === lead.id}
                    />
                  ) : (
                    <p 
                      className="text-sm font-semibold cursor-pointer hover:bg-accent rounded px-2 py-1 -ml-2"
                      onClick={() => handlePriceClick(lead.id, lead.price)}
                    >
                      {loadingPrice === lead.id ? 'Saving...' : formatPrice(lead.price)}
                    </p>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {format(new Date(lead.created_at), 'dd.MM.yyyy')}
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate(`/crm/lead/${lead.id}`)}
                  className="flex-1"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Open
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onDelete(lead.id)}
                  className="flex-1"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <TableHead className="hidden lg:table-cell">Phone</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden lg:table-cell">Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell className="hidden md:table-cell">{lead.email}</TableCell>
              <TableCell className="hidden lg:table-cell">{lead.phone || '-'}</TableCell>
              <TableCell>{lead.subject}</TableCell>
              <TableCell>
                {editingPrice === lead.id ? (
                  <Input
                    ref={inputRef}
                    type="number"
                    step="0.01"
                    min="0"
                    value={priceValue}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    onBlur={handlePriceBlur}
                    onKeyDown={handlePriceKeyDown}
                    className="w-32"
                    disabled={loadingPrice === lead.id}
                  />
                ) : (
                  <span 
                    className="cursor-pointer hover:bg-accent rounded px-2 py-1 -ml-2 inline-block"
                    onClick={() => handlePriceClick(lead.id, lead.price)}
                  >
                    {loadingPrice === lead.id ? 'Saving...' : formatPrice(lead.price)}
                  </span>
                )}
              </TableCell>
              <TableCell>
                <Select
                  value={lead.status}
                  onValueChange={(value) => handleStatusChange(lead.id, value)}
                  disabled={loadingStatus === lead.id}
                >
                  <SelectTrigger className={`w-[140px] ${getStatusColor(lead.status)}`}>
                    <SelectValue>
                      {loadingStatus === lead.id ? 'Saving...' : getStatusLabel(lead.status)}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="hidden lg:table-cell">{format(new Date(lead.created_at), 'dd.MM.yyyy HH:mm')}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate(`/crm/lead/${lead.id}`)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onDelete(lead.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeadsTable;
