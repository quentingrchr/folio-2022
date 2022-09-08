import { animate } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'

export type IProps = {
   value: number
}


export default function Counter({
    value,
}: IProps) {
  

  return <p className={s.counter}>{value}</p>
}
