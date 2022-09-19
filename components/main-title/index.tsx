import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import { parseMainTitle } from '../../utils/index'
import { IMainTitleLetter } from '@interfaces'

console.log(parseMainTitle)
export type IProps = {
  title: string
}
const titleVariants = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delayChildren: 0.3,
    },
  },
}

const letterVariants = {
  exit: {
    transform: `translate3d(0px, 150%, 0px) rotate(0deg)`,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  hidden: {
    transform: `translate3d(0px, 150%, 0px) rotate(0deg)`,
  },
  enter: {
    transform: `translate3d(0px, 0px, 0px) rotate(0deg)`,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}
export default function MainTitle({ title }: IProps) {
  return (
    <motion.h1
      key={`title-${title}`}
      initial="hidden"
      animate="enter"
      exit="exit"
      className={s.title}
    >
      <div className={cn(s.italic, s.line)}>
        <motion.span className={cn(s.word)} variants={titleVariants}>
          {parseMainTitle(title).map((letter: IMainTitleLetter, i: number) => (
            <motion.span
              key={`${letter}-${i}`}
              className={cn(s.letter, 
                { [s.italic]: letter.italic },
                { [s.space]: letter.isSpace },
                )}
              variants={letterVariants}
            >
              {letter.letter}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </motion.h1>
  )
}
