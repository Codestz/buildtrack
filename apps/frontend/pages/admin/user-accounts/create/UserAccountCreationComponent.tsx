import React from 'react';
import { Input, Select, SelectItem, CheckboxGroup, Checkbox, Button } from '@nextui-org/react';

export function UserAccountCreationComponent() {
  const roles = ['Admin', 'User', 'Manager'];
  const pricingTiers = ['Free', 'Pro', 'Enterprise'];
  const permissions = ['View Buildings', 'Edit Buildings', 'Generate Reports'];
  const accountStatuses = ['Active', 'Inactive'];

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <h1 className="text-[hsl(var(--app-foreground-900))] text-2xl font-bold py-5 mb-5">
          Create New User Account
        </h1>
      </div>
      <div className="col-span-12 lg:col-span-8 lg:col-start-3">
        <section className="bg-[hsl(var(--app-background))] p-8 rounded-lg shadow-[var(--app-box-shadow-medium)]">
          <div className="flex flex-wrap gap-4 mb-4">
            <Input
              label="First Name"
              placeholder="Enter first name"
              className="flex-1 h-full"
            />
            <Input
              label="Last Name"
              placeholder="Enter last name"
              className="flex-1 h-full"
            />
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <Input
              label="Email Address"
              placeholder="Enter email address"
              type="email"
              className="flex-1 h-full"
            />
            <Input
              label="Phone Number"
              placeholder="Enter phone number"
              type="tel"
              className="flex-1 h-full"
            />
          </div>
          <Select label="Role" placeholder="Select a role" className="mb-4">
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role}
              </SelectItem>
            ))}
          </Select>
          <Select label="Pricing Tier" placeholder="Select a pricing tier" className="mb-4">
            {pricingTiers.map((tier) => (
              <SelectItem key={tier} value={tier}>
                {tier}
              </SelectItem>
            ))}
          </Select>
          <CheckboxGroup label="Permissions" orientation="vertical" className="mb-4">
            {permissions.map((permission) => (
              <Checkbox key={permission} value={permission}>
                {permission}
              </Checkbox>
            ))}
          </CheckboxGroup>
          <Select label="Initial Account Status" placeholder="Select account status" className="mb-4">
            {accountStatuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </Select>
          <CheckboxGroup orientation="vertical" className="mb-6">
            <Checkbox value="send_welcome_email">Send welcome email</Checkbox>
            <Checkbox value="set_temporary_password">Set temporary password</Checkbox>
          </CheckboxGroup>
          <Button color="primary" className="w-full py-2 px-4 rounded-md">
            Create Account
          </Button>
        </section>
      </div>
    </main>
  );
}
