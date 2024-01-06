import type { Meta, StoryObj } from '@storybook/react';

import { SocialWidget } from '../components/SocialWidget';

const meta = {
  title: 'Components/SocialWidget',
  component: SocialWidget,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SocialWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};