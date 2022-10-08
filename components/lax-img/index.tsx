import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion, useViewportScroll } from 'framer-motion'

export type IProps = {}

export default function LaxImg(props: IProps) {
  const { scrollY, scrollYProgress } = useViewportScroll()
  const [hookedYPostion, setHookedYPosition] = React.useState(0)

  React.useEffect(() => {
    scrollYProgress.onChange((v) => setHookedYPosition(v))
  }, [scrollYProgress])

  // log scroll use effect
  React.useEffect(() => {
    console.log(hookedYPostion * 10 - 5)
  }, [hookedYPostion])

  return (
    <motion.div
      className={s.img}
      // initial={{
      //   transform: `scale(1.2) translateY(-${hookedYPostion * 100}%)`,
      // }}
      style={{
        backgroundImage: 'url(./imgs/me.jpg)',
        transform: `scale(1.3) translateY(${(hookedYPostion * 10 + 5) * -1}vh)`,
      }}
    />
  )
}
