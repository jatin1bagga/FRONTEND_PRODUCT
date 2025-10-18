import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Package, DollarSign } from 'lucide-react';

const Analytics = () => {
  // Mock analytics data
  const categoryData = [
    { category: 'Sofas', count: 45 },
    { category: 'Tables', count: 38 },
    { category: 'Chairs', count: 52 },
    { category: 'Storage', count: 31 },
    { category: 'Beds', count: 24 },
  ];

  const brandPriceData = [
    { brand: 'LuxeLiving', avgPrice: 74617 },
    { brand: 'NordicHome', avgPrice: 53867 },
    { brand: 'WorkSpace Pro', avgPrice: 33117 },
    { brand: 'UrbanLoft', avgPrice: 24817 },
    { brand: 'ModernSpaces', avgPrice: 45000 },
  ];

  const trendData = [
    { month: 'Jan', products: 120 },
    { month: 'Feb', products: 145 },
    { month: 'Mar', products: 160 },
    { month: 'Apr', products: 155 },
    { month: 'May', products: 180 },
    { month: 'Jun', products: 190 },
  ];

  const COLORS = ['hsl(221, 83%, 53%)', 'hsl(221, 83%, 63%)', 'hsl(260, 60%, 55%)', 'hsl(217, 33%, 17%)', 'hsl(220, 14%, 96%)'];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Navbar />

      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">
              Insights and trends about furniture products
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="backdrop-blur-sm bg-card/50 border-border animate-fade-in">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">190</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50 border-border animate-fade-in delay-100">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg Price</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">₹46,284</div>
                <p className="text-xs text-muted-foreground">Across all categories</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50 border-border animate-fade-in delay-200">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Growth</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">+23%</div>
                <p className="text-xs text-muted-foreground">Inventory growth rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <Card className="backdrop-blur-sm bg-card/50 border-border animate-fade-in delay-300">
              <CardHeader>
                <CardTitle>Products by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem'
                      }} 
                    />
                    <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card className="backdrop-blur-sm bg-card/50 border-border animate-fade-in delay-400">
              <CardHeader>
                <CardTitle>Average Price by Brand</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={brandPriceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.brand}: ₹${(entry.avgPrice / 1000).toFixed(0)}k`}
                      outerRadius={100}
                      fill="hsl(var(--primary))"
                      dataKey="avgPrice"
                    >
                      {brandPriceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem'
                      }}
                      formatter={(value: number) => `₹${value.toLocaleString()}`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Line Chart */}
            <Card className="backdrop-blur-sm bg-card/50 border-border animate-fade-in delay-500 lg:col-span-2">
              <CardHeader>
                <CardTitle>Product Growth Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem'
                      }} 
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="products" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analytics;
