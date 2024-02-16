import type { Meta, StoryObj } from '@storybook/react';

import { SectionPreview } from '../components/SectionPreview.tsx';

const meta = {
  title: 'Components/SectionPreview',
  component: SectionPreview,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SectionPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};
