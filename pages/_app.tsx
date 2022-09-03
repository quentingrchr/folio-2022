import '@styles/reset.scss'
import '@styles/base.scss'
import { useEffect, useState, useRef } from 'react'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Nav } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
    </>
  )
}

export default MyApp
