import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

export type IProps = {
  title: string
}
const titleVariants = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: .3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delayChildren: .3,
    },
  },
}

const letterVariants = {
  exit: {
    transform: `translate3d(0px, 150%, 0px) rotate(0deg)`,
    transition: {
      duration: .8,
      ease: 'easeOut',
    },
  },
  hidden: {
    transform: `translate3d(0px, 150%, 0px) rotate(0deg)`,
  },
  enter: {
    transform: `translate3d(0px, 0px, 0px) rotate(0deg)`,
    transition: {
      duration: .8,
      ease: 'easeOut',
    },
  },
}
export default function MainTitle({ title }: IProps) {
  // return (
  //   <motion.h1
  //     key={title}
  //     className={s.title}
  //     exit={{
  //       color: 'blue',
  //       transition: {
  //         duration: 2,
  //         delay: 0.5,
  //       },
  //     }}
  //     initial={{ color: 'red' }}
  //     animate={{
  //       color: 'blue',
  //       transition: {
  //         duration: 2,
  //       },
  //     }}
  //   >
  //     {title}
  //   </motion.h1>
  // )
  return (
    <motion.h1 className={s.title} key={title}>
      <div className={cn(s.italic, s.line)}>
        <motion.span className={cn(s.word)} variants={titleVariants}>
          {title.split('').map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              className={s.letter}
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </motion.h1>
  )
}
