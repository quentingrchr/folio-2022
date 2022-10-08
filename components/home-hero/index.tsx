import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import IcomoonReact, { iconList } from 'icomoon-react'
import { RotatingStar, StarText } from '@components'
import { motion, AnimatePresence } from 'framer-motion'

export type IProps = {
  layout: 'loader' | 'home'
  loadingPercentage: number
}

const word1 = 'Quentin'
const word2 = 'Grancher'

export default function HomeHero({ layout, loadingPercentage }: any) {
  return (
    <div className={cn(s.hero, { [s.dark]: layout === 'loader' })}>
      <h1 className={s.title}>
        <div className={cn(s.italic, s.line)}>
          <span className={cn(s.word, s.top)}>
            {word1.split('').map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                className={s.letter}
                transition={{
                  delay: i * 0.1,
                }}
                variants={{
                  loading: {
                    transform: `translate3d(0px, 150%, 0px) rotate(0deg)`,
                  },
                  loaded: {
                    transform: `translate3d(0px, 0px, 0px) rotate(0deg)`,
                    transition: {
                      delay: 1.5 + i * 0.1,
                      duration: 0.8,
                      ease: 'easeOut',
                    },
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </div>
        <div className={s.line}>
          <span className={s.star}>
            <RotatingStar
              layout={layout}
              loadingPercentage={loadingPercentage}
            />
          </span>
          <motion.span
            variants={{
              loading: {
                opacity: 0,
                transition: {
                  delay: 1,
                },
              },
              loaded: {
                opacity: 1,
                transition: {
                  delay: 1,
                },
              },
            }}
            className={cn(s.word, s.bottom)}
          >
            {word2.split('').map((letter, i) => (
              <motion.span key={i} className={s.letter}>
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </div>
      </h1>
      <div className={s.content}>
        <StarText
          transition={{
            delay: 0.6,
          }}
        >
          Quentin grancher a web developper from paris
        </StarText>
        <StarText
          transition={{
            delay: 0.8,
          }}
        >
          passionate about tech and beautiful desgn, I’m currently open to work
        </StarText>
      </div>
    </div>
  )
}
