import React, { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { AnimatePresence, motion } from 'framer-motion'
import s from './styles.module.scss'
import { ScrollProgress } from '@components'
import { useRecoilValue } from 'recoil'
import { scrollDisabledState } from '@recoil/scroll/atom'

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
  const scrollDisabled = useRecoilValue(scrollDisabledState)

  useEffect(() => {
    console.log({scrollDisabled})
    if (scrollDisabled) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [scrollDisabled])
  
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
