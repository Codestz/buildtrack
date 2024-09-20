import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, CheckboxGroup, Checkbox, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Code } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function APIManagementComponent() {
  const apiKeyData = {
    currentAPIKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    permissions: [
      { id: 'read', label: 'Read Building Profiles', isSelected: true },
      { id: 'write', label: 'Write Building Profiles', isSelected: false },
      { id: 'access', label: 'Access Reports', isSelected: false }
    ]
  };

  const rateLimitData = {
    requestsPerMinute: 60,
    dailyRequestLimit: 10000
  };

  const usageData = {
    totalRequests: 1234,
    averageResponseTime: 245,
    errorRate: 0.5
  };

  const endpoints = [
    { method: 'GET', path: '/api/v1/buildings' },
    { method: 'POST', path: '/api/v1/buildings' },
    { method: 'GET', path: '/api/v1/buildings/{id}' },
    { method: 'PUT', path: '/api/v1/buildings/{id}' },
    { method: 'DELETE', path: '/api/v1/buildings/{id}' }
  ];

  const sampleCode = `
// Example: Fetching a building profile
const apiKey = 'your-api-key';
const buildingId = '123';

fetch('https://api.buildingfax.com/v1/buildings/${buildingId}', {
  headers: {
    'Authorization': 'Bearer ${apiKey}',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
`;

  return (
    <main className="grid grid-cols-12 gap-6 p-6">
      <section className="col-span-12 mb-6">
        <h1 className="text-3xl font-bold text-center text-[hsl(var(--app-foreground-900))]">API Management</h1>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="w-full bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-small)] rounded-lg h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">API Keys</h2>
          </CardHeader>
          <CardBody className="gap-6">
            <div>
              <h3 className="text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-2">Current API Key</h3>
              <div className="flex items-center gap-2">
                <Input
                  value={apiKeyData.currentAPIKey}
                  readOnly
                  className="flex-grow"
                  classNames={{
                    input: "text-[hsl(var(--app-foreground-500))] text-sm",
                    inputWrapper: "bg-[hsl(var(--app-background-100))] border-[hsl(var(--app-border))] border-[var(--app-border-width-small)]"
                  }}
                  startContent={<Icon icon="fa6-regular:key" className="text-[hsl(var(--app-foreground-400))]" />}
                />
                <Button color="primary" className="bg-[hsl(var(--app-primary))] text-[hsl(var(--app-foreground-50))] font-semibold">
                  Generate New
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-2">Access Permissions</h3>
              <CheckboxGroup
                defaultValue={apiKeyData.permissions.filter(p => p.isSelected).map(p => p.id)}
                classNames={{ wrapper: "flex flex-col gap-2" }}
              >
                {apiKeyData.permissions.map((permission) => (
                  <Checkbox key={permission.id} value={permission.id} className="text-sm text-[hsl(var(--app-foreground-600))]">
                    {permission.label}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] border-[hsl(var(--app-border))] border-[var(--app-border-width-small)] rounded-lg shadow-[var(--app-box-shadow-medium)] h-full">
          <CardHeader className="flex justify-between items-center pb-2">
            <h2 className="text-lg font-semibold flex items-center">
              <Icon icon="fa6-regular:keyboard" className="mr-2" />
              Rate Limits
            </h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <Input
                type="number"
                label="Requests per minute"
                placeholder="Enter requests per minute"
                defaultValue={rateLimitData.requestsPerMinute.toString()}
                min={1}
                className="w-full md:w-auto"
                classNames={{
                  label: 'text-[hsl(var(--app-foreground-700))]',
                  input: 'bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))]'
                }}
              />
              <Input
                type="number"
                label="Daily request limit"
                placeholder="Enter daily request limit"
                defaultValue={rateLimitData.dailyRequestLimit.toString()}
                min={1}
                className="w-full md:w-auto"
                classNames={{
                  label: 'text-[hsl(var(--app-foreground-700))]',
                  input: 'bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))]'
                }}
              />
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] rounded-lg shadow-[var(--app-box-shadow-medium)] p-6 my-6">
          <CardHeader>
            <h2 className="text-2xl font-bold">API Usage Statistics</h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] rounded-md p-4 h-full">
                <CardBody>
                  <h3 className="text-lg font-semibold mb-2">Total Requests (Today)</h3>
                  <p className="text-3xl font-bold">{usageData.totalRequests}</p>
                </CardBody>
              </Card>
              <Card className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] rounded-md p-4 h-full">
                <CardBody>
                  <h3 className="text-lg font-semibold mb-2">Average Response Time</h3>
                  <p className="text-3xl font-bold">{usageData.averageResponseTime}ms</p>
                </CardBody>
              </Card>
              <Card className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] rounded-md p-4 h-full">
                <CardBody>
                  <h3 className="text-lg font-semibold mb-2">Error Rate</h3>
                  <p className="text-3xl font-bold">{usageData.errorRate}%</p>
                </CardBody>
              </Card>
            </div>
            <Card className="bg-[hsl(var(--app-background))] rounded-md p-4 mt-6">
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">Real-time API Traffic</h3>
                <div className="h-64 flex items-center justify-center bg-[hsl(var(--app-foreground-100))] rounded">
                  <Icon icon="fa6-regular:keyboard" className="text-6xl text-[hsl(var(--app-foreground-400))]" />
                  <p className="ml-2 text-[hsl(var(--app-foreground-600))]">Graph Placeholder</p>
                </div>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-medium)] rounded-[var(--app-border-radius-large)] p-6 m-6">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--app-foreground-900))]">API Documentation</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--app-foreground-800))]">
                <Icon icon="fa6-regular:file-code" className="mr-2" />
                Endpoints
              </h3>
              <Table aria-label="API Endpoints" className="mb-4" removeWrapper>
                <TableHeader>
                  <TableColumn>METHOD</TableColumn>
                  <TableColumn>PATH</TableColumn>
                </TableHeader>
                <TableBody>
                  {endpoints.map((endpoint, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Code color={endpoint.method === 'GET' ? 'success' : endpoint.method === 'POST' ? 'primary' : endpoint.method === 'PUT' ? 'warning' : 'danger'}>
                          {endpoint.method}
                        </Code>
                      </TableCell>
                      <TableCell>{endpoint.path}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--app-foreground-800))]">
                <Icon icon="fa6-regular:file" className="mr-2" />
                Sample Code
              </h3>
              <Code className="w-full p-4 bg-[hsl(var(--app-foreground-100))] rounded-[var(--app-border-radius-medium)] text-sm">
                {sampleCode}
              </Code>
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}