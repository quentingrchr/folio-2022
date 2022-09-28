import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { IWorkItem } from '@interfaces'
import { useMediaQuery } from '@hooks'

export type IProps = {
  activeItem: number
  yearData: any
  items: any
  setThumbnailSwiper: any
  onItemClick: (index: number, id: number) => void
}

const Year = ({ year }: { year: number | null }) => {
  if (year === null) return null
  return (
    <div className={s.year}>
      <p>{year}</p>
    </div>
  )
}

export default function ThumbnailsSlider({
  activeItem,
  yearData,
  items,
  setThumbnailSwiper,
  onItemClick,
}: IProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <motion.div
      key={'thumbnailsContainer'}
      className={s.thumbnailsContainer}
      variants={{
        hidden: {
          opacity: 0,
          transition: {
            duration: 0.8,
            ease: 'easeOut',
          },
        },
        enter: {
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 1,
            ease: 'easeOut',
          },
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 0.8,
            ease: 'easeOut',
          },
        },
      }}
    >
      <motion.div
        className={s.thumbnails}
        variants={{
          blur: {
            transform: isMobile ? 'translate(0%, 10%)' : 'translate(0%, 50%)',
          },
          focus: {
            transform: 'translate(0%, 0%)',
          },
        }}
        transition={{
          duration: 1.5,
        }}
        initial="blur"
        animate={activeItem === 0 ? 'blur' : 'focus'}
      >
        <Swiper
          spaceBetween={110}
          speed={1500}
          onSwiper={(swiper) => setThumbnailSwiper(swiper)}
          allowTouchMove={false}
          slidesPerView={'auto'}
          wrapperClass={s.thumbnailsWrapper}
          centeredSlides={true}
        >
          {items.map((item: IWorkItem, index: number) => {
            if (index === 0 || !item.data) return null
            const year = item.data.year as number
            const prinYear = yearData[year][0] === item.id
            return (
              <SwiperSlide key={index} className={s.thumbnailSlide}>
                <div
                  key={index}
                  className={cn(s.thumbnailSlideContent, {
                    [s.hasYear]: prinYear,
                  })}
                >
                  <Year year={prinYear ? year : null} />
                  <div className={s.thumbnailContainer}>
                    <img
                      className={cn(s.thumbnail, {
                        [s.active]: activeItem === index,
                      })}
                      src={item.data?.image.src}
                      alt=""
                      onClick={() => onItemClick(index, item.id)}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>
    </motion.div>
  )
}
