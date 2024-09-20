import React from 'react';
import { Card, CardBody, Input, Button, Select, SelectItem, Checkbox, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BulkDataOperationsComponent() {
  const mockFileColumns = ['Name', 'Email', 'Phone', 'Address'];
  const mockSystemFields = ['Full Name', 'Email Address', 'Contact Number', 'Mailing Address'];
  const mockBuildingData = [
    { buildingName: 'Central Plaza', address: '123 Main St', city: 'New York', state: 'NY' },
    { buildingName: 'Westfield Tower', address: '456 Oak Ave', city: 'Los Angeles', state: 'CA' },
  ];
  const mockOperationHistory = [
    { date: '2023-06-15', operationType: 'One-time import', status: 'Completed', recordsProcessed: 1250 },
    { date: '2023-06-01', operationType: 'Scheduled recurring import', status: 'Completed', recordsProcessed: 2500 },
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4 p-4">
          Bulk Data Operations
        </h1>
      </div>
      <div className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-medium)]" radius="lg">
          <CardBody className="p-6 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
              Upload Data
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <Input type="file" accept=".csv,.xlsx" placeholder="Select CSV or Excel file" startContent={<Icon icon="fa6-regular:file-excel" className="text-[hsl(var(--app-foreground-500))]" />} classNames={{ base: 'w-full sm:w-auto flex-grow', input: 'text-[hsl(var(--app-foreground-700))]' }} />
              <Button color="primary" className="w-full sm:w-auto">
                Upload
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <Card className="bg-[hsl(var(--app-background))] shadow-md my-4" radius="lg">
          <CardBody className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <Select label="File Column" placeholder="Select column" className="flex-1">
                {mockFileColumns.map((column) => (
                  <SelectItem key={column} value={column}>
                    {column}
                  </SelectItem>
                ))}
              </Select>
              <Select label="System Field" placeholder="Select field" className="flex-1">
                {mockSystemFields.map((field) => (
                  <SelectItem key={field} value={field}>
                    {field}
                  </SelectItem>
                ))}
              </Select>
              <Button color="primary" className="bg-[hsl(var(--app-primary))] text-[hsl(var(--app-foreground-900))]">
                Map Columns
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <Card className="bg-[hsl(var(--app-background))] shadow-md my-4">
          <CardBody className="p-0">
            <Table aria-label="Preview changes table" classNames={{ base: 'w-full text-sm text-[hsl(var(--app-foreground-700))]', table: 'min-w-full', thead: 'bg-[hsl(var(--app-background-100))]', th: 'font-semibold text-[hsl(var(--app-foreground-500))] uppercase px-4 py-2', td: 'px-4 py-2', }}>
              <TableHeader>
                <TableColumn>BUILDING NAME</TableColumn>
                <TableColumn>ADDRESS</TableColumn>
                <TableColumn>CITY</TableColumn>
                <TableColumn>STATE</TableColumn>
              </TableHeader>
              <TableBody>
                {mockBuildingData.map((row, index) => (
                  <TableRow key={index} className="border-b border-[hsl(var(--app-border-100))] hover:bg-[hsl(var(--app-background-100))]">
                    <TableCell>{row.buildingName}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.state}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <Card className="bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-small)] m-4" radius="md">
          <CardBody className="flex flex-col gap-4 p-6">
            <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
              Execution Options
            </h3>
            <Select label="Operation Type" placeholder="Select operation type" className="w-full">
              <SelectItem value="one-time import">One-time import</SelectItem>
              <SelectItem value="scheduled recurring import">Scheduled recurring import</SelectItem>
            </Select>
            <Checkbox className="mt-2">
              Apply data validation rules
            </Checkbox>
            <Button className="self-end mt-4 bg-[hsl(var(--app-primary))] text-[hsl(var(--app-foreground-50))]" radius="sm" endContent={<Icon icon="fa6-regular:calendar-check" />}>
              Execute Bulk Operation
            </Button>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
          <CardBody className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-[hsl(var(--app-foreground-900))]">
              Operation History
            </h2>
            <Table aria-label="Operation history table" className="min-w-full" classNames={{ th: 'bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))] font-semibold', td: 'text-[hsl(var(--app-foreground-800))]', }}>
              <TableHeader>
                <TableColumn>DATE</TableColumn>
                <TableColumn>OPERATION TYPE</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn>RECORDS PROCESSED</TableColumn>
              </TableHeader>
              <TableBody>
                {mockOperationHistory.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center">
                        <Icon icon="fa6-regular:calendar" className="mr-2" />
                        {item.date}
                      </div>
                    </TableCell>
                    <TableCell>{item.operationType}</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <Icon icon={item.status === 'Completed' ? 'fa6-regular:circle-check' : 'fa6-regular:circle-xmark'} className={`mr-2 ${item.status === 'Completed' ? 'text-[hsl(var(--app-success))]' : 'text-[hsl(var(--app-danger))]'}`} />
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell>{item.recordsProcessed.toLocaleString()}</TableCell>
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