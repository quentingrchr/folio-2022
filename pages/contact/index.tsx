import { Button, Layout, MainTitle } from '@components'
import type { Metadata, NextPage } from 'next'
import s from './index.module.scss'

import 'swiper/css'

export const metadata: Metadata = {
  title: 'Quentin Grancher - Contact',
}

const Contact: NextPage = () => {
  return (
    <>
      <Layout>
        <div className={s.container}>
          <MainTitle
            title="Contact [M]e"
            text="Let's talk about what we can make"
          >
            <div className={s.btn}>
              <Button
                label="Send me an email"
                hoverText="q.grancher@gmail.com"
                fullWidth
                href="mailto:q.grancher@gmail.com"
              />
            </div>

            <div className={s.btn}>
              <Button
                label="Message me on Linked In"
                variant="secondary"
                fullWidth
                href="https://www.linkedin.com/in/quentin-grancher/"
              />
            </div>
          </MainTitle>
        </div>
      </Layout>
    </>
  )
}

export default Contact
