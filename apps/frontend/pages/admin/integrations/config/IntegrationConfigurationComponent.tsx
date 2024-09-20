import React from 'react';
import { Card, CardHeader, CardBody, Button, ButtonGroup, Input, Select, SelectItem, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';

export function IntegrationConfigurationComponent() {
  const mockData = {
    selectedIntegrationType: 'API',
    apiEndpoint: 'https://api.example.com/v1/data',
    authenticationMethod: 'API Key',
    dataMappings: [
      { sourceField: 'building_id', destinationField: 'id', dataType: 'String' },
      { sourceField: 'address', destinationField: 'location', dataType: 'String' },
      { sourceField: 'construction_date', destinationField: 'built_on', dataType: 'Date' },
    ],
    syncFrequency: 'Every 15 minutes',
    errorHandling: 'Retry 3 times',
  };

  return (
    <main className="grid grid-cols-12 gap-4 p-6">
      <section className="col-span-12">
        <Card className="h-full shadow-md">
          <CardHeader>
            <h1 className="text-2xl font-bold">Integration Configuration</h1>
          </CardHeader>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="h-full shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold">Step 1: Select Integration Type</h2>
          </CardHeader>
          <CardBody>
            <ButtonGroup>
              <Button color={mockData.selectedIntegrationType === 'API' ? 'primary' : 'default'}>API Integration</Button>
              <Button color={mockData.selectedIntegrationType === 'Webhook' ? 'primary' : 'default'}>Webhook Integration</Button>
              <Button color={mockData.selectedIntegrationType === 'File Upload' ? 'primary' : 'default'}>File Upload Integration</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="h-full shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold">Step 2: Configure API Endpoint</h2>
          </CardHeader>
          <CardBody>
            <Input label="API Endpoint URL" placeholder="https://api.example.com/v1/data" value={mockData.apiEndpoint} className="mb-4" />
            <Select label="Authentication Method" placeholder="Select authentication method" selectedKeys={[mockData.authenticationMethod]}>
              <SelectItem key="API Key">API Key</SelectItem>
              <SelectItem key="OAuth">OAuth</SelectItem>
              <SelectItem key="Basic Auth">Basic Auth</SelectItem>
            </Select>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="h-full shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold">Step 3: Data Mapping</h2>
          </CardHeader>
          <CardBody>
            <Table aria-label="Data Mapping Table">
              <TableHeader>
                <TableColumn>Source Field</TableColumn>
                <TableColumn>Destination Field</TableColumn>
                <TableColumn>Data Type</TableColumn>
              </TableHeader>
              <TableBody>
                {mockData.dataMappings.map((mapping, index) => (
                  <TableRow key={index}>
                    <TableCell>{mapping.sourceField}</TableCell>
                    <TableCell>{mapping.destinationField}</TableCell>
                    <TableCell>{mapping.dataType}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="h-full shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold">Step 4: Synchronization Settings</h2>
          </CardHeader>
          <CardBody>
            <Input label="Sync Frequency" placeholder="Every 15 minutes" value={mockData.syncFrequency} className="mb-4" />
            <Input label="Error Handling" placeholder="Retry 3 times" value={mockData.errorHandling} />
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 flex justify-between">
        <Button color="default">Save as Draft</Button>
        <div>
          <Button color="primary" className="mr-2">Test Integration</Button>
          <Button color="success">Activate Integration</Button>
        </div>
      </section>
    </main>
  );
}
