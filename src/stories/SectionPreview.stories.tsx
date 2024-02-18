import type { Meta, StoryObj } from '@storybook/react';

import { SectionPreview } from '../components/SectionPreview.tsx';

const Container = () => {
  const args = {
    name: "Opinion",
    code: "opinion",
    href: "https://www.thetriangle.org/opinion/",
    preview: true
  }
  return <div className="max-w-[939px]">
    <SectionPreview {...args} />
  </div>
}

const meta = {
  title: 'Components/Section Preview',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SectionPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};
