import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

type LeadStatus = 'new' | 'in_progress' | 'completed';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  status: LeadStatus;
  created_at: string;
}

interface LeadsTableProps {
  leads: Lead[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, newStatus: LeadStatus) => Promise<void>;
}

const LeadsTable = ({ leads, onDelete, onStatusChange }: LeadsTableProps) => {
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState<string | null>(null);

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    setLoadingStatus(leadId);
    await onStatusChange(leadId, newStatus as LeadStatus);
    setLoadingStatus(null);
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
      case 'new': return 'Новая';
      case 'in_progress': return 'В работе';
      case 'completed': return 'Выполнена';
    }
  };

  if (leads.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Нет заявок
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Имя</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Телефон</TableHead>
            <TableHead>Тема</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Дата</TableHead>
            <TableHead className="text-right">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.phone || '-'}</TableCell>
              <TableCell>{lead.subject}</TableCell>
              <TableCell>
                <Select
                  value={lead.status}
                  onValueChange={(value) => handleStatusChange(lead.id, value)}
                  disabled={loadingStatus === lead.id}
                >
                  <SelectTrigger className={`w-[140px] ${getStatusColor(lead.status)}`}>
                    <SelectValue>
                      {loadingStatus === lead.id ? 'Сохранение...' : getStatusLabel(lead.status)}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">Новая</SelectItem>
                    <SelectItem value="in_progress">В работе</SelectItem>
                    <SelectItem value="completed">Выполнена</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{format(new Date(lead.created_at), 'dd.MM.yyyy HH:mm')}</TableCell>
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
