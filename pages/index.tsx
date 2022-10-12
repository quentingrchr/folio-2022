import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { HomeHero, PageWrapper } from '@components'
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
      <Layout title="Web Developper">
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
