export const SECTIONS = [
  {
    name: "News",
    code: "news",
    href: "https://www.thetriangle.org/news/",
    preview: false
  },
  {
    name: "Opinion",
    code: "opinion",
    href: "https://www.thetriangle.org/opinion/",
    preview: true
  },
  {
    name: "Arts & Entertainment",
    code: "entertainment",
    href: "https://www.thetriangle.org/entertainment/",
    preview: true
  },
  {
    name: "Sports",
    code: "sports",
    href: "https://www.thetriangle.org/sports/",
    preview: true
  },
  {
    name: "Comics",
    code: "comics",
    href: "https://www.thetriangle.org/candp/comics/",
    preview: true
  },
  {
    name: "Podcasts",
    href: "https://www.thetriangle.org/podcasts/",
    preview: false
  }
];

export const LINKS = [
  {
    name: "About",
    href: "https://www.thetriangle.org/about/"
  },
  {
    name: "Advertising",
    href: "https://www.thetriangle.org/advertising-new"
  },
  {
    name: "Donate",
    href: "https://www.thetriangle.org/donate/"
  },
  {
    name: "Contact",
    href: "https://www.thetriangle.org/contact/"
  },
  {
    name: "Staff",
    href: "https://www.thetriangle.org/staff/"
  },
  {
    name: "Join the Triangle",
    href: "https://www.thetriangle.org/join-the-triangle/"
  },
  {
    name: "Classifieds",
    href: "https://www.thetriangle.org/classifieds/"
  },
];

export const DATE_FORMATTER = Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "short",
  year: "numeric"
});
