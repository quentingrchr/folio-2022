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
      'A (fake) fully administable e-commerce website for a jewelry brand, inspired by a wix template',
    data: {
      year: 2022,
      details:
        'It is a personal project where the goal was to develop an administrable e-commerce website for a potential client. I worked alone on the development but I was inspired by a Wix template for the models. The content of the site can be edited via a back-office.',
      image: {
        src: '/imgs/simply-cover.png',
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc.',
    data: {
      year: 2022,
      image: {
        src: '/imgs/vdo-cover.png',
      },
      details:
        'It is a personal project where the goal was to develop an administrable e-commerce website for a potential client. I worked alone on the development but I was inspired by a Wix template for the models. The content of the site can be edited via a back-office.',
      meta: {
        stack: ['React', 'Next.js', 'Strapi', 'Sass'],
        releaseYear: 2021,
        client: 'None',
      },
    },
  },
  {
    id: 4,
    title: 'Magic Ball',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc.',
    data: {
      year: 2021,
      image: {
        src: '/imgs/magic-cover.png',
      },
      details:
        'It is a personal project where the goal was to develop an administrable e-commerce website for a potential client. I worked alone on the development but I was inspired by a Wix template for the models. The content of the site can be edited via a back-office.',
      meta: {
        stack: ['React', 'Next.js', 'Strapi', 'Sass'],
        releaseYear: 2021,
        client: 'None',
      },
    },
  },
  {
    id: 5,
    title: 'Golden Rec.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc.',
    data: {
      year: 2021,
      image: {
        src: '/imgs/gr-cover.png',
      },
      details:
        'It is a personal project where the goal was to develop an administrable e-commerce website for a potential client. I worked alone on the development but I was inspired by a Wix template for the models. The content of the site can be edited via a back-office.',
      meta: {
        stack: ['React', 'Next.js', 'Strapi', 'Sass'],
        releaseYear: 2021,
        client: 'None',
      },
    },
  },
  {
    id: 6,
    title: 'Kangou Fire',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc.',
    data: {
      year: 2021,
      image: {
        src: '/imgs/gr-cover.png',
      },
      details:
        'It is a personal project where the goal was to develop an administrable e-commerce website for a potential client. I worked alone on the development but I was inspired by a Wix template for the models. The content of the site can be edited via a back-office.',
      meta: {
        stack: ['React', 'Next.js', 'Strapi', 'Sass'],
        releaseYear: 2021,
        client: 'None',
      },
    },
  },
]

export const yearData: any = {}
items.forEach((item) => {
  if(!item.data) return
  const year = item.data.year
  if (year === undefined) return
  if (!yearData[year]) {
    yearData[year] = []
  }
  yearData[year].push(item.id)
})
