import React from 'react';
import { Card, CardHeader, CardBody, Switch, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function NotificationCenterComponent() {
  const mockDataPreferences = [
    {
      title: 'Email Notifications',
      icon: 'fa6-regular:envelope',
      options: [
        { id: 'building-updates', label: 'Building Updates', isEnabled: true },
        { id: 'maintenance-alerts', label: 'Maintenance Alerts', isEnabled: true },
        { id: 'compliance-reminders', label: 'Compliance Reminders', isEnabled: false }
      ]
    },
    {
      title: 'Push Notifications',
      icon: 'fa6-regular:bell',
      options: [
        { id: 'critical-alerts', label: 'Critical Alerts', isEnabled: true },
        { id: 'report-generation', label: 'Report Generation', isEnabled: false },
        { id: 'system-updates', label: 'System Updates', isEnabled: true }
      ]
    }
  ];

  const mockNotifications = [
    { id: '1', type: 'Update', message: 'New energy efficiency report available for Building A', date: '2023-06-15 14:30' },
    { id: '2', type: 'Alert', message: 'Maintenance required for HVAC system in Building B', date: '2023-06-14 09:15' },
    { id: '3', type: 'Critical', message: 'Fire safety inspection due for Building C', date: '2023-06-13 16:45' },
  ];

  const mockChannels = [
    { type: 'Email', value: 'john.doe@example.com', enabled: true },
    { type: 'SMS', value: '+1 (555) 123-4567', enabled: true },
    { type: 'Push Notifications', value: 'Enabled', enabled: true }
  ];

  const getChipColorByType = (type) => {
    switch (type) {
      case 'Update': return 'success';
      case 'Alert': return 'warning';
      case 'Critical': return 'danger';
      default: return 'default';
    }
  };

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Notification Center</h1>
      </div>
      <div className="col-span-12 md:col-span-6">
        <section className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] p-6 rounded-lg shadow-[var(--app-box-shadow-medium)] h-full">
          <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>
          {mockDataPreferences.map((category) => (
            <Card key={category.title} className="mb-6 bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-small)]">
              <CardHeader className="flex gap-3">
                <Icon icon={category.icon} className="text-2xl" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </CardHeader>
              <CardBody>
                {category.options.map((option) => (
                  <div key={option.id} className="flex justify-between items-center mb-4 last:mb-0">
                    <span>{option.label}</span>
                    <Switch
                      defaultSelected={option.isEnabled}
                      size="sm"
                      color="primary"
                      aria-label={`Toggle ${option.label}`}
                    />
                  </div>
                ))}
              </CardBody>
            </Card>
          ))}
        </section>
      </div>
      <div className="col-span-12 md:col-span-6">
        <section className="bg-[hsl(var(--app-background))] rounded-lg shadow-[var(--app-box-shadow-small)] p-4 h-full">
          <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Recent Notifications</h2>
          <Table aria-label="Recent notifications table" className="w-full border-[hsl(var(--app-foreground-200))] border-[var(--app-border-width-small)]">
            <TableHeader>
              <TableColumn>TYPE</TableColumn>
              <TableColumn>MESSAGE</TableColumn>
              <TableColumn>DATE</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {mockNotifications.map((notification) => (
                <TableRow key={notification.id}>
                  <TableCell>
                    <Chip color={getChipColorByType(notification.type)} variant="flat" size="sm">
                      {notification.type}
                    </Chip>
                  </TableCell>
                  <TableCell>{notification.message}</TableCell>
                  <TableCell>{notification.date}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="light" color="primary">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
      <div className="col-span-12">
        <section className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Notification Channels</h2>
          <Card className="bg-[hsl(var(--app-background))] shadow-sm">
            <CardBody className="p-4">
              {mockChannels.map((channel, index) => (
                <div key={index} className="flex items-center justify-between mb-4 last:mb-0">
                  <div className="flex items-center">
                    <Icon 
                      icon={`fa6-regular:${channel.type.toLowerCase().replace(' ', '-')}`} 
                      className="mr-3 text-xl"
                    />
                    <div>
                      <h3 className="font-semibold">{channel.type}</h3>
                      <p className="text-sm text-[hsl(var(--app-foreground-600))]">{channel.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className={`mr-2 text-sm ${channel.enabled ? 'text-[hsl(var(--app-success))]' : 'text-[hsl(var(--app-danger))]'}`}> {channel.enabled ? 'Enabled' : 'Disabled'} </span>
                    <div className={`w-10 h-6 rounded-full ${channel.enabled ? 'bg-[hsl(var(--app-success))]' : 'bg-[hsl(var(--app-danger))]'} relative cursor-pointer`}>
                      <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${channel.enabled ? 'right-1' : 'left-1'}`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
