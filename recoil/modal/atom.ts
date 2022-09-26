import { atom } from 'recoil'

export const MODAL_WORK = 'MODAL_WORK'

type activeModalType = null | string
type modalDataType = null | any
export const activeModalState = atom({
  key: 'activeModal',
  default: null as activeModalType,
})

export const modalDataState = atom({
  key: 'modalData',
  default: {
    data: null as modalDataType,
  },
})