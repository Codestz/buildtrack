import React from 'react';
import { Input, Select, SelectItem, Textarea, Checkbox, Accordion, AccordionItem, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function NotificationRuleCreatorComponent() {
  return (
    <main className="grid grid-cols-12 gap-4 p-6">
      <section className="col-span-12">
        <h1 className="text-[hsl(var(--app-foreground-900))] text-2xl font-bold mb-4 py-2 sm:text-xl md:text-2xl lg:text-3xl">
          Create Notification Rule
        </h1>
      </section>
      <section className="col-span-12">
        <div className="bg-[hsl(var(--app-background))] p-6 rounded-2xl shadow-[var(--app-box-shadow-medium)] max-w-[600px] mx-auto">
          <div className="space-y-6">
            <Input
              label="Rule Name"
              placeholder="Enter rule name"
              variant="bordered"
              classNames={{
                label: "text-[hsl(var(--app-foreground-600))]",
                input: "text-[hsl(var(--app-foreground-900))]"
              }}
            />

            <Select
              label="Trigger Condition"
              placeholder="Select a trigger condition"
              variant="bordered"
              classNames={{
                label: "text-[hsl(var(--app-foreground-600))]",
                trigger: "text-[hsl(var(--app-foreground-900))]"
              }}
            >
              <SelectItem key="condition1" value="condition1">Condition 1</SelectItem>
              <SelectItem key="condition2" value="condition2">Condition 2</SelectItem>
              <SelectItem key="condition3" value="condition3">Condition 3</SelectItem>
            </Select>

            <Textarea
              label="Notification Content"
              placeholder="Enter notification content"
              variant="bordered"
              minRows={3}
              classNames={{
                label: "text-[hsl(var(--app-foreground-600))]",
                input: "text-[hsl(var(--app-foreground-900))]"
              }}
            />

            <div>
              <p className="text-[hsl(var(--app-foreground-600))] mb-2">Delivery Preferences</p>
              <div className="flex gap-4">
                <Checkbox value="email">
                  <Icon icon="fa6-regular:envelope" className="mr-2" />
                  Email
                </Checkbox>
                <Checkbox value="sms">
                  <Icon icon="fa6-regular:comment-sms" className="mr-2" />
                  SMS
                </Checkbox>
                <Checkbox value="push">
                  <Icon icon="fa6-regular:bell" className="mr-2" />
                  Push Notification
                </Checkbox>
              </div>
            </div>

            <Select
              label="Recurrence"
              placeholder="Select recurrence"
              variant="bordered"
              classNames={{
                label: "text-[hsl(var(--app-foreground-600))]",
                trigger: "text-[hsl(var(--app-foreground-900))]"
              }}
            >
              <SelectItem key="once" value="once">Once</SelectItem>
              <SelectItem key="daily" value="daily">Daily</SelectItem>
              <SelectItem key="weekly" value="weekly">Weekly</SelectItem>
              <SelectItem key="monthly" value="monthly">Monthly</SelectItem>
            </Select>

            <Accordion>
              <AccordionItem
                key="advanced-options"
                aria-label="Advanced Options"
                title="Advanced Options"
                classNames={{
                  title: "text-[hsl(var(--app-foreground-900))]",
                  content: "text-[hsl(var(--app-foreground-700))]"
                }}
              >
                <p className="text-[hsl(var(--app-foreground-700))] mb-2">Create complex, multi-condition rules</p>
                <Button
                  color="primary"
                  variant="flat"
                  size="sm"
                  startContent={<Icon icon="fa6-regular:plus" />}
                >
                  Add Condition
                </Button>
              </AccordionItem>
            </Accordion>

            <div className="flex justify-end gap-4 mt-8">
              <Button variant="flat" color="danger">
                Cancel
              </Button>
              <Button color="primary">
                Create Rule
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
