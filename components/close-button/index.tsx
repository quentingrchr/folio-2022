import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'

export type IProps = {
  onClick?: () => void
}

export default function CloseButton(props: IProps) {
  const { onClick } = props
  const handleClick = (e: any) => {
    e.preventDefault()
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className={s.btn} onClick={handleClick}>
      <svg
        className={s.icon}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2"
          y1="22.2132"
          x2="23.2132"
          y2="1.00002"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="1.41421"
          y1="1"
          x2="22.6274"
          y2="22.2132"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  )
}
