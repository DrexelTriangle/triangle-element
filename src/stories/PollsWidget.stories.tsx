import type { Meta, StoryObj } from '@storybook/react';

import { PollsWidget } from '../components/PollsWidget';

const meta = {
  title: 'Components/PollsWidget',
  component: PollsWidget,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PollsWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};