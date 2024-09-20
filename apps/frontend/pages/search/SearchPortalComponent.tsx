import React from 'react';
import { Input, Select, SelectItem, CheckboxGroup, Checkbox, Button, Card, CardHeader, CardBody, Badge } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function SearchPortalComponent() {
  const buildingTypes = ['All Types', 'Office', 'Retail', 'Industrial', 'Residential'];
  const energyEfficiencyOptions = ['LEED Certified', 'Energy Star'];
  const amenitiesOptions = ['Parking', 'Elevator'];
  const mockResults = [
    {
      id: '1',
      name: '123 Main Street Office Building',
      location: 'New York, NY',
      size: 50000,
      certifications: ['LEED Certified']
    },
    {
      id: '2',
      name: '456 Oak Avenue Retail Center',
      location: 'Los Angeles, CA',
      size: 75000,
      certifications: ['Energy Star']
    }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <h1 className="text-[hsl(var(--app-foreground-900))] text-2xl font-bold mb-4 pl-4 sm:text-xl md:text-2xl lg:text-3xl sm:pl-2 md:pl-4 lg:pl-6">
          Advanced Search
        </h1>
      </div>
      <div className="col-span-12 md:col-span-6">
        <section className="bg-[hsl(var(--app-background))] p-6 rounded-lg shadow-[var(--app-box-shadow-medium)]">
          <form>
            <div className="mb-4">
              <Input label="Keyword" placeholder="Enter keywords..." className="w-full" />
            </div>
            <div className="mb-4">
              <Select label="Building Type" placeholder="All Types" className="w-full">
                {buildingTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="mb-4">
              <Input label="Location" placeholder="City, State, or ZIP" className="w-full" />
            </div>
            <div className="flex mb-4 gap-4">
              <Input label="Size (sq ft) - Min" placeholder="Minimum size" className="w-1/2" type="number" />
              <Input label="Size (sq ft) - Max" placeholder="Maximum size" className="w-1/2" type="number" />
            </div>
            <div className="mb-4">
              <CheckboxGroup label="Energy Efficiency" orientation="horizontal" className="gap-4">
                {energyEfficiencyOptions.map((option) => (
                  <Checkbox key={option} value={option}>{option}</Checkbox>
                ))}
              </CheckboxGroup>
            </div>
            <div className="mb-6">
              <CheckboxGroup label="Amenities" orientation="horizontal" className="gap-4">
                {amenitiesOptions.map((option) => (
                  <Checkbox key={option} value={option}>{option}</Checkbox>
                ))}
              </CheckboxGroup>
            </div>
            <Button color="primary" className="w-full font-bold uppercase" size="lg" startContent={<Icon icon="fa6-regular:magnifying-glass" />}>Search</Button>
          </form>
        </section>
      </div>
      <div className="col-span-12 md:col-span-6">
        <section className="bg-[hsl(var(--app-background))] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Search Results</h2>
          <ul className="list-none p-0 m-0">
            {mockResults.map((result) => (
              <li key={result.id} className="mb-4">
                <Card shadow="sm" className="w-full">
                  <CardHeader className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">{result.name}</h3>
                    {result.certifications.map((cert, index) => (
                      <Badge key={index} color={cert === 'LEED Certified' ? 'success' : 'primary'} variant="flat">{cert}</Badge>
                    ))}
                  </CardHeader>
                  <CardBody>
                    <div className="flex items-center text-[hsl(var(--app-foreground-600))] mb-2">
                      <Icon icon="fa6-regular:map" className="mr-2" />
                      <span>{result.location}</span>
                    </div>
                    <div className="flex items-center text-[hsl(var(--app-foreground-600))]">
                      <Icon icon="fa6-regular:building" className="mr-2" />
                      <span>{result.size.toLocaleString()} sq ft</span>
                    </div>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
