import React from 'react';
import { Card, CardBody, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function SystemIntegrationsDashboardComponent() {
  const metrics = [
    { title: 'Total Integrations', value: 12 },
    { title: 'Active Integrations', value: 10 },
    { title: 'API Calls (Last 24h)', value: 1234 }
  ];

  const summaryData = [
    { title: 'Total Integrations', value: 12, icon: 'clipboard' },
    { title: 'Active Integrations', value: 10, icon: 'check-circle' },
    { title: 'API Calls (Last 24h)', value: 1234, icon: 'chart-line' }
  ];

  const mockData = [
    { name: 'Property Management System', status: 'Active', lastSync: '2023-06-15 14:30:00' },
    { name: 'Energy Efficiency Database', status: 'Warning', lastSync: '2023-06-14 09:15:00' },
    { name: 'Insurance Platform', status: 'Error', lastSync: '2023-06-13 18:45:00' }
  ];

  const recentAlerts = [
    { type: 'error', message: 'API rate limit exceeded for Insurance Platform' },
    { type: 'warning', message: 'Sync delay detected for Energy Efficiency Database' },
    { type: 'success', message: 'New integration successfully added: Compliance Tracker' }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <section className="col-span-12">
        <header className="bg-[hsl(var(--app-background))] p-8 mb-6">
          <h1 className="text-[hsl(var(--app-foreground-900))] text-2xl font-bold mb-6">
            System Integrations Dashboard
          </h1>
          <div className="flex flex-wrap">
            {metrics.map((metric, index) => (
              <Card key={index} className="w-full md:w-1/3 mr-4 mb-4 md:mb-0">
                <CardBody className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{metric.title}</h2>
                  <p className="text-3xl font-bold">{metric.value}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </header>
      </section>
      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] rounded-lg shadow-[var(--app-box-shadow-medium)] m-4">
          <CardBody className="p-6">
            <Table aria-label="Integration Status Table" className="w-full text-sm">
              <TableHeader>
                <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))]">Integration</TableColumn>
                <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))]">Status</TableColumn>
                <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))]">Last Sync</TableColumn>
                <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))]">Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {mockData.map((integration, index) => (
                  <TableRow key={index} className="hover:bg-[hsl(var(--app-background-200))]">
                    <TableCell>{integration.name}</TableCell>
                    <TableCell>
                      <Chip
                        size="sm"
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          integration.status === 'Active'
                            ? 'bg-[hsl(var(--app-success-100))] text-[hsl(var(--app-success-700))]'
                            : integration.status === 'Warning'
                            ? 'bg-[hsl(var(--app-warning-100))] text-[hsl(var(--app-warning-700))]'
                            : 'bg-[hsl(var(--app-danger-100))] text-[hsl(var(--app-danger-700))]'
                        }`}
                      >
                        {integration.status}
                      </Chip>
                    </TableCell>
                    <TableCell>{integration.lastSync}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="light"
                        className="bg-transparent text-[hsl(var(--app-primary-500))] hover:bg-[hsl(var(--app-primary-100))] px-3 py-1 rounded-md text-sm font-medium"
                        startContent={<Icon icon="fa6-regular:clipboard" />}
                      >
                        Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>
      <section className="col-span-12 md:col-span-6">
        <Card className="flex-1 bg-[hsl(var(--app-foreground-50))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h3 className="text-lg font-semibold">API Usage</h3>
          </CardHeader>
          <CardBody>
            <div className="h-64 bg-[hsl(var(--app-foreground-100))] flex items-center justify-center">
              <p className="text-[hsl(var(--app-foreground-500))]">API Usage Chart Placeholder</p>
            </div>
          </CardBody>
        </Card>
      </section>
      <section className="col-span-12 md:col-span-6">
        <Card className="flex-1 bg-[hsl(var(--app-foreground-50))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h3 className="text-lg font-semibold">Recent Alerts</h3>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              {recentAlerts.map((alert, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Icon 
                    icon={alert.type === 'error' ? 'fa6-regular:circle-xmark' : 
                          alert.type === 'warning' ? 'fa6-regular:triangle-exclamation' : 
                          'fa6-regular:circle-check'}
                    className={`text-xl ${
                      alert.type === 'error' ? 'text-[hsl(var(--app-danger))]' :
                      alert.type === 'warning' ? 'text-[hsl(var(--app-warning))]' :
                      'text-[hsl(var(--app-success))]'
                    }`}
                  />
                  <span className="text-sm text-[hsl(var(--app-foreground-700))]">{alert.message}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
