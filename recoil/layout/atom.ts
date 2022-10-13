import { atom } from 'recoil'

type dataType = boolean | null
export const isMobileState = atom({
  key: 'isMobile',
  default: null as dataType,
})
