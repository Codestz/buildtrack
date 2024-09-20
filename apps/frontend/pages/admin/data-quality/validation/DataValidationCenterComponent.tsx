import React from 'react';
import { Card, CardBody, Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Textarea, Select, SelectItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function DataValidationCenterComponent() {
  const mockRules = [
    { id: '1', name: 'Building Type Check', field: 'Building Type', condition: 'Must be in predefined list' },
    { id: '2', name: 'Year Built Validation', field: 'Year Built', condition: 'Must be between 1800 and current year' },
    { id: '3', name: 'Square Footage Range', field: 'Total Square Footage', condition: 'Must be greater than 0' },
  ];

  const mockValidationResults = [
    { field: 'Building Type', status: 'valid', message: 'Valid' },
    { field: 'Year Built', status: 'invalid', message: 'Year cannot be in the future' },
    { field: 'Total Square Footage', status: 'valid', message: 'Valid' }
  ];

  return (
    <main className="grid grid-cols-12 gap-6 p-6">
      <section className="col-span-12">
        <h1 className="text-[hsl(var(--app-foreground-900))] text-2xl font-bold mb-6">Data Validation Center</h1>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="h-full">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Validation Rules</h2>
            <div className="flex justify-between items-center mb-4">
              <Input placeholder="Search rules..." startContent={<Icon icon="fa6-regular:search" />} className="max-w-xs" />
              <Button color="primary">Add New Rule<Icon icon="fa6-regular:plus" className="ml-1" /></Button>
            </div>
            <Table aria-label="Validation rules table">
              <TableHeader>
                <TableColumn>Rule Name</TableColumn>
                <TableColumn>Field</TableColumn>
                <TableColumn>Condition</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {mockRules.map((rule) => (
                  <TableRow key={rule.id}>
                    <TableCell>{rule.name}</TableCell>
                    <TableCell>{rule.field}</TableCell>
                    <TableCell>{rule.condition}</TableCell>
                    <TableCell>
                      <Button size="sm" color="primary" variant="light" className="mr-2">Edit</Button>
                      <Button size="sm" color="danger" variant="light">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="h-full">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Create New Validation Rule</h2>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Rule Name" placeholder="Enter rule name" />
              <Select label="Field" placeholder="Select field">
                <SelectItem key="building-type">Building Type</SelectItem>
                <SelectItem key="year-built">Year Built</SelectItem>
                <SelectItem key="square-footage">Total Square Footage</SelectItem>
              </Select>
              <Textarea label="Condition" placeholder="Enter condition logic" className="col-span-2" />
            </div>
            <Button color="primary" className="mt-4">Save Rule</Button>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="h-full">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Validation Test</h2>
            <Textarea label="Sample Data (JSON)" placeholder="Enter sample data in JSON format" minRows={4} className="mb-4" />
            <Button color="primary">Run Validation</Button>
            <div className="mt-4 p-4 bg-[hsl(var(--app-background-100))] rounded-md">
              <h3 className="font-semibold mb-2">Validation Results:</h3>
              <ul>
                {mockValidationResults.map((result, index) => (
                  <li key={index} className="flex items-center">
                    <Icon icon={result.status === 'valid' ? 'fa6-regular:check-circle' : 'fa6-regular:times-circle'} className={result.status === 'valid' ? 'text-[hsl(var(--app-success))]' : 'text-[hsl(var(--app-danger))]'} width="20" height="20" />
                    <span className="ml-2"><strong>{result.field}:</strong> {result.message}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}