import { HomeHero, Loader } from '@components'
import Layout from '@components/layout'
import { motion } from 'framer-motion'
import type { Metadata, NextPage } from 'next'
import Head from 'next/head'

const MotionHomeHero = motion(HomeHero) as any

interface IProps {
  loading: boolean
  percentage: number
}

export const metadata: Metadata = {
  title: 'Quentin Grancher',
  description:
    'A web developer from paris, passionate about tech and beautiful design.',
  openGraph: {
    title: 'Quentin Grancher',
    description:
      'A web developer from paris, passionate about tech and beautiful design.',
    images: [
      {
        url: `meta/og-image-800x800.jpg`,
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Quentin Grancher',
      },
    ],
  },
  icons: ['meta/favicon-16x16.png', 'meta/favicon-32x32.png'],
}

const Home: NextPage<IProps> = ({ loading, percentage }) => {
  return (
    <>
      <Layout>
        <Head>
          <link rel="preload" as="image" href="/imgs/gr-cover.webp"></link>
          <link rel="preload" as="image" href="/imgs/kangou-cover.webp"></link>
          <link rel="preload" as="image" href="/imgs/magic-cover.webp"></link>
          <link rel="preload" as="image" href="/imgs/simply-cover.webp"></link>
          <link rel="preload" as="image" href="/imgs/vdo-cover.webp"></link>
          <link rel="preload" as="image" href="/imgs/me.jpg"></link>
        </Head>
        <Loader active={loading} />
        <MotionHomeHero
          initial={'loading'}
          animate={loading ? 'loading' : 'loaded'}
          transition={{ duration: 1, ease: 'easeInOut' }}
          loadingPercentage={percentage}
        />
      </Layout>
    </>
  )
}

export default Home
