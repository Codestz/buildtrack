import React from 'react';
import { Card, CardHeader, CardBody, Chip, Link, Input, Select, SelectItem, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function MaintenancePlannerComponent() {
  const mockMaintenanceTasks = [
    { task: 'HVAC Inspection', date: 'May 15, 2024' },
    { task: 'Elevator Maintenance', date: 'May 20, 2024' },
    { task: 'Fire Alarm Testing', date: 'June 1, 2024' },
  ];

  const mockEquipmentStatus = [
    { equipment: 'Boiler', status: 'Operational' },
    { equipment: 'Chiller', status: 'Needs Attention' },
    { equipment: 'Generator', status: 'Operational' },
  ];

  const mockVendorContacts = [
    { name: 'HVAC Services Inc.', phone: '555-123-4567' },
    { name: 'Elevator Experts LLC', phone: '555-987-6543' },
    { name: 'Fire Safety Systems', phone: '555-246-8135' },
  ];

  const mockData = [
    { date: 'Apr 10, 2024', type: 'Routine Inspection', equipment: 'HVAC System', vendor: 'HVAC Services Inc.', status: 'Completed' },
    { date: 'Mar 15, 2024', type: 'Repair', equipment: 'Elevator', vendor: 'Elevator Experts LLC', status: 'Completed' },
    { date: 'Feb 28, 2024', type: 'Replacement', equipment: 'Fire Alarm System', vendor: 'Fire Safety Systems', status: 'Completed' },
  ];

  const maintenanceTypes = ['HVAC Inspection', 'Elevator Maintenance', 'Fire Alarm Testing'];
  const equipmentList = ['Boiler', 'Chiller', 'Generator'];
  const vendors = ['HVAC Services Inc.', 'Elevator Experts LLC', 'Fire Safety Systems'];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <section className="col-span-12">
        <h1 className="text-[hsl(var(--app-foreground-900))] text-2xl font-bold p-4 mb-4">
          Maintenance Planner
        </h1>
      </section>

      <section className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="shadow-[var(--app-box-shadow-small)] h-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Upcoming Maintenance</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <ul className="space-y-2">
              {mockMaintenanceTasks.map((task, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{task.task}</span>
                  <span className="text-sm text-[hsl(var(--app-foreground-500))]">
                    {task.date}
                  </span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="shadow-[var(--app-box-shadow-small)] h-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Equipment Status</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <ul className="space-y-2">
              {mockEquipmentStatus.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.equipment}</span>
                  <Chip
                    color={item.status === 'Operational' ? 'success' : 'warning'}
                    variant="flat"
                    size="sm"
                  >
                    {item.status}
                  </Chip>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="shadow-[var(--app-box-shadow-small)] h-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Vendor Contacts</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <ul className="space-y-2">
              {mockVendorContacts.map((vendor, index) => (
                <li key={index} className="flex flex-col">
                  <span>{vendor.name}</span>
                  <Link
                    href={`tel:${vendor.phone}`}
                    size="sm"
                    className="text-[hsl(var(--app-primary))]">
                    <Icon icon="fa6-regular:phone" className="mr-1" />
                    {vendor.phone}
                  </Link>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] rounded-lg shadow-md p-6 my-4">
          <CardHeader className="pb-2 border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-xl font-bold">Schedule Maintenance</h2>
          </CardHeader>
          <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <Select
              label="Maintenance Type"
              placeholder="Select type"
              className="w-full"
            >
              {maintenanceTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Equipment"
              placeholder="Select equipment"
              className="w-full"
            >
              {equipmentList.map((equipment) => (
                <SelectItem key={equipment} value={equipment}>
                  {equipment}
                </SelectItem>
              ))}
            </Select>
            <Input
              type="date"
              label="Date"
              placeholder="dd/mm/yyyy"
              className="w-full"
              startContent={
                <Icon icon="fa6-regular:calendar" className="text-[hsl(var(--app-foreground-400))]" />
              }
            />
            <Select
              label="Assign Vendor"
              placeholder="Select vendor"
              className="w-full"
            >
              {vendors.map((vendor) => (
                <SelectItem key={vendor} value={vendor}>
                  {vendor}
                </SelectItem>
              ))}
            </Select>
            <div className="col-span-full">
              <Button
                color="primary"
                className="w-full md:w-auto"
              >
                Schedule Maintenance
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-small)]">
          <CardBody>
            <h2 className="text-xl font-bold mb-4 text-[hsl(var(--app-foreground-900))]">
              Maintenance History
            </h2>
            <Table
              aria-label="Maintenance history table"
              classNames={{
                base: 'max-h-[400px] overflow-y-auto',
                table: 'min-w-full',
              }}
            >
              <TableHeader>
                <TableColumn>Date</TableColumn>
                <TableColumn>Type</TableColumn>
                <TableColumn>Equipment</TableColumn>
                <TableColumn>Vendor</TableColumn>
                <TableColumn>Status</TableColumn>
              </TableHeader>
              <TableBody>
                {mockData.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.type}</TableCell>
                    <TableCell>{record.equipment}</TableCell>
                    <TableCell>{record.vendor}</TableCell>
                    <TableCell>
                      <Chip
                        color="success"
                        variant="flat"
                        size="sm"
                      >
                        {record.status}
                      </Chip>
                    </TableCell>
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