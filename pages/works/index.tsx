import {
  Nav,
  PageWrapper,
  ScrollProgress,
  ThumbnailsSlider,
  WorkDescriptions,
} from '@components'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import type { NextPage } from 'next'
import { Layout, MainTitle } from '@components'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useScroll } from 'framer-motion'
import s from './index.module.scss'
import { items, yearData } from './data'
import 'swiper/css'
import cn from 'classnames'
import { Main } from 'next/document'

const Works: NextPage = () => {
  const [activeItem, setActiveItem] = useState<number>(0)
  const [titleSwiper, setTitleSwiper] = useState<any>(null)
  const [thumbnailSwiper, setThumbnailSwiper] = useState<any>(null)
  const [scrollRange, setScrollRange] = useState(0)

  const { scrollY } = useScroll()
  const ghostRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (titleSwiper && titleSwiper.$wrapperEl) {
      const $wrapper = titleSwiper.$wrapperEl[0]
      const range = $wrapper.scrollWidth
      setScrollRange(range)
    }
  }, [titleSwiper])

  useLayoutEffect(() => {
    // set title width in data array
    const $titleContainers = document.querySelectorAll('.swiper-slide h1')
    $titleContainers.forEach(($container, i) => {
      const containerWidth = $container.getBoundingClientRect().width
      items[i].data.width = containerWidth
    })

    // set the max description height
  }, [])

  useEffect(() => {
    console.log(activeItem)
    if (titleSwiper !== null) {
      titleSwiper.slideTo(activeItem)
    }
    if (thumbnailSwiper !== null) {
      if (activeItem === 0) {
        thumbnailSwiper.slideTo(0)
      } else {
        thumbnailSwiper.slideTo(activeItem - 1)
      }
    }
  }, [activeItem])

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const divider = scrollRange / items.length
      const index = Math.floor(latest / divider)
      console.log(index)
      setActiveItem(index)
    })
  }, [scrollRange])

  function scrollToItem(index: number) {
    window.scrollTo({
      top: (scrollRange / items.length) * index,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Layout title="My Works" description="desc">
        {/* <div className={s.container}> */}
        <div className={s.scrollContainer}>
          <div className={s.content}>
            <div className={s.titles}>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                speed={1500}
                direction="horizontal"
                autoHeight={true}
                className={s.swiper}
                centeredSlides={true}
                onSwiper={(swiper) => setTitleSwiper(swiper)}
                allowTouchMove={false}
              >
                {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className={cn(s.titleContainer, 'title-container')}>
                      <MainTitle title={item.title} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <WorkDescriptions items={items} activeItem={activeItem} />
            <ThumbnailsSlider
              items={items}
              activeItem={activeItem}
              yearData={yearData}
              setThumbnailSwiper={setThumbnailSwiper}
            />
          </div>
        </div>
        <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
        {/* </div> */}
      </Layout>
    </>
  )
}

export default Works
