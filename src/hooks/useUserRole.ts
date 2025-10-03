import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

type UserRole = 'admin' | 'manager' | 'user' | null;

export const useUserRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user) {
        setRole(null);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .maybeSingle();

      if (!error && data) {
        setRole(data.role as UserRole);
      } else {
        setRole('user');
      }
      setLoading(false);
    };

    fetchUserRole();
  }, [user]);

  return {
    role,
    loading,
    isAdmin: role === 'admin',
    isManager: role === 'manager',
    canManageLeads: role === 'admin' || role === 'manager'
  };
};
