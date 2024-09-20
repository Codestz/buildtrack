import React from 'react';
import { Card, CardHeader, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Progress } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BuildingDashboardComponent() {
  const mockBuildingInfo = {
    name: 'Central Plaza',
    address: '123 Main St, Cityville, ST 12345',
    type: 'Commercial Office',
    totalArea: '50,000 sq ft'
  };

  const mockComplianceData = [
    { name: 'Fire Safety', status: 'Compliant' },
    { name: 'ADA Accessibility', status: 'Review Required' },
    { name: 'Energy Efficiency', status: 'Non-Compliant' },
  ];

  const mockKPIData = [
    { name: 'Energy Efficiency', value: 78, color: 'success' },
    { name: 'Occupancy Rate', value: 92, color: 'primary' },
  ];

  const mockUpdates = [
    {
      icon: 'fa6-regular:snowflake',
      title: 'HVAC System Upgrade',
      date: '2023-06-15',
      status: 'Completed on',
    },
    {
      icon: 'fa6-regular:fire-extinguisher',
      title: 'Annual Fire Safety Inspection',
      date: '2023-05-20',
      status: 'Passed on',
    },
    {
      icon: 'fa6-regular:elevator',
      title: 'Elevator Maintenance Scheduled',
      date: '2023-07-10',
      status: 'Due on',
    },
  ];

  const mockMaintenanceData = [
    { id: '1', task: 'HVAC Filter Replacement', dueDate: '2023-07-15', status: 'Pending' },
    { id: '2', task: 'Roof Inspection', dueDate: '2023-08-01', status: 'Scheduled' },
    { id: '3', task: 'Parking Lot Restriping', dueDate: '2023-08-15', status: 'In Progress' },
  ];

  const mockInventoryData = [
    {
      id: '1',
      equipment: 'HVAC Unit 1',
      model: 'Carrier 48TC',
      installationDate: '2018-03-15',
      lastServiced: '2023-05-10',
      condition: 'Good'
    },
    {
      id: '2',
      equipment: 'Elevator 1',
      model: 'Otis Gen2',
      installationDate: '2015-07-22',
      lastServiced: '2023-06-01',
      condition: 'Fair'
    },
    {
      id: '3',
      equipment: 'Fire Alarm System',
      model: 'Honeywell Vista-128FBP',
      installationDate: '2019-11-30',
      lastServiced: '2023-04-15',
      condition: 'Excellent'
    }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background))] mb-4">
          <CardHeader className="px-6 py-4">
            <h1 className="text-[hsl(var(--app-foreground-900))] text-2xl font-bold">
              Building Dashboard
            </h1>
          </CardHeader>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Card className="bg-[hsl(var(--app-background))] shadow-md h-full">
          <CardHeader className="p-4">
            <h2 className="text-xl font-bold">
              <Icon icon="fa6-regular:building" className="mr-2" />
              Building Overview
            </h2>
          </CardHeader>
          <CardBody className="p-4">
            <div className="flex flex-col gap-2 text-sm text-[hsl(var(--app-foreground-700))]">
              <p><strong>Name:</strong> {mockBuildingInfo.name}</p>
              <p><strong>Address:</strong> {mockBuildingInfo.address}</p>
              <p><strong>Type:</strong> {mockBuildingInfo.type}</p>
              <p><strong>Total Area:</strong> {mockBuildingInfo.totalArea}</p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Card className="bg-[hsl(var(--app-background))] shadow-md h-full">
          <CardHeader className="border-b p-4">
            <h3 className="text-lg font-semibold">Compliance Status</h3>
          </CardHeader>
          <CardBody className="p-4">
            <ul className="space-y-2">
              {mockComplianceData.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-[hsl(var(--app-foreground-700))]">{item.name}</span>
                  <span className={`flex items-center ${item.status === 'Compliant' ? 'text-[hsl(var(--app-success))]' : item.status === 'Review Required' ? 'text-[hsl(var(--app-warning))]' : 'text-[hsl(var(--app-danger))]'}`}>
                    <Icon icon={item.status === 'Compliant' ? 'fa6-regular:bell' : 'fa6-regular:bell-slash'} className="mr-1" />
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Card className="bg-[hsl(var(--app-background))] shadow-md h-full">
          <CardHeader className="flex gap-3 p-4">
            <Icon icon="fa6-regular:building" width="24" height="24" />
            <div className="flex flex-col">
              <p className="text-xl font-bold">Key Performance Indicators</p>
            </div>
          </CardHeader>
          <CardBody>
            {mockKPIData.map((kpi, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[hsl(var(--app-foreground-700))]">
                    {kpi.name}
                  </span>
                  <span className="text-sm font-bold text-[hsl(var(--app-foreground-900))]">
                    {kpi.value}%
                  </span>
                </div>
                <Progress
                  value={kpi.value}
                  color={kpi.color}
                  aria-label={`${kpi.name} progress`}
                  className="h-2"
                />
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Card className="bg-[hsl(var(--app-background))] shadow-md rounded-lg p-4 h-full">
          <CardHeader>
            <h2 className="text-xl font-bold mb-2">Recent Updates</h2>
          </CardHeader>
          <CardBody>
            <ul className="flex flex-col gap-4">
              {mockUpdates.map((update, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-4">
                    <Icon icon={update.icon} className="text-2xl text-[hsl(var(--app-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{update.title}</h3>
                    <p className="text-sm text-[hsl(var(--app-foreground-600))]">
                      {update.status}: {update.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Card className="bg-[hsl(var(--app-background))] shadow-md rounded-lg p-4 h-full">
          <CardHeader className="pb-2 border-b">
            <h2 className="text-xl font-bold">Maintenance Schedule</h2>
          </CardHeader>
          <CardBody>
            <Table aria-label="Maintenance tasks table" className="w-full text-sm">
              <TableHeader>
                <TableColumn>TASK</TableColumn>
                <TableColumn>DUE DATE</TableColumn>
                <TableColumn>STATUS</TableColumn>
              </TableHeader>
              <TableBody>
                {mockMaintenanceData.map((task) => (
                  <TableRow key={task.id} className="border-b hover:bg-[hsl(var(--app-foreground-50))]">
                    <TableCell>{task.task}</TableCell>
                    <TableCell>{task.dueDate}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.status === 'Pending' ? 'bg-[hsl(var(--app-warning))] text-[hsl(var(--app-foreground-900))]' :
                        task.status === 'Scheduled' ? 'bg-[hsl(var(--app-success))] text-[hsl(var(--app-foreground-900))]' :
                        'bg-[hsl(var(--app-primary))] text-[hsl(var(--app-foreground-900))]'
                      }`}>
                        {task.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <Card className="w-full shadow-md bg-[hsl(var(--app-background))]">
          <CardHeader className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Equipment Inventory</h2>
            <Icon icon="fa6-regular:clipboard" className="text-2xl" />
          </CardHeader>
          <CardBody className="p-4">
            <Table aria-label="Equipment inventory table" className="min-w-full">
              <TableHeader>
                <TableColumn>EQUIPMENT</TableColumn>
                <TableColumn>MODEL</TableColumn>
                <TableColumn>INSTALLATION DATE</TableColumn>
                <TableColumn>LAST SERVICED</TableColumn>
                <TableColumn>CONDITION</TableColumn>
              </TableHeader>
              <TableBody>
                {mockInventoryData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.equipment}</TableCell>
                    <TableCell>{item.model}</TableCell>
                    <TableCell>{item.installationDate}</TableCell>
                    <TableCell>{item.lastServiced}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        item.condition === 'Good' ? 'bg-[hsl(var(--app-success-200))] text-[hsl(var(--app-success-700))]' :
                        item.condition === 'Fair' ? 'bg-[hsl(var(--app-warning-200))] text-[hsl(var(--app-warning-700))]' :
                        'bg-[hsl(var(--app-primary-200))] text-[hsl(var(--app-primary-700))]'
                      }`}>
                        {item.condition}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
