import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { HomeHero } from '..'

export type IProps = {
  displayContent?: boolean
}

export default function LoadingScreen({ displayContent = false }: IProps) {
  return (
    <div>
      <HomeHero layout={displayContent ? 'home' : 'loader'} />
    </div>
  )
}
