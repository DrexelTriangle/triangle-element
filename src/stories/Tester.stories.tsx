import type { Meta, StoryObj } from '@storybook/react';

import { Tester } from '../components/Tester';

const meta = {
  title: 'Components/Tester',
  component: Tester,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tester>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};