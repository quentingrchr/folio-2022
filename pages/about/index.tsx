import {
  Button,
  LaxImg,
  Nav,
  PageWrapper,
  SlidingTexts,
  CustomLink,
} from '@components'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Layout, MainTitle } from '@components'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './index.module.scss'
import { motion, useScroll } from 'framer-motion'

export const Description = () => {
  return (
    <>
      <p>
        I've always loved creating with my computer. Whether through video
        editing, musical production, or graphic design. After a few years of
        studying as a sound engineering. I worked for some time in a radio
        station where I first heard about the <em>web development</em>{' '}
        profession. Intrigued, a friend advised me to pursue a bachelor's degree
        at{' '}
        <CustomLink
          target="_blank"
          href="https://www.hetic.net/"
          title="Hetic's homepage"
          label="HETIC"
        />
        , highly motivated and curious I began to learn <em>HTML</em> /{' '}
        <em>CSS</em> and
        <em> JavaScript</em> by myself before entering my bachelor.
      </p>
      <p>
        Fast forward to 2022. After many experiences,
        <CustomLink
          target="_blank"
          href="/works"
          title="My works page"
          label="projects"
        />{' '}
        and 2 years of experience as a web developer in a{' '}
        <CustomLink
          target="_blank"
          href="https://www.ultranoir.com/"
          title="ultranoir homepage"
          label="digital agency"
        />
        , I became confident and I can even say today that I discovered a new
        passion for web development and tech.
      </p>
    </>
  )
}

const About: NextPage = () => {
  return (
    <>
      <Layout title="About Me">
        <div className={s.container}>
          <MainTitle title="[A]bout [M]e" />
        </div>
        <div className={s.container}>
          <section className={s.firstSection}>
            <div className={s.firstSectionTexts}>
              <div className={s.firstSectionTitleContainer}>
                <h2 className={s.firstSectionTitle}>
                  <motion.span
                    className={s.italic}
                    variants={{
                      hidden: {
                        transform: 'translateY(120%)',
                      },
                      enter: {
                        transform: 'translateY(0%)',
                        transition: {
                          duration: 0.5,
                          delay: 1,
                        },
                      },
                      exit: {
                        transform: 'translateY(100%)',
                        transition: {
                          duration: 0.5,
                          delay: 0,
                        },
                      },
                    }}
                  >
                    B
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: {
                        transform: 'translateY(120%)',
                      },

                      enter: {
                        transform: 'translateY(0%)',
                        transition: {
                          duration: 0.5,
                          delay: 1,
                        },
                      },
                      exit: {
                        transform: 'translateY(100%)',
                        transition: {
                          duration: 0.5,
                          delay: 0,
                        },
                      },
                    }}
                  >
                    ackground
                  </motion.span>
                </h2>
                <motion.div
                  className={s.firstSectionLine}
                  variants={{
                    hidden: {
                      transform: 'scaleY(0)',
                    },
                    enter: {
                      transform: 'scaleY(1)',
                      transition: {
                        duration: 0.5,
                        delay: 1.5,
                      },
                    },
                    exit: {
                      transform: 'scaleY(0)',
                      transition: {
                        duration: 0.1,
                      },
                    },
                  }}
                ></motion.div>
              </div>

              <motion.div
                className={s.firstSectionParagraph}
                variants={{
                  hidden: {
                    opacity: 0,
                    filter: 'blur(10px)',
                  },
                  enter: {
                    opacity: 1,
                    filter: 'blur(0px)',
                    transition: {
                      duration: 1,
                      ease: [0.6, 0.05, -0.01, 0.9],
                      delay: 1.5,
                    },
                  },
                  exit: {
                    opacity: 0,
                    filter: 'blur(10px)',
                    transition: {
                      duration: 0.5,
                      delay: 0,
                    },
                  },
                }}
              >
                <Description />
              </motion.div>
            </div>
            <motion.div
              className={s.firstSectionImage}
              variants={{
                hidden: {
                  opacity: 0,
                },
                enter: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: [0.6, 0.05, -0.01, 0.9],
                    delay: 1.5,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0,
                  },
                },
              }}
            >
              <LaxImg />
            </motion.div>
          </section>
          <SlidingTexts>
            <div className={s.button}>
              <Button
                label="Download my resume"
                href="./grancher_quentin_resume.pdf"
                download
                target="_blank"
              />
            </div>
          </SlidingTexts>
          <div className={s.mobileButton}>
            <Button
              label="Download my resume"
              href="./grancher_quentin_resume.pdf"
              download
              target="_blank"
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
