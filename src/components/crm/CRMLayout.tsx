import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart3, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CRMLayout = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { to: '/crm', label: 'Заявки', icon: LayoutDashboard },
    { to: '/crm/statistics', label: 'Статистика', icon: BarChart3 }
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-8">CRM Система</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/crm'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-8">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default CRMLayout;
