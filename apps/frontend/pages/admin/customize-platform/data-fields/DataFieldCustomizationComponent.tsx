import React from 'react';
import { Button, Card, CardBody, CardHeader, Input, Select, SelectItem, Checkbox } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function DataFieldCustomizationComponent() {
  const mockData = [
    {
      title: 'Building Demographics',
      fields: [
        { name: 'Building Name', edit: 'Edit' },
        { name: 'Year Built', edit: 'Edit' },
        { name: 'Total Square Footage', edit: 'Edit' }
      ]
    },
    {
      title: 'Maintenance Records',
      fields: [
        { name: 'Issue Description', edit: 'Edit' },
        { name: 'Date Reported', edit: 'Edit' },
        { name: 'Resolution Status', edit: 'Edit' }
      ]
    },
    {
      title: 'Compliance',
      fields: [
        { name: 'Certification Type', edit: 'Edit' },
        { name: 'Expiration Date', edit: 'Edit' },
        { name: 'Compliance Status', edit: 'Edit' }
      ]
    }
  ];

  const fieldVisibilityOptions = [
    { id: 'propertyOwners', label: 'Property Owners' },
    { id: 'maintenanceVendors', label: 'Maintenance Vendors' },
    { id: 'insuranceCompanies', label: 'Insurance Companies' }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-8">
      <section className="col-span-12">
        <header className="bg-[hsl(var(--app-background))] mb-6">
          <h1 className="text-[hsl(var(--app-foreground-900))] text-2xl font-bold mb-2">
            Data Field Customization
          </h1>
          <p className="text-[hsl(var(--app-foreground-600))] text-sm mb-4">
            Customize data fields to fit your organization\'s specific needs. Add, edit, or remove fields, set field types, and define validation rules.
          </p>
          <Button
            color="primary"
            className="text-[hsl(var(--app-foreground-50))] text-sm font-medium"
            startContent={<Icon icon="fa6-regular:plus" />}
          >
            Add New Field
          </Button>
        </header>
      </section>

      <section className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockData.map((category, index) => (
          <Card key={index} className="h-full shadow-md">
            <CardHeader className="flex justify-between items-center p-4 bg-[hsl(var(--app-primary-100))]">
              <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">{category.title}</h3>
            </CardHeader>
            <CardBody className="p-4">
              {category.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="flex justify-between items-center mb-2">
                  <span className="text-[hsl(var(--app-foreground-700))]">{field.name}</span>
                  <Button
                    size="sm"
                    variant="light"
                    color="primary"
                    startContent={<Icon icon="fa6-regular:copy" />}
                  >
                    {field.edit}
                  </Button>
                </div>
              ))}
              <Button
                className="mt-4 w-full"
                color="primary"
                variant="flat"
              >
                + Add Field
              </Button>
            </CardBody>
          </Card>
        ))}
      </section>

      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] shadow-md">
          <CardBody className="p-6">
            <h2 className="text-xl font-semibold mb-4">Field Settings</h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Field Name"
                placeholder="Enter field name"
                variant="bordered"
                className="w-full"
              />
              <Select
                label="Field Type"
                placeholder="Select field type"
                variant="bordered"
                className="w-full"
              >
                <SelectItem key="text" value="text">Text</SelectItem>
                <SelectItem key="number" value="number">Number</SelectItem>
                <SelectItem key="date" value="date">Date</SelectItem>
              </Select>
              <Input
                label="Validation Rule"
                placeholder="Enter validation rule"
                variant="bordered"
                className="w-full"
              />
              <Input
                label="Default Value"
                placeholder="Enter default value"
                variant="bordered"
                className="w-full"
              />
              <div>
                <p className="mb-2 font-medium">Field Visibility</p>
                {fieldVisibilityOptions.map((option) => (
                  <Checkbox
                    key={option.id}
                    value={option.id}
                    className="mb-2"
                  >
                    {option.label}
                  </Checkbox>
                ))}
              </div>
              <Button
                color="primary"
                className="mt-4"
                endContent={<Icon icon="fa6-regular:save" />}
              >
                Save Changes
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
