import React, { useEffect } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { useLayoutEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IWorkItem } from '@interfaces'
import { useMediaQuery } from '@hooks'

export type IProps = {
  items: IWorkItem[]
  activeItem: number
}

export default function WorkDescriptions({ items, activeItem }: IProps) {
  const [maxHeight, setMaxHeight] = React.useState(0)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const descriptionStyle = (w: number) => {
    return isMobile
      ? {}
      : {
          width: w,
        }
  }

  useLayoutEffect(() => {
    const $descriptions = document.querySelectorAll('[data-description]')
    $descriptions.forEach(($description) => {
      const height = $description.getBoundingClientRect().height
      if (height > maxHeight) {
        setMaxHeight(height)
      }
    })
  }, [items])
  return (
    <motion.div
      className={s.descriptions}
      style={{
        height: maxHeight,
      }}
      key="description"
      variants={{
        hidden: {
          opacity: 0,
          transition: {
            duration: 0.8,
            ease: 'easeOut',
          },
        },
        enter: {
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: 'easeOut',
          },
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 0.8,
            ease: 'easeOut',
          },
        },
      }}
    >
      {items.map((item: any, index: any) => {
        // if (item.data === undefined) return null
        return (
          <p
            key={index}
            className={cn(s.description, {
              [s.active]: activeItem === index,
            })}
            style={descriptionStyle(item.titleWidth)}
            ref={(el) => {
              const height = el?.getBoundingClientRect().height
              if (typeof height !== 'number') return
              if (height > maxHeight) {
                setMaxHeight(height)
              }
            }}
          >
            {item.description}
          </p>
        )
      })}
    </motion.div>
  )
}
