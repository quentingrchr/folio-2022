import React, { useEffect } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import IcomoonReact from 'icomoon-react'
import iconSet from '@assets/icomoon/selection.json'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export type IProps = {}

export default function ArrowButton(props: IProps) {
  const [idling, setIdling] = React.useState(false)
  const acceptedRoutes = ['/', '/about', '/contact']
  const route = useRouter().route
  const isAcceptedRoute = acceptedRoutes.includes(route)

  return (
    <AnimatePresence>
      {isAcceptedRoute && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,
          transition: {
            duration: 1,
            delay: 7,
          } }}
        exit={{ opacity: 0 }}
         className={s.container}>
          <div className={s.wrapper}>
            <motion.div
              className={s.icon}
              animate={{ translateY: '10px' }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: 'backInOut',
                repeatType: 'reverse',
              }}
            >
              <IcomoonReact icon={'arrow-up'} size={50} iconSet={iconSet} />
            </motion.div>
            <div className={s.button}>
              <a href="#">Click to see my works</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
