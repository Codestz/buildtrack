import React from 'react';
import { Card, CardHeader, CardBody, Input, Select, SelectItem, Checkbox, CheckboxGroup, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function ReportGeneratorComponent() {
  const reportTypes = [
    { value: 'energy', label: 'Energy Efficiency' },
    { value: 'maintenance', label: 'Maintenance History' },
    { value: 'occupancy', label: 'Occupancy Rate' }
  ];

  const dataPoints = [
    { value: 'buildingAge', label: 'Building Age' },
    { value: 'totalSquareFootage', label: 'Total Square Footage' },
    { value: 'occupancyRate', label: 'Occupancy Rate' },
    { value: 'energyConsumption', label: 'Energy Consumption' },
    { value: 'maintenanceCosts', label: 'Maintenance Costs' }
  ];

  const visualizations = [
    { value: 'barCharts', label: 'Bar Charts' },
    { value: 'lineGraphs', label: 'Line Graphs' },
    { value: 'pieCharts', label: 'Pie Charts' },
    { value: 'heatMaps', label: 'Heat Maps' }
  ];

  const mockData = [
    { name: 'Q1 Energy Efficiency', type: 'Energy Efficiency', dateCreated: '2023-03-31' },
    { name: 'Annual Maintenance Summary', type: 'Maintenance History', dateCreated: '2023-12-15' }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <h1 className="text-3xl font-bold mb-6">Report Generator</h1>
      </div>
      <section className="col-span-12">
        <Card className="bg-white rounded-lg shadow-md">
          <CardHeader className="pb-2 border-b">
            <h2 className="text-xl font-bold">Create Custom Report</h2>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Report Type" placeholder="Select a report type" className="w-full">
                {reportTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                ))}
              </Select>
              <Input label="Date Range" placeholder="Select date range" startContent={<Icon icon="fa6-regular:calendar" />} type="text" className="w-full" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Points</h3>
              <CheckboxGroup>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {dataPoints.map((point) => (
                    <Checkbox key={point.value} value={point.value}>{point.label}</Checkbox>
                  ))}
                </div>
              </CheckboxGroup>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Visualizations</h3>
              <CheckboxGroup>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {visualizations.map((viz) => (
                    <Checkbox key={viz.value} value={viz.value}>{viz.label}</Checkbox>
                  ))}
                </div>
              </CheckboxGroup>
            </div>
            <div className="flex justify-end">
              <Button color="primary">Generate Report</Button>
            </div>
          </CardBody>
        </Card>
      </section>
      <section className="col-span-12">
        <Card className="bg-white shadow-md rounded-lg">
          <CardHeader className="py-2">
            <h2 className="text-xl font-bold">Saved Reports</h2>
          </CardHeader>
          <CardBody className="py-4">
            <Table aria-label="Saved reports table" className="w-full text-sm">
              <TableHeader>
                <TableColumn>REPORT NAME</TableColumn>
                <TableColumn>TYPE</TableColumn>
                <TableColumn>DATE CREATED</TableColumn>
                <TableColumn>ACTIONS</TableColumn>
              </TableHeader>
              <TableBody>
                {mockData.map((report, index) => (
                  <TableRow key={index} className="border-b">
                    <TableCell>{report.name}</TableCell>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>{report.dateCreated}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Link href="#" color="primary" underline="hover">View</Link>
                        <Button size="sm" color="danger" variant="light">Delete</Button>
                      </div>
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
