import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { MainTitle } from '@components'
import { motion, AnimatePresence } from 'framer-motion'

export type IProps = {
  title: string
}

export default function PageTitle({ title }: IProps) {
  return (
    <div className={s.container}>
      <div className={s.title}>
        
      </div>
    </div>
  )
}
