import { ScrollProgress } from '@components'
import { isMobileState } from '@recoil/layout/atom'
import { scrollDisabledState } from '@recoil/scroll/atom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import s from './styles.module.scss'

type Props = {
  children: any
}

export default function Layout({ children }: Props): JSX.Element {
  const scrollDisabled = useRecoilValue(scrollDisabledState)
  const setIsMobile = useSetRecoilState(isMobileState)
  const isMobile = useRecoilValue(isMobileState)

  function onResize() {
    const newValue = window.innerWidth < 992
    if (newValue === isMobile) return
    setIsMobile(newValue)
  }

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (scrollDisabled) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [scrollDisabled])

  return (
    <>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
        className={s.main}
      >
        {children}
        {!isMobile && <ScrollProgress />}
      </motion.main>
    </>
  )
}
