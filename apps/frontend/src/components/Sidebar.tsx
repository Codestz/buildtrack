import { Icon } from '@iconify/react';

import { Button, Divider, Listbox, ListboxItem } from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export interface SidebarItems {
  label: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  href: string;
}

export interface SidebarGroup {
  title?: string;
  items: SidebarItems[];
}

export interface SidebarProps {
  groups: SidebarGroup[];
}

export function Sidebar({ groups }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <div
      className="!border-r-small border-divider transition-width fixed z-[9999] flex h-full w-16 flex-col bg-white px-1 py-6 hover:w-72"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-3 px-3">
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
          <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        {open && (
          <h2 className="text-lg font-semibold text-black">BuildTrack</h2>
        )}
      </div>
      <div className="h-5/6">
        <div className="no-scrollbar h-full overflow-y-auto py-6">
          {groups.map((group, groupIndex) => (
            <div
              className="relative flex w-full list-none flex-col gap-1 p-1"
              key={`sidebar-group-${groupIndex}`}
            >
              {groupIndex !== 0 && <Divider />}
              <Listbox variant="shadow">
                {group.items.map((item, itemIndex) => (
                  <ListboxItem
                    color="primary"
                    key={`sidebar-item-${itemIndex}`}
                    {...(item.endContent && {
                      endContent: item.endContent,
                    })}
                    {...(item.startContent && {
                      startContent: item.startContent,
                    })}
                    href={item.href}
                    className={`group relative flex h-10 w-full items-center justify-between gap-2 ${isActive(item.href) ? 'bg-primary text-white' : ''} ${open ? '[&>span]:display' : 'justify-center [&>span]:hidden'} ${group.items.length > 1 ? 'my-2 py-1.5' : ''}`}
                  >
                    {item.label}
                  </ListboxItem>
                ))}
              </Listbox>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-col">
        <Button
          size="sm"
          variant="light"
          startContent={
            <Icon icon="mdi:arrow-left-bold-box-outline" className="size-4" />
          }
          onClick={() => signOut()}
          color={'danger'}
          className={`h-10 w-full justify-start ${open ? '[&>span]:display' : 'justify-center [&>span]:hidden'} `}
        >
          <span>Log Out</span>
        </Button>
      </div>
    </div>
  );
}
