import type { Meta, StoryObj } from '@storybook/react';

import { SocialWidget3 } from './SocialWidget3';

const meta = {
  title: 'Components/SocialWidget3',
  component: SocialWidget3,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SocialWidget3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};