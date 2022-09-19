import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion, useScroll } from 'framer-motion'

export type IProps = {}

export default function ScrollProgress(props: IProps) {
  const { scrollYProgress } = useScroll()
  return (
    <div className={s.container}>
      <div className={s.bar}>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className={s.progress}
        ></motion.div>
      </div>
    </div>
  )
}
