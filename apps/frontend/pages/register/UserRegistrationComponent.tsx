import React from 'react';
import { Input, Select, SelectItem, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function UserRegistrationComponent() {
  const mockData = {
    fullName: 'John Doe',
    email: 'john@example.com',
    password: '••••••••••••••',
    userRole: 'Select a role'
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">User Registration</h1>
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={mockData.fullName}
          className="mb-4"
        />
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          value={mockData.email}
          className="mb-4"
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••••••••"
          value={mockData.password}
          className="mb-4"
        />
        <Select
          label="User Role"
          placeholder="Select a role"
          className="mb-6"
        >
          <SelectItem key="user" value="user">User</SelectItem>
          <SelectItem key="admin" value="admin">Admin</SelectItem>
          <SelectItem key="manager" value="manager">Manager</SelectItem>
        </Select>
        <div className="flex justify-between items-center">
          <Button color="primary" className="bg-blue-500 text-white">
            Register
          </Button>
          <a href="#" className="text-blue-500 text-sm">Already have an account?</a>
        </div>
        <p className="text-gray-500 text-xs mt-6 text-center">
          By registering, you agree to BuildingFax's Terms of Service and Privacy Policy.
        </p>
      </section>
    </main>
  );
}
