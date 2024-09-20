import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input, Card, CardHeader, CardBody, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function AnalyticsDashboardComponent() {
  const mockKPIs = {
    totalBuildings: 1234,
    complianceRate: 87,
    activeUsers: 456,
    revenue: 789000
  };

  const mockRecentActivities = [
    { date: '2023-06-15', building: 'Office Tower A', action: 'Updated Maintenance Record', user: 'John Doe' },
    { date: '2023-06-14', building: 'Retail Complex B', action: 'Added New Equipment', user: 'Jane Smith' },
    { date: '2023-06-13', building: 'Warehouse C', action: 'Updated Energy Efficiency Data', user: 'Mike Johnson' }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-6">
      <header className="col-span-12 flex justify-between items-center p-6 bg-[hsl(var(--app-background))] border-b border-[hsl(var(--app-foreground-200))]">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">Analytics Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="bordered" color="primary" startContent={<Icon icon="fa6-regular:clone" />}>Customize Layout</Button>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Last 7 days</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Date range selection">
              <DropdownItem key="7days">Last 7 days</DropdownItem>
              <DropdownItem key="30days">Last 30 days</DropdownItem>
              <DropdownItem key="90days">Last 90 days</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input className="max-w-xs" placeholder="Search..." type="search" endContent={<Icon icon="fa6-regular:search" />} />
        </div>
      </header>

      <section className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-[hsl(var(--app-foreground-50))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Platform Usage</h2>
          </CardHeader>
          <CardBody className="h-full">
            <div className="h-64 flex items-center justify-center">[Chart Placeholder]</div>
          </CardBody>
        </Card>

        <Card className="bg-[hsl(var(--app-foreground-50))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Data Completeness</h2>
          </CardHeader>
          <CardBody className="h-full">
            <div className="h-64 flex items-center justify-center">[Chart Placeholder]</div>
          </CardBody>
        </Card>

        <Card className="bg-[hsl(var(--app-foreground-50))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Compliance Status</h2>
          </CardHeader>
          <CardBody className="h-full">
            <div className="h-64 flex items-center justify-center">[Chart Placeholder]</div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-foreground-50))] shadow-[var(--app-box-shadow-small)]">
          <CardBody className="h-full">
            <h2 className="text-xl font-semibold mb-4">Key Performance Indicators</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <Icon icon="fa6-regular:building" className="text-4xl mb-2" />
                <span className="text-2xl font-bold">{mockKPIs.totalBuildings}</span>
                <span className="text-sm">Total Buildings</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="fa6-regular:chart-bar" className="text-4xl mb-2" />
                <span className="text-2xl font-bold">{mockKPIs.complianceRate}%</span>
                <span className="text-sm">Compliance Rate</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="fa6-regular:user" className="text-4xl mb-2" />
                <span className="text-2xl font-bold">{mockKPIs.activeUsers}</span>
                <span className="text-sm">Active Users</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="fa6-regular:credit-card" className="text-4xl mb-2" />
                <span className="text-2xl font-bold">${mockKPIs.revenue.toLocaleString()}</span>
                <span className="text-sm">Revenue</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-foreground-50))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Activity</h2>
          </CardHeader>
          <CardBody className="h-full">
            <Table aria-label="Recent activity table">
              <TableHeader>
                <TableColumn>Date</TableColumn>
                <TableColumn>Building</TableColumn>
                <TableColumn>Action</TableColumn>
                <TableColumn>User</TableColumn>
              </TableHeader>
              <TableBody>
                {mockRecentActivities.map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell>{activity.date}</TableCell>
                    <TableCell>{activity.building}</TableCell>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell>{activity.user}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
