import { IWorkItem } from '@interfaces'
import cloudyBayCover from '@public/imgs/cloudy-bay-cover.webp'
import grCover from '@public/imgs/gr-cover.png'
import hamoniqueCover from '@public/imgs/harmonique-cover.png'
import kangouCover from '@public/imgs/kangou-cover.png'
import magicCover from '@public/imgs/magic-cover.png'
import passwordCover from '@public/imgs/password-cover.webp'
import vdoCover from '@public/imgs/vdo-cover.png'

export const items: IWorkItem[] = [
  {
    id: 'main',
    title: 'My [W]orks',
    description:
      'SELECTED solo and team projects I HAVE DONE SINCE 2018, scroll to navigate',
  },
  {
    id: 'harmonique',
    title: 'Harmonique',
    description:
      'A Web application to search, find and filter songs by music key/bpm in a spotify playlist',
    data: {
      year: 2024,
      url: 'https://harmonique.vercel.app',
      details:
        "It's a personal project where the goal was to utilize Spotify's API. I created the application from scratch",
      image: {
        src: hamoniqueCover,
      },
      meta: {
        stack: ['React', 'Next.js'],
        releaseYear: 2024,
        client: 'None',
      },
    },
  },
  {
    id: 'password',
    title: 'Password',
    description: 'A small website to create a password with a few clicks',
    data: {
      year: 2023,
      url: 'https://password-generator-quentingrchr.vercel.app/',
      details:
        'Password generator creates random passwords based on parameters you set. Like length, wether it should contains uppercased letters, symbols or numbers. Easy to use.',
      image: {
        src: passwordCover,
      },
      meta: {
        stack: ['Svelte', 'Sass'],
        releaseYear: 2023,
        client: 'None',
      },
    },
  },
  {
    id: 'cloudy-bay',
    title: 'Cloudy Bay',
    description: 'A light e-commerce website for a winery in New Zealand',
    data: {
      year: 2022,
      url: 'https://www.cloudybay.com/',
      details:
        'This is a team project where we had to develop an editable e-commerce website. I worked with 3 other developers, and I was mainly focused on the front-end part of the website. The content of the site can be edited via a Drupal back-office.',
      image: {
        src: cloudyBayCover,
      },
      meta: {
        stack: ['Gatsby', 'Styled components', 'Drupal', 'GraphQL'],
        releaseYear: 2022,
        client: 'Cloudy Bay',
      },
    },
  },
  {
    id: 'the-collection',
    title: 'The Collection',
    description: 'Manageable luxury hotel website with a slick design',
    data: {
      year: 2022,
      url: 'https://the-c.com/fr/',
      image: {
        src: vdoCover,
      },
      details:
        "A project created from a wordpress starter named 'Presspack'. Polished designs and animations, in a complete site including a blog, several languages, and a lot of additional sections. This is a team project done at ultranoir where I worked as a developer. The content of the site can be edited via a back-office.",
      meta: {
        stack: ['Wordpress', 'PHP', 'Sass', 'JavaScript'],
        releaseYear: 2022,
        client: 'The Collection',
      },
    },
  },
  {
    id: 'magic-ball',
    title: 'Magic Ball',
    description:
      "There's nothing quite like coming up with a random excuse and canceling plans.",
    data: {
      year: 2021,
      url: 'https://magic-ball-of-excuses.vercel.app',
      image: {
        src: magicCover,
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
    id: 'golden-record',
    title: 'Golden Rec.',
    description:
      'A web documentary about the mysterious Golden Record launched aboard NASA’s Voyager Spacecraft 1 and 2 in 1977',
    data: {
      url: 'https://golden-record-webdoc.netlify.app',
      year: 2021,
      image: {
        src: grCover,
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
    id: 'kangou-fire',
    title: 'Kangou Fire',
    description: 'Vanilla js 2D maze game, you get to play a kangourou',
    data: {
      url: 'https://kangou-fire.vercel.app/',
      year: 2020,
      image: {
        src: kangouCover,
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
] as IWorkItem[]

export type YearData = Record<number, string[]>

export const yearData: YearData = {}

items.forEach((item) => {
  if (!item.data) return
  const year = item.data.year
  if (year === undefined) return
  if (!yearData[year]) {
    yearData[year] = []
  }
  yearData[year].push(item.id)
})
