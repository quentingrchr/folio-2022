import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { AnimatePresence, motion } from 'framer-motion'
import s from './styles.module.scss'
import { ScrollProgress } from '@components'

type Props = {
  children: any
  title: string
  description: string
}

export default function Layout({
  children,
  title,
  description,
}: Props): JSX.Element {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
        className={s.main}
      >
        {children}
        <ScrollProgress />
      </motion.main>
    </>
  )
}
