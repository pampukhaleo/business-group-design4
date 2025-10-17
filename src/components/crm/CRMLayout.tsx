import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart3, LogOut, Menu } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const CRMLayout = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: '/crm', label: 'Leads', icon: LayoutDashboard },
    { to: '/crm/statistics', label: 'Statistics', icon: BarChart3 }
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const NavigationContent = () => (
    <>
      <h2 className="text-2xl font-bold text-primary mb-8">CRM System</h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/crm'}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 md:py-2 rounded-lg transition-colors ${
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
          Sign Out
        </Button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen w-full">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-card border-b border-border z-50 flex items-center px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-6">
            <NavigationContent />
          </SheetContent>
        </Sheet>
        <h2 className="text-lg font-bold text-primary ml-4">CRM System</h2>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-card border-r border-border">
        <div className="p-6">
          <NavigationContent />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 mt-14 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default CRMLayout;
