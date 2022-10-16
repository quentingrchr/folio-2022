import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import IcomoonReact from 'icomoon-react'
import iconSet from '@assets/icomoon/selection.json'
import { Modal, CloseButton, CustomLink } from '@components'
import { IWorkItem } from '@interfaces'
import { MODAL_WORK, activeModalState } from '@recoil/modal/atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { isMobileState } from '@recoil/layout/atom'
import { scrollDisabledState } from '@recoil/scroll/atom'

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
        delay: index !== 0 ? delay + (delay + 0.2) : delay,
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
  const setScrollDisabled = useSetRecoilState(scrollDisabledState)
  const setActiveModal = useSetRecoilState(activeModalState)
  const isMobile = useRecoilValue(isMobileState)
  if (!data) return null

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
            },
          },
        }}
      >
        <CloseButton
          onClick={() => {
            setActiveModal((s) => null)
            setScrollDisabled(false)
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
                  delay: isMobile ? 1.5 : 1.5,
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
            <motion.h3 className={s.title}>{title}</motion.h3>
            <p className={s.description}>{description}</p>
            <p className={s.details}>{item.data?.details}</p>
            {!!item.data?.url && (
              <div className={s.link}>
                <CustomLink
                  href={item.data?.url || '/'}
                  target="_blank"
                  title="Go to this project home page"
                  label="Visit website"
                />
              </div>
            )}
            <div className={s.infos}>
              <div className={s.info}>
                <span className={s.infoLabel}>Stack : </span>
                <span className={s.infoValue}>
                  {item.data?.meta?.stack?.join(' / ')}
                </span>
              </div>
              <div className={s.info}>
                <span className={s.infoLabel}>Release year : </span>
                <span className={s.infoValue}>{item.data?.year}</span>
              </div>
              <div className={s.info}>
                <span className={s.infoLabel}>Client : </span>
                <span className={s.infoValue}>{item.data?.meta.client}</span>
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
            {!!image && (
              <motion.img
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  open: {
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: isMobile ? 1.5 : 1.7,
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
                src={image.src}
                alt={title}
              />
            )}
          </motion.div>
        </div>
      </div>
    </Modal>
  )
}
