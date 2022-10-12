import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'

export type IProps = {
  active: boolean
}

export default function Loader({ active }: IProps) {
  return (
    <motion.div
      initial={{
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      }}
      animate={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      className={cn(s.loader, { [s.active]: active })}
    ></motion.div>
  )
}
