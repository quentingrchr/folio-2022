import cn from 'classnames'
import Link from 'next/link'
import React from 'react'
import s from './styles.module.scss'

export type IProps = {
  label: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  hoverText?: string
  fullWidth?: boolean
  download?: boolean
  target?: string
}

export default function Button({
  label,
  href,
  onClick,
  hoverText,
  variant = 'primary',
  fullWidth = false,
  ...otherProps
}: IProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  function handleClick(e: any) {
    e.preventDefault()
    if (onClick) {
      onClick()
    }
  }

  function handleMouseEnter() {
    setIsHovered(true)
  }

  function handleMouseLeave() {
    setIsHovered(false)
  }

  if (href !== undefined) {
    return (
      <Link
        href={href}
        target="_blank"
        className={cn(s.button, s[variant], {
          [s.fullWidth]: fullWidth,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...otherProps}
      >
        {!hoverText ? label : isHovered ? hoverText : label}
      </Link>
    )
  } else {
    return (
      <div
        className={cn(s.button, s[variant], {
          [s.fullWidth]: fullWidth,
        })}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...otherProps}
      >
        <p className={s.label}>
          {!hoverText ? label : isHovered ? hoverText : label}
        </p>
      </div>
    )
  }
}
