import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import { parseMainTitle } from '../../utils/index'
import { IMainTitleLetter } from '@interfaces'
import { Button } from '@components'

console.log(parseMainTitle)
export type IProps = {
  title: string
  text?: string
  children?: React.ReactNode
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
      staggerChildren: 0,
      staggerDirection: -1,
      delayChildren: 0,
    },
  },
}

const letterVariants = {
  exit: {
    transform: `translate3d(0px, 150%, 0px) rotate(0deg)`,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
  hidden: {
    transform: `translate3d(0px, 150%, 0px) rotate(0deg)`,
  },
  enter: {
    transform: `translate3d(0px, 0px, 0px) rotate(0deg)`,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}
export default function MainTitle({ title, text, children }: IProps) {
  return (
    <div className={s.container}>
      <div className={s.topContainer}>
        <motion.h1
          key={`title-${title}`}
          initial="hidden"
          animate="enter"
          exit="exit"
          className={s.title}
        >
          <div className={cn(s.italic, s.line)}>
            <motion.span className={cn(s.word)} variants={titleVariants}>
              {parseMainTitle(title).map(
                (letter: IMainTitleLetter, i: number) => (
                  <motion.span
                    key={`${letter}-${i}`}
                    className={cn(
                      s.letter,
                      { [s.italic]: letter.italic },
                      { [s.space]: letter.isSpace }
                    )}
                    variants={letterVariants}
                  >
                    {letter.letter}
                  </motion.span>
                )
              )}
            </motion.span>
          </div>
        </motion.h1>
        {!!text && (
          <motion.p
            className={s.text}
            variants={{
              hidden: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: {
                  delay: 1.5,
                  duration: 0.5,
                },
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              },
            }}
          >
            {text}
          </motion.p>
        )}
      </div>
      {!!children && (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            enter: {
              opacity: 1,
              transition: {
                delay: 2,
                duration: 0.5,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.2,
              },
            },
          }}
          className={s.botContainer}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
