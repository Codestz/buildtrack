import React from 'react';
import { Card, CardHeader, CardBody, Chip, Input, Select, SelectItem, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function ComplianceTrackerComponent() {
  const mockDeadlines = [
    { task: 'Annual Fire Safety Inspection', dueDate: 'Due in 5 days' },
    { task: 'HVAC Maintenance Certification', dueDate: 'Due in 2 weeks' },
    { task: 'Energy Efficiency Audit', dueDate: 'Due in 1 month' },
  ];

  const mockCertifications = [
    { name: 'LEED Certification', status: 'Valid' },
    { name: 'ADA Compliance', status: 'Pending Review' },
    { name: 'Asbestos-Free Certification', status: 'Expired' },
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12 mb-4">
        <h1 className="text-[24px] font-bold text-[hsl(var(--app-foreground-900))] mb-[20px] px-[20px] md:text-[22px] lg:text-[24px]">
          Compliance Tracker
        </h1>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Card className="h-full shadow-md">
          <CardHeader className="bg-[hsl(var(--app-background))] border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold">Upcoming Deadlines</h2>
          </CardHeader>
          <CardBody className="p-4">
            <ul>
              {mockDeadlines.map((deadline, index) => (
                <li key={index} className="flex justify-between items-center py-2">
                  <span>{deadline.task}</span>
                  <span className="text-sm font-semibold text-[hsl(var(--app-danger))]">
                    {deadline.dueDate}
                  </span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Card className="h-full shadow-md">
          <CardHeader className="bg-[hsl(var(--app-background))] border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold">Certification Status</h2>
          </CardHeader>
          <CardBody className="p-4">
            <ul>
              {mockCertifications.map((cert, index) => (
                <li key={index} className="flex justify-between items-center py-2">
                  <span>{cert.name}</span>
                  <Chip
                    size="sm"
                    color={
                      cert.status === 'Valid'
                        ? 'success'
                        : cert.status === 'Pending Review'
                        ? 'warning'
                        : 'danger'
                    }
                  >
                    {cert.status}
                  </Chip>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <Card className="shadow-md mt-4">
          <CardHeader className="bg-[hsl(var(--app-background))] border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold">Document Upload</h2>
          </CardHeader>
          <CardBody className="p-4">
            <form className="space-y-4">
              <Select label="Document Type" placeholder="Select document type">
                <SelectItem key="fire-safety">Fire Safety Report</SelectItem>
                <SelectItem key="hvac-cert">HVAC Certification</SelectItem>
                <SelectItem key="energy-audit">Energy Audit Report</SelectItem>
              </Select>
              <div className="border-2 border-dashed border-[hsl(var(--app-foreground-300))] rounded-lg p-4 text-center">
                <Icon icon="fa6-regular:file" className="text-4xl mb-2" />
                <p>Upload a file or drag and drop</p>
                <p className="text-sm text-[hsl(var(--app-foreground-500))]">PDF, PNG, JPG up to 10MB</p>
              </div>
              <Button color="primary" className="w-full">
                Upload Document
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
