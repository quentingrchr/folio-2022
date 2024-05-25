import Link from 'next/link'
import s from './styles.module.scss'

export type IProps = {
  href: string
  label: string
  title?: string
  target: string
}

export default function CustomLink(props: IProps) {
  const { href, label, title, target } = props
  const isExternal = href.startsWith('http')
  const isMail = href.startsWith('mailto')
  if (isExternal) {
    return (
      <Link
        href={href}
        target={target}
        title={!!title ? title : 'External link'}
        className={s.visit}
      >
        <span className={s.visitText}>{label}</span>
        <span className={s.visitArrow}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L1 13M13 1H6.53846M13 1V7.46154"
              stroke="#212121"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    )
  } else {
    return (
      <a
        className={s.visit}
        href={href}
        target={target}
        title={!!title ? title : 'External link'}
      >
        <span className={s.visitText}>{label}</span>
        <span className={s.visitArrow}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L1 13M13 1H6.53846M13 1V7.46154"
              stroke="#212121"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    )
  }
}
