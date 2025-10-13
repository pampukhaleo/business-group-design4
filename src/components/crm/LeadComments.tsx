import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Send, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface Comment {
  id: string;
  comment: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  profiles?: {
    email: string;
    full_name?: string;
  } | null;
}

interface LeadCommentsProps {
  leadId: string;
}

const LeadComments = ({ leadId }: LeadCommentsProps) => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    fetchComments();
    getCurrentUser();
  }, [leadId]);

  const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setCurrentUserId(user?.id || null);
  };

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('lead_comments')
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
      setComments((data || []) as Comment[]);
    } catch (error) {
      console.error('Error fetching comments:', error);
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить комментарии',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!newComment.trim()) return;

    setSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('lead_comments')
        .insert({
          lead_id: leadId,
          user_id: user.id,
          comment: newComment.trim()
        });

      if (error) throw error;

      setNewComment('');
      fetchComments();
      toast({
        title: 'Успешно',
        description: 'Комментарий добавлен'
      });
    } catch (error) {
      console.error('Error adding comment:', error);
      toast({
        title: 'Ошибка',
        description: 'Не удалось добавить комментарий',
        variant: 'destructive'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!confirm('Вы уверены, что хотите удалить комментарий?')) return;

    try {
      const { error } = await supabase
        .from('lead_comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;

      fetchComments();
      toast({
        title: 'Успешно',
        description: 'Комментарий удален'
      });
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast({
        title: 'Ошибка',
        description: 'Не удалось удалить комментарий',
        variant: 'destructive'
      });
    }
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Комментарии</h3>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-20 bg-muted rounded"></div>
          <div className="h-20 bg-muted rounded"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Комментарии ({comments.length})</h3>
      </div>

      {/* Add new comment */}
      <div className="mb-6">
        <Textarea
          placeholder="Добавить комментарий..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-2"
          rows={3}
        />
        <Button 
          onClick={handleSubmit} 
          disabled={submitting || !newComment.trim()}
          size="sm"
        >
          <Send className="h-4 w-4 mr-2" />
          {submitting ? 'Отправка...' : 'Отправить'}
        </Button>
      </div>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            Комментариев пока нет
          </p>
        ) : (
          comments.map((comment) => (
            <div 
              key={comment.id} 
              className="border-l-2 border-primary/20 pl-4 py-2"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-sm">
                    {comment.profiles?.full_name || comment.profiles?.email || 'Пользователь'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(comment.created_at), 'd MMMM yyyy, HH:mm', { locale: ru })}
                  </p>
                </div>
                {currentUserId === comment.user_id && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(comment.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </div>
              <p className="text-sm whitespace-pre-wrap">{comment.comment}</p>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

export default LeadComments;
