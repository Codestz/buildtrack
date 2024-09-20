import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Select, SelectItem, Card, CardHeader, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function ReportViewerComponent() {
  const dateRanges = ['7 days', '30 days', '90 days', 'Last 30 days', 'Custom'];
  const buildingOverviewData = {
    name: 'Central Plaza',
    address: '123 Main St, Anytown, USA',
    yearBuilt: 1998,
    totalArea: '50,000 sq ft'
  };
  const keyMetricsData = [
    { label: 'Energy Efficiency', value: '85%', icon: 'fa6-regular:lightbulb' },
    { label: 'Occupancy Rate', value: '92%', icon: 'fa6-regular:user' },
    { label: 'Maintenance Issues', value: 7, icon: 'fa6-regular:wrench' },
    { label: 'Certifications', value: 3, icon: 'fa6-regular:certificate' }
  ];
  const maintenanceIssuesData = [
    { date: '2023-05-15', issue: 'HVAC malfunction', status: 'In Progress' },
    { date: '2023-05-10', issue: 'Elevator maintenance', status: 'Resolved' },
    { date: '2023-05-03', issue: 'Plumbing leak', status: 'Resolved' }
  ];
  const certificationsData = [
    { name: 'LEED Gold Certification', year: 2022 },
    { name: 'Energy Star Certification', year: 2023 },
    { name: 'ADA Compliance Certification', year: 2023 }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <Navbar className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] h-16 px-4 border-b border-[hsl(var(--app-foreground-200))] shadow-sm" isBordered>
          <NavbarBrand>
            <h1 className="text-xl font-semibold">Report Viewer</h1>
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button color="primary" className="mr-2" startContent={<Icon icon="fa6-regular:share-from-square" />}>Share</Button>
            </NavbarItem>
            <NavbarItem>
              <Button color="default" variant="flat" className="mr-2" startContent={<Icon icon="fa6-regular:file-export" />}>Export</Button>
            </NavbarItem>
            <NavbarItem>
              <Select placeholder="Select date range" className="w-48" defaultSelectedKeys={['Last 30 days']}>
                {dateRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </Select>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Card className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] shadow-[var(--app-box-shadow-medium)] h-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Building Overview</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center py-1">
                <span className="text-[hsl(var(--app-foreground-500))] text-small">Name:</span>
                <span className="font-semibold text-small">{buildingOverviewData.name}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[hsl(var(--app-foreground-500))] text-small">Address:</span>
                <span className="font-semibold text-small">{buildingOverviewData.address}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[hsl(var(--app-foreground-500))] text-small">Year Built:</span>
                <span className="font-semibold text-small">{buildingOverviewData.yearBuilt}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[hsl(var(--app-foreground-500))] text-small">Total Area:</span>
                <span className="font-semibold text-small">{buildingOverviewData.totalArea}</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Card className="bg-[hsl(var(--app-background))] shadow-md h-full">
          <CardBody className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--app-foreground-900))]">Key Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              {keyMetricsData.map((metric, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon icon={metric.icon} className="text-4xl mb-2 text-[hsl(var(--app-primary))]" />
                  <p className="text-sm text-[hsl(var(--app-foreground-600))]">{metric.label}</p>
                  <p className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">{metric.value}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <Card className="my-4 bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
            <h4 className="text-lg font-bold text-[hsl(var(--app-foreground-900))]">Energy Consumption Trend</h4>
          </CardHeader>
          <CardBody className="p-4">
            <div className="w-full h-64 bg-[hsl(var(--app-foreground-100))] rounded-lg flex items-center justify-center">
              <p className="text-[hsl(var(--app-foreground-500))]">Chart Placeholder</p>
            </div>
            <p className="mt-2 text-sm text-[hsl(var(--app-foreground-500))]">This chart shows the energy consumption trend over the last 30 days.</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <div className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] rounded-lg shadow-[var(--app-box-shadow-small)] p-4 my-4">
          <h2 className="text-xl font-semibold mb-4">Recent Maintenance Issues</h2>
          <Table aria-label="Recent Maintenance Issues Table" className="w-full">
            <TableHeader columns={[{ key: 'date', label: 'Date' }, { key: 'issue', label: 'Issue' }, { key: 'status', label: 'Status' }]}> {(column) => (<TableColumn key={column.key}>{column.label}</TableColumn>)} </TableHeader>
            <TableBody items={maintenanceIssuesData}> {(item) => (<TableRow key={item.date + item.issue}>{(columnKey) => (<TableCell>{renderCell(item, columnKey)}</TableCell>)}</TableRow>)} </TableBody>
          </Table>
        </div>
      </div>
      <div className="col-span-12">
        <Card className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] shadow-md my-4">
          <CardBody className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Icon icon="fa6-regular:building" className="mr-2" />
              Compliance and Certifications
            </h3>
            <ul className="list-disc list-inside leading-relaxed">
              {certificationsData.map((cert, index) => (
                <li key={index} className="mb-2">
                  {cert.name} ({cert.year})
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}

function renderCell(issue, columnKey) {
  const cellValue = issue[columnKey];
  switch (columnKey) {
    case 'date':
      return <div className="flex items-center"><Icon icon="fa6-regular:calendar" className="mr-2" />{cellValue}</div>;
    case 'issue':
      return cellValue;
    case 'status':
      return <Chip color={cellValue === 'Resolved' ? 'success' : 'warning'} variant="flat" size="sm"><Icon icon={cellValue === 'Resolved' ? 'fa6-regular:check-circle' : 'fa6-regular:clock'} className="mr-1" />{cellValue}</Chip>;
    default:
      return cellValue;
  }
}
