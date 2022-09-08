import '@styles/reset.scss'
import '@styles/base.scss'
import { useEffect, useState, useRef } from 'react'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import { PageWrapper } from '@components'
import { useRouter } from 'next/router'
import { Nav } from '@components'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  const [percentage, setPercentage] = useState(0)
  const router = useRouter()
  const location = router.pathname
  const isHomePage = location === '/'

  useEffect(() => {
    if (isHomePage) {
      setLoading(true)
      setPercentage(0)
      setInterval(() => {
        setPercentage((p) => {
          if (p < 100) {
            return p + 1
          }
          return p
        })
      }, 80) // 80
    }
  }, [location, isHomePage])

  useEffect(() => {
    if (percentage >= 99) {
      setLoading(false)
    }
  }, [percentage])

  const allProps = {
    ...pageProps,
    loading,
    percentage,
  }
  return (
    <>
      <RecoilRoot>
        <PageWrapper
          variant={isHomePage ? (loading ? 'loader' : 'classic') : 'classic'}
        >
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
              <Component {...allProps} key={router.pathname} />
          </AnimatePresence>
        </PageWrapper>
      </RecoilRoot>
    </>
  )
}

export default MyApp
