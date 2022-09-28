import React, { Children, useEffect } from 'react'
import s from './styles.module.scss'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { activeModalState } from '@recoil/modal/atom'
import { scrollDisabledState } from '@recoil/scroll/atom'
import { useRouter } from 'next/router'

import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

export type IProps = {
  id: string
  children: any
}

export default function Modal({ id, children }: IProps) {
  const activeModal = useRecoilValue(activeModalState)
  const setActiveModal = useSetRecoilState(activeModalState)
  const setScrollDisabled = useSetRecoilState(scrollDisabledState)
  const router = useRouter()
  const url = router.pathname

  function closeModal() {
    setActiveModal((s) => {
      return null
    })
    setScrollDisabled(false)
  }

  useEffect(() => {
    console.log({ activeModal })
  }, [activeModal])

  useEffect(() => {
    if (activeModal === id) {
      setScrollDisabled(true)
    } else {
      setScrollDisabled(false)
    }
  }, [activeModal])

  useEffect(() => {
    setActiveModal((s) => null)
  }, [url])

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {activeModal === id && (
        <motion.div
          className={cn(s.modalContainer)}
          initial="initial"
          animate="open"
          exit="close"
          variants={{
            initial: {
              opacity: 0,
            },
            open: {
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
            close: {
              opacity: 0,
              transition: {
                delay: 1.8,
                duration: 0.2,
              },
            },
          }}
        >
          <div onClick={closeModal} className={s.modalOverlay}></div>
          <div className={cn(s.modalWrapper)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
