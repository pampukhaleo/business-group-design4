import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import StatusBadge from '@/components/crm/StatusBadge';
import LeadComments from '@/components/crm/LeadComments';
import LeadHistory from '@/components/crm/LeadHistory';
import { format } from 'date-fns';

type LeadStatus = 'new' | 'in_progress' | 'completed';

const LeadDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [lead, setLead] = useState<any>(null);

  useEffect(() => {
    fetchLead();
  }, [id]);

  const fetchLead = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setLead(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load lead',
        variant: 'destructive'
      });
      navigate('/crm');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('leads')
        .update({
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          subject: lead.subject,
          message: lead.message,
          status: lead.status,
          price: lead.price
        })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Lead updated'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update lead',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
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

      navigate('/crm');
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

  if (!lead) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="outline" onClick={() => navigate('/crm')} className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to list
      </Button>

      <div className="max-w-5xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Lead #{lead.id.slice(0, 8)}</h1>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Created: {format(new Date(lead.created_at), 'dd.MM.yyyy HH:mm')}</span>
              <span>Updated: {format(new Date(lead.updated_at), 'dd.MM.yyyy HH:mm')}</span>
              {lead.completed_at && (
                <span>Completed: {format(new Date(lead.completed_at), 'dd.MM.yyyy HH:mm')}</span>
              )}
            </div>
          </div>
          <StatusBadge status={lead.status} />
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={lead.status} onValueChange={(value: LeadStatus) => setLead({ ...lead, status: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={lead.name}
                    onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={lead.email}
                      onChange={(e) => setLead({ ...lead, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={lead.phone || ''}
                      onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="price">Price (€)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    value={lead.price || ''}
                    onChange={(e) => setLead({ ...lead, price: e.target.value ? parseFloat(e.target.value) : null })}
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={lead.subject}
                    onChange={(e) => setLead({ ...lead, subject: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={lead.message}
                    onChange={(e) => setLead({ ...lead, message: e.target.value })}
                    className="min-h-[150px]"
                  />
                </div>

                <div className="flex gap-4">
                  <Button onClick={handleSave} disabled={saving}>
                    <Save className="h-4 w-4 mr-2" />
                    {saving ? 'Saving...' : 'Save'}
                  </Button>
                  <Button variant="destructive" onClick={handleDelete}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="comments">
            <LeadComments leadId={id!} />
          </TabsContent>

          <TabsContent value="history">
            <LeadHistory leadId={id!} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LeadDetail;
