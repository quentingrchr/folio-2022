import { atom } from 'recoil'

type dataType = boolean
export const isMobileState = atom({
  key: 'isMobile',
  default: false as dataType,
})
