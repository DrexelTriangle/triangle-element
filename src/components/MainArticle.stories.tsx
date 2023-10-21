import type { Meta, StoryObj } from '@storybook/react';

import { MainArticle } from './MainArticle';

const meta = {
  title: 'Components/Main Article',
  component: MainArticle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: {
    article: {
      title: "Vigil for Palestinians held at University of Pennsylvania",
      link: "https://www.thetriangle.org/news/vigil-for-palestinians-held-at-university-of-pennsylvania/",
      category: "News",
      author: "Zaryab Amed",
      date: new Date("2023-10-20 09:00:00"),
      preview: "Members of the University of Pennsylvania, Drexel University and neighboring communities gathered in front of the Van Pelt Library on Wednesday, Oct. 18, at 12…"
    },
    image: {
      url: "https://www.thetriangle.org/wp-content/uploads/2023/10/Samuel-Gregg-17-2048x1536.jpg"
    }
  }
};