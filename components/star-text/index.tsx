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
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 0C23 12.7015 12.7051 23 0 23C12.7051 23 23 33.2924 23 46C23 33.2985 33.2949 23 46 23C33.3011 23 23 12.7015 23 0Z"
            fill="black"
          />
        </svg>
      </motion.div>
      <motion.p
        variants={variants}
        transition={
          transition && {
            delay: 1.5 + delay,
          }
        }
        className={s.text}
      >
        {children}
      </motion.p>
    </div>
  )
}
