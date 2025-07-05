'use client';

import { 
  Users, 
  FileText, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { H2, H3, P } from '@/components/ui/typography';
import { REQUEST_STATUSES } from '@/constants';

export function AdminDashboard() {
  // Mock data - would come from API
  const stats = {
    totalRequests: 127,
    newRequests: 8,
    inProgress: 15,
    completed: 89,
    monthlyRevenue: 45600,
    conversionRate: 68,
    averageValue: 3200,
    responseTime: 2.4,
  };

  const recentRequests = [
    {
      id: 1,
      businessName: 'TechStart Solutions',
      contactName: 'Michael Chen',
      email: 'michael@techstart.com',
      status: 'new_request',
      budgetRange: '$5,000-$10,000',
      createdAt: '2024-01-15T10:30:00Z',
      priority: 'high',
    },
    {
      id: 2,
      businessName: 'Bloom Boutique',
      contactName: 'Emily Rodriguez',
      email: 'emily@bloomboutique.com',
      status: 'in_progress',
      budgetRange: '$2,000-$5,000',
      createdAt: '2024-01-14T14:20:00Z',
      priority: 'medium',
    },
    {
      id: 3,
      businessName: 'Johnson Consulting',
      contactName: 'Sarah Johnson',
      email: 'sarah@johnsonconsulting.com',
      status: 'quoted',
      budgetRange: '$10,000-$20,000',
      createdAt: '2024-01-14T09:15:00Z',
      priority: 'high',
    },
    {
      id: 4,
      businessName: 'Green Valley Farm',
      contactName: 'David Miller',
      email: 'david@greenvalley.com',
      status: 'completed',
      budgetRange: '$5,000-$10,000',
      createdAt: '2024-01-13T16:45:00Z',
      priority: 'medium',
    },
  ];

  const quickActions = [
    {
      title: 'Review New Requests',
      description: '8 new requests need attention',
      icon: Users,
      action: 'View Requests',
      href: '/admin/requests?status=new_request',
      urgent: true,
    },
    {
      title: 'Follow Up Quotes',
      description: '5 quotes sent, awaiting response',
      icon: FileText,
      action: 'View Quotes',
      href: '/admin/requests?status=quoted',
      urgent: false,
    },
    {
      title: 'Project Updates',
      description: '3 projects ready for client review',
      icon: CheckCircle,
      action: 'View Projects',
      href: '/admin/requests?status=client_review',
      urgent: false,
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusInfo = REQUEST_STATUSES[status as keyof typeof REQUEST_STATUSES];
    if (!statusInfo) return null;

    const variant = status === 'new_request' ? 'default' : 
                   status === 'completed' ? 'secondary' : 'outline';

    return (
      <Badge variant={variant} className="text-xs">
        {statusInfo.label}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const variant = priority === 'high' ? 'destructive' : 
                   priority === 'medium' ? 'default' : 'secondary';
    
    return (
      <Badge variant={variant} className="text-xs">
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div>
        <H2 className="text-primary mb-2">Welcome back, Admin!</H2>
        <P className="text-muted-foreground mt-0">
          Here's what's happening with your WordPress projects today.
        </P>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalRequests}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Requests</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.newRequests}</div>
            <p className="text-xs text-muted-foreground">
              Require immediate attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${action.urgent ? 'border-primary/20 bg-primary/5' : 'border-border'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${action.urgent ? 'bg-primary/10' : 'bg-muted'}`}>
                    <action.icon className={`h-4 w-4 ${action.urgent ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="flex-1">
                    <H3 className="text-sm border-none pb-0 mb-1">{action.title}</H3>
                    <P className="text-xs text-muted-foreground mb-3 mt-0">
                      {action.description}
                    </P>
                    <Button size="sm" variant={action.urgent ? 'default' : 'outline'}>
                      {action.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent requests */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Requests</CardTitle>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <H3 className="text-sm border-none pb-0">{request.businessName}</H3>
                    {getStatusBadge(request.status)}
                    {getPriorityBadge(request.priority)}
                  </div>
                  <P className="text-sm text-muted-foreground mb-1 mt-0">
                    {request.contactName} • {request.email}
                  </P>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{request.budgetRange}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(request.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

