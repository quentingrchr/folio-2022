import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import iconSet from '@assets/icomoon/selection.json'
import IcomoonReact, { iconList } from 'icomoon-react'
import { motion, AnimatePresence } from 'framer-motion'
export type IProps = {
  transition?: {
    delay?: number
    duration?: number
    ease?: string
  }
  children?: any
}

const variants = {
  loading: {
    opacity: 0,
  },
  loaded: {
    opacity: 1,
  },
}

export default function StarText({
  children,
  transition = { delay: 0, duration: 0.5, ease: 'easeInOut' },
}: IProps) {
    const delay = transition.delay || 0
  return (
    <div className={s.container}>
      <motion.div
        animate={{
          opacity: 1,
          transition,
        }}
        initial={{
          opacity: 0,
        }}
        className={s.star}
      >
        <IcomoonReact icon={'star-gothic'} size={46} iconSet={iconSet} />
      </motion.div>
      <motion.p
        variants={variants}
        transition={
          transition && {
            delay: 1.5 + delay
          }
        }
        className={s.text}
      >
        {children}
      </motion.p>
    </div>
  )
}
