import { Nav, PageWrapper } from '@components'
import type { NextPage } from 'next'
import { Layout, MainTitle } from '@components'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './index.module.scss'

import 'swiper/css'

const Works: NextPage = () => {
  return (
    <>
      <Layout title="My Works" description="desc">
        <div className={s.container}>
          <MainTitle title="About" />
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

export default Works
