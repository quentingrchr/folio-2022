import React, { useEffect, useRef } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import IcomoonReact, { iconList } from 'icomoon-react'
import iconSet from '@assets/icomoon/selection.json'
import { motion } from 'framer-motion'
import { Counter } from '@components'

export type IProps = {
  loadingPercentage: number  
  layout: 'home' | 'loader'
}

const starVariants = {
  loading: (transformOffset: any) => {
    const x = transformOffset.current.x
    const y = transformOffset.current.y

    return {
      transform: `translate3d(${x}px, ${y}px, 0px) rotate(0deg)`,
    }
  },
  loaded: () => {
    return {
      transform: `translate3d(0px, 0px, 0px) rotate(0deg)`,
      transition: {
        delay: 0.2,
        duration: 1,
      }
    }
  },
}

const counterVariants  = {
  loading: {
    opacity: 1,
  },
  loaded: {
    opacity: 0,
  },
}

export default function RotatingStar({
  loadingPercentage,
  layout,
}: IProps) {
  const transformOffset = useRef({
    x: null as number | null,
    y: null as number | null,
  })
  const star = useRef(null) as any

  useEffect(() => {
    if (!star.current) return
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    // calculate transform offset to center star in view
    const starWidth = star.current.getBoundingClientRect().width
    const starHeight = star.current.getBoundingClientRect().height
    const starX = star.current.getBoundingClientRect().x
    const starY = star.current.getBoundingClientRect().y
    const transformOffsetX = windowWidth / 2 - starX - starWidth / 2
    const transformOffsetY = windowHeight / 2 - starY - starHeight / 2

    transformOffset.current = {
      x: transformOffsetX,
      y: transformOffsetY,
    }
  }, [])

  return (
    <motion.div
      ref={star}
      className={cn(s.container)}
      variants={starVariants}
      custom={transformOffset}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.div variants={counterVariants} className={s.counter}>
        <Counter value={loadingPercentage} />
      </motion.div>
      <motion.span
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5}}
        className={cn(s.thinStar, s.thinStarA)}
      >
        <IcomoonReact icon={'thin-star-a'} size={130} iconSet={iconSet} />
      </motion.span>
      <motion.span className={cn(s.thinStar, s.thinStarB)}>
        <IcomoonReact icon={'thin-star-b'} size={130} iconSet={iconSet} />
      </motion.span>
    </motion.div>
  )
}
