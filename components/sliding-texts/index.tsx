import React, { Children } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

export type IProps = {
  children: React.ReactNode
}

const data = [
  [
    'React.js',
    'Redux',
    'Next.js',
    'Framer Motion',
    'Tailwind CSS',
    'Nuxt.js',
    'Vue.js',
  ],
  [
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'EJS',
    'PHP',
  ],
]

export default function SlidingTexts({ children }: IProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  const repeat = (arr: any, n: any) => Array(n).fill(arr).flat()

  const handleMouseEnter = (e: any) => {
    if (isHovered) return
    setIsHovered(true)
  }
  const handleMouseLeave = (e: any) => {
    if (!isHovered) return
    setIsHovered(false)
  }

  const rowVariants = (position: 'top' | 'bottom') => {
    return {
      open: {
        y: position === 'top' ? '-90%' : '90%',
        transition: {
          duration: 0.2,
          // ease: [0.25, 0.35, 0.81, 1.35],
          type: 'spring',
          stiffness: 300,
          damping: 16,
        },
      },
      closed: {
        y: '0%',
        transition: {
          duration: 0.2,
          delay: 0.1,
          // ease: [0.25, 0.35, 0.81, 1.35],
          type: 'spring',
        },
      },
    }
  }

  const hiddenContainerVariants = {
    open: {
      opacity: 1,
      transform: 'scale(1)',
      transition: {
        delay: 0.2,
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
      transform: 'scale(0)',
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div
      className={s.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={s.hiddenContentContainer}
        initial="closed"
        animate={isHovered ? 'open' : 'closed'}
        variants={hiddenContainerVariants}
      >
        <div className={s.hiddenContent}>{children}</div>
      </motion.div>
      <div className={s.wrapper}>
        {data.map((row, i) => (
          <motion.div
            key={`i-${i}`}
            className={s.rowContainer}
            initial="closed"
            exit={'closed'}
            animate={!!isHovered ? 'open' : 'closed'}
            variants={rowVariants(i === 0 ? 'top' : 'bottom')}
          >
            <motion.div
              className={s.row}
              animate={{
                transform:
                  i % 2 === 0
                    ? ['translateX(0%)', 'translateX(-80%)']
                    : ['translateX(-80%)', 'translateX(0%)'],
                transition: {
                  duration: 1200,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {repeat(row, 30).map((text, j) => (
                <>
                  <div className={s.text} key={uuidv4()}>
                    {text}
                  </div>
                  <div
                    className={cn(s.text, s.separator)}
                    key={`${Math.random() * Math.random()}-${j}`}
                  >
                    /
                  </div>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
