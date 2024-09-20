import { Icon } from '@iconify/react';
import React from 'react';
import { Sidebar, SidebarProps } from './Sidebar';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const sidebarGroups: SidebarProps['groups'] = [
    {
      items: [
        {
          label: 'Homepage',
          href: '/',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'profile',
      items: [
        {
          label: 'User Profile',
          href: '/profile',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'buildings',
      items: [
        {
          label: 'Building Dashboard',
          href: '/buildings/dashboard',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'File Manager',
          href: '/buildings/files',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'reports',
      items: [
        {
          label: 'Reports Center',
          href: '/reports',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'compliance',
      items: [
        {
          label: 'Compliance Tracker',
          href: '/compliance',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'maintenance',
      items: [
        {
          label: 'Maintenance Planner',
          href: '/maintenance',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'notifications',
      items: [
        {
          label: 'Notification Center',
          href: '/notifications',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Notification Center',
          href: '/notifications',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Notification Rule Creator',
          href: '/notifications/create-rule',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'search',
      items: [
        {
          label: 'Search Portal',
          href: '/search',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'admin',
      items: [
        {
          label: 'Admin Console',
          href: '/admin',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'User Account Management Dashboard',
          href: '/admin/user-accounts',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'User Account Creation',
          href: '/admin/user-accounts/create',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Platform Customization Dashboard',
          href: '/admin/customize-platform',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Data Field Customization',
          href: '/admin/customize-platform/data-fields',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Report and Dashboard Builder',
          href: '/admin/customize-platform/reports-dashboards',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Analytics Dashboard',
          href: '/admin/analytics',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Report Generator',
          href: '/admin/analytics/report-generator',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Report Viewer',
          href: '/admin/analytics/report-viewer',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'System Integrations Dashboard',
          href: '/admin/integrations',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Integration Configuration',
          href: '/admin/integrations/config',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'API Management',
          href: '/admin/integrations/api-management',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Data Quality Dashboard',
          href: '/admin/data-quality',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Data Validation Center',
          href: '/admin/data-quality/validation',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Data Discrepancy Resolution',
          href: '/admin/data-quality/resolution',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Compliance Dashboard',
          href: '/admin/compliance',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Compliance Task Manager',
          href: '/admin/compliance/tasks',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'settings',
      items: [
        {
          label: 'Notification Settings',
          href: '/settings/notifications',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
    {
      title: 'bulk-data-operations',
      items: [
        {
          label: 'Bulk Data Operations',
          href: '/bulk-data-operations',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Bulk Operation Results',
          href: '/bulk-data-operations/results',
          startContent: <Icon icon="mdi:cube" />,
        },
        {
          label: 'Bulk Operation Configuration',
          href: '/bulk-data-operations/config',
          startContent: <Icon icon="mdi:cube" />,
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar groups={sidebarGroups} />
      <div className="ml-[4rem] w-[calc(100%-4rem)] flex-1">{children}</div>
    </div>
  );
}
