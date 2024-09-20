import React from 'react';
import { Card, CardHeader, CardBody, Switch, Select, SelectItem, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function NotificationSettingsComponent() {
  const mockNotificationOptions = [
    { id: 'email', label: 'Email Notifications', isEnabled: true },
    { id: 'sms', label: 'SMS Notifications', isEnabled: false },
    { id: 'inApp', label: 'In-App Notifications', isEnabled: true },
  ];

  const mockCategories = [
    { id: '1', name: 'Building Updates', frequency: 'Immediate' },
    { id: '2', name: 'Maintenance Reminders', frequency: 'Immediate' },
    { id: '3', name: 'Compliance Deadlines', frequency: 'Immediate' },
    { id: '4', name: 'System Notifications', frequency: 'Immediate' },
  ];

  const mockRules = [
    {
      id: '1',
      name: 'High Priority Maintenance',
      description: 'Notify immediately for any maintenance issue marked as high priority'
    },
    {
      id: '2',
      name: 'Energy Efficiency Alerts',
      description: 'Weekly digest of energy efficiency metrics for all buildings'
    }
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <h1 className="text-2xl font-semibold text-[hsl(var(--app-foreground-900))] mb-6 p-0">Notification Settings</h1>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Card className="w-full h-full bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="pb-2 pt-4 px-4 flex-col items-start">
            <h2 className="text-xl font-semibold">General Notifications</h2>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            {mockNotificationOptions.map((option) => (
              <div key={option.id} className="flex justify-between items-center py-2">
                <span className="text-sm">{option.label}</span>
                <Switch
                  isSelected={option.isEnabled}
                  size="sm"
                  color="primary"
                  className="ml-2"
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <Icon
                        icon="fa6-regular:circle"
                        className={className}
                      />
                    ) : (
                      <Icon
                        icon="fa6-regular:circle"
                        className={className}
                      />
                    )
                  }
                />
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Card className="w-full h-full bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] shadow-md">
          <CardHeader className="flex flex-col items-start px-6 pt-6 pb-0">
            <h2 className="text-xl font-semibold mb-4">Notification Categories</h2>
          </CardHeader>
          <CardBody className="px-6 py-4">
            <div className="flex flex-col gap-4">
              {mockCategories.map((category) => (
                <div key={category.id} className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <Select
                    defaultSelectedKeys={[category.frequency]}
                    className="max-w-[150px]"
                    size="sm"
                    endContent={<Icon icon="fa6-regular:hand-point-down" className="text-default-400" />}
                  >
                    <SelectItem key="Immediate" value="Immediate">Immediate</SelectItem>
                    <SelectItem key="Daily" value="Daily">Daily</SelectItem>
                    <SelectItem key="Weekly" value="Weekly">Weekly</SelectItem>
                    <SelectItem key="Monthly" value="Monthly">Monthly</SelectItem>
                  </Select>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <Card className="bg-[hsl(var(--app-background))] shadow-md">
          <CardHeader className="flex flex-col items-start">
            <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
              Custom Notification Rules
            </h2>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Button
              className="bg-[hsl(var(--app-primary))] text-white px-4 py-2 rounded-md font-semibold mb-4"
              startContent={<Icon icon="fa6-regular:plus" />}
            >
              Add New Rule
            </Button>
            {mockRules.map((rule) => (
              <div
                key={rule.id}
                className="bg-[hsl(var(--app-background-100))] rounded-md p-4 mb-2 border-[var(--app-border-width-small)] border-[hsl(var(--app-foreground-200))]"
              >
                <h3 className="font-semibold mb-2">{rule.name}</h3>
                <p className="text-sm text-[hsl(var(--app-foreground-700))]">{rule.description}</p>
                <Button
                  className="text-[hsl(var(--app-danger))] text-sm font-medium mt-2"
                  variant="light"
                  startContent={<Icon icon="fa6-regular:trash-can" />}
                >
                  Delete Rule
                </Button>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12">
        <div className="flex justify-end gap-2 p-4 border-t border-[hsl(var(--app-border))] bg-[hsl(var(--app-background))] sticky bottom-0 z-10">
          <Button
            variant="light"
            className="text-[hsl(var(--app-foreground-500))] font-semibold text-sm"
          >
            Cancel
          </Button>
          <Button
            color="success"
            className="bg-[hsl(var(--app-success))] text-[hsl(var(--app-foreground-50))] font-semibold text-sm"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </main>
  );
}
