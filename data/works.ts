import { IWorkItem } from '@interfaces'
export const items: IWorkItem[] = [
  {
    id: 1,
    title: 'My [W]orks',
    description:
      'SELECTED solo and team projects I HAVE DONE SINCE 2018, scroll to navigate',
  },
  {
    id: 2,
    title: 'Simply',
    description:
      'A (fake) fully editable e-commerce website for a jewelry brand, inspired by a wix template',
    data: {
      year: 2022,
      url: 'https://simply-omega.vercel.app',
      details:
        'It is a personal project where the goal was to develop an administrable e-commerce website for a potential client. I worked alone on the development but I was inspired by a Wix template for the models. The content of the site can be edited via a back-office.',
      image: {
        src: '/imgs/simply-cover.webp',
      },
      meta: {
        stack: ['React', 'Next.js', 'Strapi', 'Sass'],
        releaseYear: 2021,
        client: 'None',
      },
    },
  },
  {
    id: 3,
    title: "Voile d'Or",
    description: 'Manageable luxury hotel website with a slick design',
    data: {
      year: 2022,
      // url: 'https://vdo.ultranoir.com/',
      image: {
        src: '/imgs/vdo-cover.webp',
      },
      details:
        "A project created from a wordpress starter named 'Presspack'. Polished designs and animations, in a complete site including a blog, several languages, and a lot of additional sections. This is a team project done at ultranoir where I worked as a developer. The content of the site can be edited via a back-office.",
      meta: {
        stack: ['Wordpress', 'PHP', 'Sass', 'JavaScript'],
        releaseYear: 2022,
        client: "Voile d'or",
      },
    },
  },
  {
    id: 4,
    title: 'Magic Ball',
    description:
      "There's nothing quite like coming up with a random excuse and canceling plans.",
    data: {
      year: 2021,
      url: 'https://magic-ball-of-excuses.vercel.app',
      image: {
        src: '/imgs/magic-cover.webp',
      },
      details:
        'A website to never hang out with friends again and get out of anything with varying levels of success. This is a personal project heavily inspired by a design found on dribble by Michael Crawford. I recreated his design and tried to bring it to life in a website.',
      meta: {
        stack: ['NextJS', 'styled-components', 'Framer Motion'],
        releaseYear: 2021,
        client: 'None',
      },
    },
  },
  {
    id: 5,
    title: 'Golden Rec.',
    description:
      'A web documentary about the mysterious Golden Record launched aboard NASA’s Voyager Spacecraft 1 and 2 in 1977',
    data: {
      url: 'https://golden-record-webdoc.netlify.app',
      year: 2021,
      image: {
        src: '/imgs/gr-cover.webp',
      },
      details:
        'This a school projet I’ve done at HETIC with a small group. The goal was to created a web documentary on a topic of our choosing. We chose to showcase the story of the Golden Record, the most ambitious message sent into space. A gold-platted disk supposed to gives a better chance for future extraterrestrial intelligence life visitors to find out that we exist or once existed.',
      meta: {
        stack: ['Vue.js', 'Sass'],
        releaseYear: 2021,
        client: 'None',
      },
    },
  },
  {
    id: 6,
    title: 'Kangou Fire',
    description: 'Vanilla js 2D maze game, you get to play a kangourou',
    data: {
      url: 'https://kangou-fire.vercel.app/',
      year: 2020,
      image: {
        src: '/imgs/kangou-cover.webp',
      },
      details:
        "This is a school project, the goal was to create a web game based on the theme of the year, which was 'Before, after'. We designed and developed a maze game based around the fact that the player can swap between environments. You're playing a kangourou in Australia forest, and you'll have find you way to the burrow with your babies. To get to the burrow you can push rocks or you can press SPACE BAR to swap on the second environment, but be careful to not swap on fire.",
      meta: {
        stack: ['Parcel', 'JavaScript', 'Sass'],
        releaseYear: 2020,
        client: 'None',
      },
    },
  },
]

export const yearData: any = {}
items.forEach((item) => {
  if (!item.data) return
  const year = item.data.year
  if (year === undefined) return
  if (!yearData[year]) {
    yearData[year] = []
  }
  yearData[year].push(item.id)
})
