import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { format, startOfMonth, endOfMonth, subMonths, addMonths } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Statistics = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  useEffect(() => {
    fetchLeads();
  }, [selectedMonth]);

  const fetchLeads = async () => {
    const start = startOfMonth(selectedMonth);
    const end = endOfMonth(selectedMonth);

    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .gte('created_at', start.toISOString())
        .lte('created_at', end.toISOString());

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const completedLeads = leads.filter((lead: any) => lead.status === 'completed');
  
  // Price statistics
  const completedLeadsWithPrice = completedLeads.filter((lead: any) => lead.price);
  const totalRevenue = completedLeadsWithPrice.reduce((sum: number, lead: any) => sum + (lead.price || 0), 0);
  const averagePrice = completedLeadsWithPrice.length > 0 ? totalRevenue / completedLeadsWithPrice.length : 0;
  
  const statusData = [
    { name: 'Новые', value: leads.filter((l: any) => l.status === 'new').length, color: '#3b82f6' },
    { name: 'В работе', value: leads.filter((l: any) => l.status === 'in_progress').length, color: '#eab308' },
    { name: 'Выполнены', value: completedLeads.length, color: '#22c55e' }
  ];

  const dailyStats = completedLeads.reduce((acc: any, lead: any) => {
    const date = format(new Date(lead.completed_at || lead.created_at), 'dd.MM');
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const dailyData = Object.entries(dailyStats).map(([date, count]) => ({
    date,
    count
  }));

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const formatPrice = (price: number | null) => {
    if (price === null) return '-';
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">Статистика</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => setSelectedMonth(subMonths(selectedMonth, 1))}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm md:text-lg font-medium min-w-[150px] md:min-w-[200px] text-center">
            {format(selectedMonth, 'LLLL yyyy', { locale: ru })}
          </span>
          <Button variant="outline" size="icon" onClick={() => setSelectedMonth(addMonths(selectedMonth, 1))}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <Card className="p-4 md:p-6">
          <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-2">Всего заявок</h3>
          <p className="text-2xl md:text-3xl font-bold text-primary">{leads.length}</p>
        </Card>
        <Card className="p-4 md:p-6">
          <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-2">Выполнено</h3>
          <p className="text-2xl md:text-3xl font-bold text-green-600">{completedLeads.length}</p>
        </Card>
        <Card className="p-4 md:p-6">
          <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-2">Общая выручка</h3>
          <p className="text-xl md:text-3xl font-bold text-primary">{formatPrice(totalRevenue)}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {completedLeadsWithPrice.length} из {completedLeads.length} заявок
          </p>
        </Card>
        <Card className="p-4 md:p-6">
          <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-2">Средняя стоимость</h3>
          <p className="text-xl md:text-3xl font-bold text-primary">{formatPrice(averagePrice)}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <Card className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">Распределение по статусам</h2>
          <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">Выполненные заявки по дням</h2>
          <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#22c55e" name="Заявок" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-bold mb-4">Выполненные заявки</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Имя</th>
                <th className="text-left py-2 hidden md:table-cell">Email</th>
                <th className="text-left py-2">Тема</th>
                <th className="text-right py-2">Цена</th>
                <th className="text-left py-2 hidden lg:table-cell">Дата завершения</th>
              </tr>
            </thead>
            <tbody>
              {completedLeads.map((lead: any) => (
                <tr key={lead.id} className="border-b">
                  <td className="py-2">{lead.name}</td>
                  <td className="py-2 hidden md:table-cell">{lead.email}</td>
                  <td className="py-2">{lead.subject}</td>
                  <td className="py-2 text-right font-medium">
                    {formatPrice(lead.price)}
                  </td>
                  <td className="py-2 hidden lg:table-cell">
                    {lead.completed_at ? format(new Date(lead.completed_at), 'dd.MM.yyyy HH:mm') : '-'}
                  </td>
                </tr>
              ))}
              {completedLeads.length > 0 && (
                <tr className="border-t-2 font-bold">
                  <td colSpan={3} className="py-2 text-right">Итого:</td>
                  <td className="py-2 text-right">{formatPrice(totalRevenue)}</td>
                  <td className="hidden lg:table-cell"></td>
                </tr>
              )}
            </tbody>
          </table>
          {completedLeads.length === 0 && (
            <p className="text-center text-muted-foreground py-8">Нет выполненных заявок</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Statistics;
