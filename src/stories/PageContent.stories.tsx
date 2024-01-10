import type { Meta, StoryObj } from '@storybook/react';

import { PageContent } from '../components/PageContent';

const meta = {
  title: 'Components/PageContent',
  component: PageContent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};