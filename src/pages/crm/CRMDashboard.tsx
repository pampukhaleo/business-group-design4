import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LeadsTable from '@/components/crm/LeadsTable';
import LeadFilters from '@/components/crm/LeadFilters';

type LeadStatus = 'all' | 'new' | 'in_progress' | 'completed';

const CRMDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState<LeadStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
      setFilteredLeads(data || []);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load leads',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    let filtered = leads;

    if (selectedStatus !== 'all') {
      filtered = filtered.filter((lead: any) => lead.status === selectedStatus);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((lead: any) =>
        lead.name.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        (lead.phone && lead.phone.toLowerCase().includes(query))
      );
    }

    setFilteredLeads(filtered);
  }, [selectedStatus, searchQuery, leads]);

  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    try {
      const updateData: any = { status: newStatus };
      
      if (newStatus === 'completed') {
        updateData.completed_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('leads')
        .update(updateData)
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Lead status updated'
      });

      fetchLeads();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update status',
        variant: 'destructive'
      });
    }
  };

  const handlePriceChange = async (id: string, newPrice: number | null) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ price: newPrice })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Price updated'
      });

      fetchLeads();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update price',
        variant: 'destructive'
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const { error } = await supabase
        .from('leads')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Lead deleted'
      });

      fetchLeads();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete lead',
        variant: 'destructive'
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">Lead Management</h1>
          <p className="text-muted-foreground">Total leads: {leads.length}</p>
        </div>
        <Button onClick={() => navigate('/crm/new')} className="w-full md:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Create Lead
        </Button>
      </div>

      <div className="mb-6">
        <LeadFilters
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      <LeadsTable 
        leads={filteredLeads} 
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
        onPriceChange={handlePriceChange}
      />
    </div>
  );
};

export default CRMDashboard;
