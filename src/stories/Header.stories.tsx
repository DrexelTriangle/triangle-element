import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Header } from '../components/Header';
import { HeaderMenu } from '../components/HeaderMenu';

const Container = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return <div>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
		<HeaderMenu open={menuOpen} setOpen={setMenuOpen} />
  </div>
}

const meta = {
  title: 'Components/Header',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {};
