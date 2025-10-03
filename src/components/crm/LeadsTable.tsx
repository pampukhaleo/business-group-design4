import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, Trash2 } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

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
}

const LeadsTable = ({ leads, onDelete }: LeadsTableProps) => {
  const navigate = useNavigate();

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
                <StatusBadge status={lead.status} />
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
