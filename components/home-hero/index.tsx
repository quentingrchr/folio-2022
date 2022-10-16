import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { RotatingStar, StarText } from '@components'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { isMobileState } from '@recoil/layout/atom'
import { items } from '@data/works'

export type IProps = {
  layout: 'loader' | 'home'
  loadingPercentage: number
}

const word1 = 'Quentin'
const word2 = 'Grancher'

export default function HomeHero({ layout, loadingPercentage }: any) {
  const isMobile = useRecoilValue(isMobileState)

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
        <div className={cn(s.line, s.bottomLine)}>
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
        {!isMobile ? (
          <>
            <StarText
              transition={{
                delay: 0.6,
              }}
            >
              Quentin grancher a web developer from paris
            </StarText>
            <StarText
              transition={{
                delay: 0.8,
              }}
            >
              passionate about tech and beautiful design, I’m currently open to
              work
            </StarText>
          </>
        ) : (
          <StarText
            transition={{
              delay: 0.8,
            }}
          >
            Quentin grancher a web developer from paris, passionate about tech
            and beautiful design, I’m currently open to work
          </StarText>
        )}
      </div>
      <p className={s.searchopt}>
        Hello there 👋 I'm Quentin Grancher, a web developer You can visit some
        of my work here 📚 I'm feeling confortable with ReactJS, NodeJS,
        ExpressJS, VueJS 🌱 I’m currently exploring NextJS and Strapi on an
        E-Commerce project 📫 How to reach me: Just send me an email
        q.grancher[at]gmail.com ⚡ Random fact: Star Wars / Marvel fan and I
        make music sometimes
      </p>
      {items.map((item, i) => {
        if (i === 0) return
        return (
          <article className={s.searchopt} key={i}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.data?.details}</p>
            <a
              href={item.data?.url}
              target="_blank"
              rel="noreferrer"
              title={item.title}
            >
              {item.title}
            </a>
          </article>
        )
      })}
    </div>
  )
}
