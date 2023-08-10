import type { Meta, StoryObj } from '@storybook/react';

import { HeaderFrontPage } from './HeaderFrontPage';

const meta = {
  title: 'Components/HeaderFrontPage',
  component: HeaderFrontPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeaderFrontPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};