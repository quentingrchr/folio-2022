import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'

export type IProps = {
  isOpen: boolean
  onClick: () => void
}

export default function Burger({ isOpen, onClick }: IProps) {
  return (
    <div
      id="menu-toggle"
      className={cn(s.menu, { [s.open]: isOpen })}
      onClick={onClick}
    >
      <span className={cn(s.bar, s.top)}></span>
      <span className={cn(s.bar, s.middle)}></span>
      <span className={cn(s.bar, s.bottom)}></span>
    </div>
  )
}
