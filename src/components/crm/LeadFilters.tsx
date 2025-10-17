import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

type LeadStatus = 'all' | 'new' | 'in_progress' | 'completed';

interface LeadFiltersProps {
  selectedStatus: LeadStatus;
  onStatusChange: (status: LeadStatus) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const LeadFilters = ({ selectedStatus, onStatusChange, searchQuery, onSearchChange }: LeadFiltersProps) => {
  const statuses: { value: LeadStatus; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'new', label: 'New' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {statuses.map((status) => (
          <Button
            key={status.value}
            variant={selectedStatus === status.value ? 'default' : 'outline'}
            onClick={() => onStatusChange(status.value)}
          >
            {status.label}
          </Button>
        ))}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by name, email or phone..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
};

export default LeadFilters;
