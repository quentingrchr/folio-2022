import { motion, useViewportScroll } from 'framer-motion'
import React from 'react'
import s from './styles.module.scss'

export type IProps = {}

export default function LaxImg(props: IProps) {
  const { scrollYProgress } = useViewportScroll()
  const [hookedYPostion, setHookedYPosition] = React.useState(0)

  React.useEffect(() => {
    scrollYProgress.onChange((v) => setHookedYPosition(v))
  }, [scrollYProgress])

  return (
    <motion.div
      className={s.img}
      style={{
        backgroundImage: 'url(./imgs/me.jpg)',
        transform: `scale(1.3) translateY(${(hookedYPostion * 10 + 5) * -1}vh)`,
      }}
    />
  )
}
