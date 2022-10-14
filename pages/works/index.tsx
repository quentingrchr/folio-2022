import { ThumbnailsSlider, WorkDescriptions, WorkModal } from '@components'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import type { NextPage } from 'next'
import { Layout, MainTitle } from '@components'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  MODAL_WORK,
  activeModalState,
  modalDataState,
} from '@recoil/modal/atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useScroll } from 'framer-motion'
import s from './index.module.scss'
import { items, yearData } from '../../data/works'
import 'swiper/css'
import { isMobileState } from '@recoil/layout/atom'

import cn from 'classnames'

const Works: NextPage = () => {
  const isMobile = useRecoilValue(isMobileState)
  const [activeItem, setActiveItem] = useState<number>(0)
  const [titleSwiper, setTitleSwiper] = useState<any>(null)
  const [thumbnailSwiper, setThumbnailSwiper] = useState<any>(null)
  const [scrollRange, setScrollRange] = useState(0)
  const setActiveModal = useSetRecoilState(activeModalState)
  console.log({ isMobile })

  const { scrollY } = useScroll()
  const ghostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile) {
      setActiveItem(1)
    }
  }, [isMobile])

  useLayoutEffect(() => {
    if (isMobile) return
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
      items[i].titleWidth = containerWidth
    })

    // set the max description height
  }, [])

  useEffect(() => {
    if (titleSwiper !== null) {
      if (isMobile) {
        if (activeItem > 0) {
          titleSwiper.slideTo(activeItem)
        }
      } else {
        titleSwiper.slideTo(activeItem)
      }
    }
    if (isMobile) return

    if (thumbnailSwiper !== null) {
      if (activeItem === 0) {
        thumbnailSwiper.slideTo(0)
      } else {
        thumbnailSwiper.slideTo(activeItem - 1)
      }
    }
  }, [activeItem])

  useEffect(() => {
    if (thumbnailSwiper !== null) {
      thumbnailSwiper.on('slideChange', (swiper: any) => {
        const index = swiper.realIndex
        console.log(index)
        setActiveItem(index + 1)
      })
    }
  }, [thumbnailSwiper])

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (isMobile) return
      /* get direction */
      const direction = latest > scrollY.getPrevious() ? 'down' : 'up'
      const divider = scrollRange / items.length
      let index = 0
      const ratio = latest / divider

      if (direction === 'up') {
        index = Math.floor(ratio)
      } else {
        index = Math.ceil(ratio)
      }
      if (index > items.length - 1) return

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
      <Layout title="My Works">
        {items.map((item, index) => {
          return <WorkModal key={item.id} item={item} />
        })}
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
                allowTouchMove={isMobile}
              >
                {items.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={cn(s.titleContainer, 'title-container')}>
                        <MainTitle title={item.title} />
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <WorkDescriptions items={items} activeItem={activeItem} />
            <ThumbnailsSlider
              items={items}
              activeItem={activeItem}
              yearData={yearData}
              setThumbnailSwiper={setThumbnailSwiper}
              onItemClick={(index, id) => {
                setActiveModal(`${MODAL_WORK}__${id}`)
                if (isMobile) return
                scrollToItem(index)
              }}
            />
          </div>
        </div>
        <div
          ref={ghostRef}
          style={{ height: !!isMobile ? '100vh' : scrollRange }}
          className="ghost"
        />
      </Layout>
    </>
  )
}

export default Works
