import type { Meta, StoryObj } from '@storybook/react';

import { PollsWidget3 } from './PollsWidget3';

const meta = {
  title: 'Components/PollsWidget3',
  component: PollsWidget3,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PollsWidget3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};