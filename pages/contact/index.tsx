import { Button, Nav, PageWrapper } from '@components'
import type { NextPage } from 'next'
import { Layout, MainTitle } from '@components'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './index.module.scss'

import 'swiper/css'

const Contact: NextPage = () => {
  return (
    <>
      <Layout title="Contact Me">
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

        {/* <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
          >
            <SwiperSlide>
              <img src="https://source.unsplash.com/1600x900/" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/1600x900/" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/1600x900/" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/1600x900/" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.unsplash.com/1600x900/" alt="" />
            </SwiperSlide>
          </Swiper>
        </div> */}
      </Layout>
    </>
  )
}

export default Contact
