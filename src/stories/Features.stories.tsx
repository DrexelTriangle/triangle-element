import type { Meta, StoryObj } from '@storybook/react';

import { Features } from '../components/Features.tsx';

const meta = {
  title: 'Components/Features',
  component: Features,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
};
