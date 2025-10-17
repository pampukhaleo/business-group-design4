import { Badge } from '@/components/ui/badge';

type LeadStatus = 'new' | 'in_progress' | 'completed';

interface StatusBadgeProps {
  status: LeadStatus;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusConfig = {
    new: {
      label: 'New',
      variant: 'default' as const,
      className: 'bg-blue-500 hover:bg-blue-600'
    },
    in_progress: {
      label: 'In Progress',
      variant: 'secondary' as const,
      className: 'bg-yellow-500 hover:bg-yellow-600'
    },
    completed: {
      label: 'Completed',
      variant: 'outline' as const,
      className: 'bg-green-500 hover:bg-green-600 text-white border-green-600'
    }
  };

  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} className={config.className}>
      {config.label}
    </Badge>
  );
};

export default StatusBadge;
