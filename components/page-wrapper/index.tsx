import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { LoadingScreen, Nav } from '@components'
import { motion, AnimatePresence } from 'framer-motion'

export type IProps = {
  children: any
  variant?: 'loader' | 'classic'
}


export default function PageWrapper({ children, variant = 'classic' }: IProps) {
  return (
    <div className={cn(s.wrapper, { [s.dark]: variant === 'loader' })}>
      <AnimatePresence>
        {variant === 'classic' && <Nav />}
      </AnimatePresence>
      <div className={s.page}>{children}</div>
    </div>
  )
}
