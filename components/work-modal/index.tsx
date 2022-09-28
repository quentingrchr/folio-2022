import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import IcomoonReact from 'icomoon-react'
import iconSet from '@assets/icomoon/selection.json'
import { Modal, CloseButton } from '@components'
import { IWorkItem } from '@interfaces'
import { MODAL_WORK, activeModalState } from '@recoil/modal/atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useMediaQuery } from '@hooks'

export type IProps = {
  item: IWorkItem
}

function imageLayerAnim(
  index: number,
  duration: number,
  delay: number,
  isMobile: boolean
) {
  const mobileOverwriteOpen = isMobile
    ? {
        delay: index !== 0 ? delay + delay : delay,
      }
    : {}

  const mobileOverwriteClose = isMobile
    ? {
        delay: index !== 0 ? delay : delay + delay,
      }
    : {}
  return {
    initial: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    open: {
      clipPath: isMobile
        ? 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
        : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
      transition: {
        duration: duration,
        delay: index !== 0 ? delay + (delay + 0.2) : delay ,
        ...mobileOverwriteOpen,
      },
    },
    close: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transition: {
        duration: duration,
        delay: index !== 1 ? delay + delay : delay,
        ...mobileOverwriteClose,
      },
    },
  }
}

export default function WorksModal({ item }: IProps) {
  const { title, description, data, id } = item
  console.log({ item })
  const setActiveModal = useSetRecoilState(activeModalState)
  if (!data) return null
  const isMobile = useMediaQuery('(max-width: 768px)')

  const { year, image, meta, details } = data
  return (
    <Modal id={`${MODAL_WORK}__${id}`}>
      <motion.div
        variants={imageLayerAnim(1, 0.6, 0.5, isMobile)}
        className={s.imageLayer2}
      ></motion.div>
      <motion.div
        variants={imageLayerAnim(0, 0.6, 0.5, isMobile)}
        className={s.imageLayer1}
      ></motion.div>
      <motion.div
        className={s.closeBtn}
        variants={{
          initial: {
            opacity: 0,
          },
          open: {
            opacity: 1,
            transition: {
              delay: 2,
            },
          },
          close: {
            opacity: 0,
            transition: {
              delay: 2,
            }
          },
        }}
      >
        <CloseButton
          onClick={() => {
            setActiveModal((s) => null)
          }}
        />
      </motion.div>
      <div className={s.container}>
        <div className={s.content}>
          <motion.div
            className={s.texts}
            variants={{
              initial: {
                opacity: 0,
              },
              open: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: isMobile ? 1.5 : 1,
                },
              },
              close: {
                opacity: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.5,
                },
              },
            }}
          >
            <motion.h1 className={s.title}>{title}</motion.h1>
            <p className={s.description}>{description}</p>
            <p className={s.details}>
              It is a personal project where the goal was to develop an
              administrable e-commerce website for a potential client. I worked
              alone on the development but I was inspired by a Wix template for
              the models. The content of the site can be edited via a
              back-office.
            </p>
            <Link href="/">
              <a className={s.visit}>
                <span className={s.visitText}>Visit website</span>
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
            </Link>

            <div className={s.infos}>
              <div className={s.info}>
                <span className={s.infoLabel}>Stack : </span>
                <span className={s.infoValue}>
                  Next.JS, Strapi, Vercel, AWS
                </span>
              </div>
              <div className={s.info}>
                <span className={s.infoLabel}>Release year : </span>
                <span className={s.infoValue}>2022</span>
              </div>
              <div className={s.info}>
                <span className={s.infoLabel}>Client : </span>
                <span className={s.infoValue}>None</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={s.image}
            initial="initial"
            animate="open"
            exit="close"
            variants={{
              open: {
                opacity: 1,
                transition: {
                  duration: 8,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {!!image && <img src={image.src} alt="image" />}
          </motion.div>
        </div>
      </div>
    </Modal>
  )
}
