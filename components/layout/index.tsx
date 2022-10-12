import React, { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { AnimatePresence, motion } from 'framer-motion'
import s from './styles.module.scss'
import { ScrollProgress } from '@components'
import { useRecoilValue } from 'recoil'
import { scrollDisabledState } from '@recoil/scroll/atom'
import Head from 'next/head'

type Props = {
  children: any
  title: string
  description?: string
}

const defaultDescription =
  'A web developper from paris, passionate about tech and beautiful design.'

export default function Layout({
  children,
  title,
  description = defaultDescription,
}: Props): JSX.Element {
  const scrollDisabled = useRecoilValue(scrollDisabledState)

  useEffect(() => {
    if (scrollDisabled) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [scrollDisabled])

  return (
    <>
      <NextSeo
        title={`Quentin Grancher - ${title}`}
        description={description}
        openGraph={{
          title,
          description,
          images: [
            {
              url: '/meta/og-image-800x800.jpg',
              width: 800,
              height: 800,
              type: 'image/jpeg',
              alt: 'Quentin Grancher',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/meta/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/meta/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/meta/favicon-16x16.png',
          },
          {
            rel: 'meta/manifest',
            href: '/meta/site.webmanifest',
          },
          {
            rel: 'mask-icon',
            href: '/meta/safari-pinned-tab.svg',
            color: '#5bbad5',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'msapplication-TileColor',
            content: '#da532c',
          },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
        ]}

        // canonical=""
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
