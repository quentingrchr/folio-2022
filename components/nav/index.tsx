import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArrowButton } from '..'
import { motion, AnimatePresence } from 'framer-motion'

export type IProps = {}

interface INavItem {
  label: string
  href: string
  arrowBtn?: boolean
}

const navData: Array<INavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Works',
    href: '/works',
    arrowBtn: true,
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export default function Nav(props: IProps) {
  const itemClass = cn(s.item, s.active)
  const router = useRouter()
  const { pathname } = router
  return (
    <motion.nav className={cn(s.nav)}>
      <ul className={cn(s.list)}>
        {navData.map((item, index) => {
          return (
            <li
              className={cn(s.item, {
                [s.active]: pathname === item.href,
              })}
              key={index}
            >
              <Link href={item.href}>{item.label}</Link>
              {item.arrowBtn && <ArrowButton />}
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
