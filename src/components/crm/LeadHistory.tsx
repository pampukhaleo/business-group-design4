import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { History, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface HistoryEntry {
  id: string;
  action: string;
  field_name?: string;
  old_value?: string;
  new_value?: string;
  created_at: string;
  profiles?: {
    email: string;
    full_name?: string;
  } | null;
}

interface LeadHistoryProps {
  leadId: string;
}

const LeadHistory = ({ leadId }: LeadHistoryProps) => {
  const { toast } = useToast();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, [leadId]);

  const fetchHistory = async () => {
    try {
      const { data, error } = await supabase
        .from('lead_history')
        .select(`
          *,
          profiles:user_id (
            email,
            full_name
          )
        `)
        .eq('lead_id', leadId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setHistory((data || []) as HistoryEntry[]);
    } catch (error) {
      console.error('Error fetching history:', error);
      toast({
        title: 'Error',
        description: 'Failed to load history',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const getFieldLabel = (fieldName?: string) => {
    const labels: Record<string, string> = {
      status: 'Status',
      price: 'Price',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      subject: 'Subject',
      message: 'Message'
    };
    return fieldName ? labels[fieldName] || fieldName : '';
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      new: 'New',
      in_progress: 'In Progress',
      completed: 'Completed'
    };
    return labels[status] || status;
  };

  const formatValue = (fieldName: string | undefined, value: string | undefined) => {
    if (!value) return '—';
    if (fieldName === 'status') return getStatusLabel(value);
    if (fieldName === 'price') return `€${value}`;
    return value;
  };

  const getActionText = (entry: HistoryEntry) => {
    if (entry.action === 'created') {
      return 'Lead created';
    }
    if (entry.action === 'update' && entry.field_name) {
      return `Field changed: "${getFieldLabel(entry.field_name)}"`;
    }
    return entry.action;
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <History className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Change History</h3>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-16 bg-muted rounded"></div>
          <div className="h-16 bg-muted rounded"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <History className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Change History ({history.length})</h3>
      </div>

      <div className="space-y-4">
        {history.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No history
          </p>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-2 top-0 bottom-0 w-px bg-border"></div>
            
            {history.map((entry, index) => (
              <div key={entry.id} className="relative pl-8 pb-6 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {format(new Date(entry.created_at), 'd MMMM yyyy, HH:mm')}
                    </span>
                  </div>
                  
                  <p className="font-medium">{getActionText(entry)}</p>
                  
                  <p className="text-sm text-muted-foreground">
                    {entry.profiles?.full_name || entry.profiles?.email || 'System'}
                  </p>
                  
                  {entry.old_value && entry.new_value && (
                    <div className="text-sm mt-2 p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground line-through">
                          {formatValue(entry.field_name, entry.old_value)}
                        </span>
                        <span className="text-muted-foreground">→</span>
                        <span className="font-medium text-primary">
                          {formatValue(entry.field_name, entry.new_value)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default LeadHistory;
