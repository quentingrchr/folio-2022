import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export default interface IWorkItem {
  id: string
  title: string
  description: string
  titleWidth?: number
  data?: {
    year: number
    url?: string
    image: {
      src: StaticImport | string
    }
    details: string
    meta: {
      stack: string[]
      releaseYear: number
      client: string
    }
  }
}
