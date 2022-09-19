export const items = [
  {
    id: 1,
    title: 'My [W]orks',
    data: {
      description:
        'SELECTED solo and team projects I HAVE DONE SINCE 2018, scroll to navigate',
    },
  },
  {
    id: 2,
    title: 'Simply',
    data: {
      year: 2022,
      description:
        'A (fake) fully administable e-commerce website for a jewelry brand, inspired by a wix template',
      image: {
        src: '/imgs/simply-cover.png',
      },
    },
  },
  {
    id: 3,
    title: "Voile d'Or",
    data: {
      year: 2022,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc.',
      image: {
        src: '/imgs/vdo-cover.png',
      },
    },
  },
  {
    id: 4,
    title: 'Magic Ball',
    data: {
      year: 2021,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc.',
      image: {
        src: '/imgs/magic-cover.png',
      },
    },
  },
  {
    id: 5,
    title: 'Golden Rec.',
    data: {
      year: 2021,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc.',
      image: {
        src: '/imgs/gr-cover.png',
      },
    },
  },
  {
    id: 6,
    title: 'Kangou Fire',
    data: {
      year: 2021,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eu nunc.',
      image: {
        src: '/imgs/gr-cover.png',
      },
    },
  },
]

export const yearData: any = {}
items.forEach((item) => {
  const year = item.data.year
  if (year === undefined) return
  if (!yearData[year]) {
    yearData[year] = []
  }
  yearData[year].push(item.id)
})
