import React from 'react';
import { Card, CardBody, Avatar, User, Checkbox, CheckboxGroup, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function UserProfileComponent() {
  const mockUserData = {
    name: 'Alice Roberts',
    email: 'alice.roberts@example.com',
    avatarSrc: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    company: 'BuildingCorp Inc.',
    position: 'Property Manager',
    phone: '(555) 123-4567',
    memberSince: 'January 15, 2023',
    lastLogin: 'Today at 9:45 AM',
    subscriptionTier: 'Professional'
  };

  const mockNotificationPreferences = [
    { id: 'email', label: 'Receive email notifications', isSelected: true },
    { id: 'sms', label: 'Receive SMS notifications', isSelected: false },
    { id: 'app', label: 'Receive in-app notifications', isSelected: true }
  ];

  const subscriptionInfo = {
    currentPlan: 'Professional',
    billingCycle: 'Monthly',
    nextBillingDate: 'June 15, 2024'
  };

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-medium)] mb-6">
          <CardBody className="p-6">
            <div className="flex flex-col md:flex-row">
              <User
                name={mockUserData.name}
                description={mockUserData.email}
                avatarProps={{
                  src: mockUserData.avatarSrc,
                  size: 'lg',
                  className: 'w-20 h-20'
                }}
                classNames={{
                  name: 'text-lg font-semibold text-[hsl(var(--app-foreground-900))]',
                  description: 'text-sm text-[hsl(var(--app-foreground-600))]'
                }}
              />
              <div className="flex flex-col md:flex-row justify-between w-full mt-4 md:mt-0 md:ml-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Personal Information</h3>
                  <div className="text-sm text-[hsl(var(--app-foreground-600))]">
                    <p><Icon icon="fa6-regular:building" className="mr-2" />Company: {mockUserData.company}</p>
                    <p><Icon icon="fa6-regular:id-badge" className="mr-2" />Position: {mockUserData.position}</p>
                    <p><Icon icon="fa6-regular:phone" className="mr-2" />Phone: {mockUserData.phone}</p>
                  </div>
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                  <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Account Details</h3>
                  <div className="text-sm text-[hsl(var(--app-foreground-600))]">
                    <p><Icon icon="fa6-regular:calendar" className="mr-2" />Member Since: {mockUserData.memberSince}</p>
                    <p><Icon icon="fa6-regular:clock" className="mr-2" />Last Login: {mockUserData.lastLogin}</p>
                    <p><Icon icon="fa6-regular:star" className="mr-2" />Subscription Tier: {mockUserData.subscriptionTier}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="max-w-[400px] bg-[hsl(var(--app-background))] shadow-[var(--app-box-shadow-small)] h-full">
          <CardBody className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-[hsl(var(--app-foreground-900))]">Notification Preferences</h2>
            <CheckboxGroup className="gap-3" aria-label="Notification preferences">
              {mockNotificationPreferences.map((pref) => (
                <Checkbox
                  key={pref.id}
                  isSelected={pref.isSelected}
                  color="primary"
                  className="text-[hsl(var(--app-foreground-700))]"
                >
                  {pref.label}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="bg-[hsl(var(--app-background))] text-[hsl(var(--app-foreground-900))] shadow-[var(--app-box-shadow-medium)] h-full">
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-4">Subscription Information</h2>
            <div className="flex flex-col gap-2 mb-4">
              <p><strong>Current Plan:</strong> {subscriptionInfo.currentPlan}</p>
              <p><strong>Billing Cycle:</strong> {subscriptionInfo.billingCycle}</p>
              <p><strong>Next Billing Date:</strong> {subscriptionInfo.nextBillingDate}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Button
                color="primary"
                variant="solid"
                startContent={<Icon icon="fa6-regular:hand-point-up" />}
              >
                Upgrade Plan
              </Button>
              <Button
                color="default"
                variant="light"
              >
                View Billing History
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
