import React from 'react';
import { Card, CardBody, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function ComplianceDashboardComponent() {
  const summaryData = {
    overallCompliance: 85,
    propertiesAtRisk: 12,
    upcomingDeadlines: 8
  };

  const regulationData = [
    { name: 'Fire Safety', compliancePercentage: 85 },
    { name: 'ADA Compliance', compliancePercentage: 92 },
    { name: 'Energy Efficiency', compliancePercentage: 78 },
    { name: 'Building Code', compliancePercentage: 88 },
    { name: 'Health & Safety', compliancePercentage: 95 }
  ];

  const propertyData = [
    { id: '1', name: 'Skyline Tower', complianceIssue: 'Fire Safety Inspection', deadline: '2023-08-15', status: 'Overdue' },
    { id: '2', name: 'Green Meadows Complex', complianceIssue: 'Energy Efficiency Certification', deadline: '2023-09-01', status: 'Pending' },
    { id: '3', name: 'Harbor View Office Park', complianceIssue: 'ADA Compliance Audit', deadline: '2023-08-30', status: 'In Progress' }
  ];

  const statusColorMap = {
    'Overdue': 'danger',
    'Pending': 'warning',
    'In Progress': 'success'
  };

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Compliance Dashboard</h1>
      </div>
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <Card className="h-full bg-white rounded-lg shadow-md">
            <CardBody className="p-4">
              <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Overall Compliance</h2>
              <p className="text-4xl font-bold text-[hsl(var(--app-success-500))] mb-1">{summaryData.overallCompliance}%</p>
              <p className="text-sm text-[hsl(var(--app-foreground-500))]">Across all properties</p>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Card className="h-full bg-white rounded-lg shadow-md">
            <CardBody className="p-4">
              <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Properties at Risk</h2>
              <p className="text-4xl font-bold text-[hsl(var(--app-danger-500))] mb-1">{summaryData.propertiesAtRisk}</p>
              <p className="text-sm text-[hsl(var(--app-foreground-500))]">Require immediate attention</p>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Card className="h-full bg-white rounded-lg shadow-md">
            <CardBody className="p-4">
              <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Upcoming Deadlines</h2>
              <p className="text-4xl font-bold text-[hsl(var(--app-warning-500))] mb-1">{summaryData.upcomingDeadlines}</p>
              <p className="text-sm text-[hsl(var(--app-foreground-500))]">Within the next 30 days</p>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] shadow-md">
          <CardHeader className="pb-0 pt-4 px-4">
            <h3 className="text-xl font-semibold">Compliance by Regulation</h3>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="h-64 w-full bg-[hsl(var(--app-foreground-100))] rounded-md flex items-center justify-center text-[hsl(var(--app-foreground-500))] text-sm">
              Interactive chart placeholder
            </div>
            <div className="mt-4">
              {regulationData.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.compliancePercentage}%</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <div className="bg-[hsl(var(--app-background))] rounded-lg shadow-[var(--app-box-shadow-medium)] p-6 my-6">
          <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">
            Properties Requiring Attention
          </h2>
          <Table
            aria-label="Properties requiring attention for compliance"
            classNames={{
              base: 'max-h-[520px] overflow-scroll',
              table: 'min-w-full',
            }}
          >
            <TableHeader>
              <TableColumn>Property Name</TableColumn>
              <TableColumn>Compliance Issue</TableColumn>
              <TableColumn>Deadline</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              {propertyData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.complianceIssue}</TableCell>
                  <TableCell>{row.deadline}</TableCell>
                  <TableCell>
                    <Chip
                      color={statusColorMap[row.status] as 'danger' | 'warning' | 'success'}
                      variant="flat"
                      size="sm"
                      startContent={<Icon icon={`fa6-regular:${row.status === 'Overdue' ? 'calendar-minus' : row.status === 'Pending' ? 'calendar' : 'calendar-check'}`} />}
                    >
                      {row.status}
                    </Chip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
