import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { HomeHero, Loader, PageWrapper } from '@components'
import { motion } from 'framer-motion'
import Layout from '@components/layout'

const MotionHomeHero = motion(HomeHero) as any

interface IProps {
  loading: boolean
  percentage: number
}

const Home: NextPage<IProps> = ({ loading, percentage }) => {
  return (
    <>
      <Layout title="Web Developer">
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
