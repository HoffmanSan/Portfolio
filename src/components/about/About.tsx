import './about.css'
import Hexagon from "../hexagon/Hexagon"
import { useEffect, useRef } from 'react';
import { m, useAnimation, useInView } from 'framer-motion'
import Profilowe from '../../assets/profilowe.png';

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const contentVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 }
  }
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <section id="about">
      <div className="about-content" >
        <m.h3
          variants={headerVariants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={controls}
        >
          A BIT ABOUT ME
        </m.h3>

        <m.div
          className="personal-info hexagon-profile"
          variants={contentVariants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.4 }}
          animate={controls}
        >
          <Hexagon>
            <img src={Profilowe} alt="author's face" />
          </Hexagon>

          <p>I spent a significant part of my waking life in front of a computer - ever since my parents brought home our very first PC. What started as a couple-hours-a-day getaway from reality soon transformed into a full blown addiction (or a habit if you will). Dozen years, couple courses, two jobs and one degree later and I'm here, making my way into this community that I've always considered myself a part of, but this time - professionally. I've chosen WebDev to be my field of expertise but I'm fascinated by pretty much everything technology related and often find myself looking up subjects that have nothing or little to do with actual web development. When it comes to creating websites I prefer building elaborate functional applications rather than eye-candy landing pages.</p>
        </m.div>

        <m.h3
          variants={headerVariants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.8 }}
          animate={controls}
        >
          MY HOBBIES
        </m.h3>

        <div ref={ref} className="hexagon-row">

        <m.div
          className="hexagon-column"
          variants={contentVariants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 1.1 }}
          animate={controls}
        >
            <Hexagon className='hexagon-hobbies'>
              <div className="mobile-carousel">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M64 208c0 7.8 4.4 18.7 17.1 30.3C126.5 214.1 188.9 200 256 200s129.5 14.1 174.9 38.3C443.6 226.7 448 215.8 448 208c0-12.3-10.8-32-47.9-50.6C364.9 139.8 314 128 256 128s-108.9 11.8-144.1 29.4C74.8 176 64 195.7 64 208zm192 40c-47 0-89.3 7.6-122.9 19.7C166.3 280.2 208.8 288 256 288s89.7-7.8 122.9-20.3C345.3 255.6 303 248 256 248zM0 208c0-49.6 39.4-85.8 83.3-107.8C129.1 77.3 190.3 64 256 64s126.9 13.3 172.7 36.2c43.9 22 83.3 58.2 83.3 107.8v96c0 49.6-39.4 85.8-83.3 107.8C382.9 434.7 321.7 448 256 448s-126.9-13.3-172.7-36.2C39.4 389.8 0 353.6 0 304V208z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M352 124.5l-51.9-13c-6.5-1.6-11.3-7.1-12-13.8s2.8-13.1 8.7-16.1l40.8-20.4L294.4 28.8c-5.5-4.1-7.8-11.3-5.6-17.9S297.1 0 304 0H416h32 16c30.2 0 58.7 14.2 76.8 38.4l57.6 76.8c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48H538.5c-17 0-33.3-6.7-45.3-18.7L480 160H448v21.5c0 24.8 12.8 47.9 33.8 61.1l106.6 66.6c32.1 20.1 51.6 55.2 51.6 93.1C640 462.9 590.9 512 530.2 512H496 432 32.3c-3.3 0-6.6-.4-9.6-1.4C13.5 507.8 6 501 2.4 492.1C1 488.7 .2 485.2 0 481.4c-.2-3.7 .3-7.3 1.3-10.7c2.8-9.2 9.6-16.7 18.6-20.4c3-1.2 6.2-2 9.5-2.2L433.3 412c8.3-.7 14.7-7.7 14.7-16.1c0-4.3-1.7-8.4-4.7-11.4l-44.4-44.4c-30-30-46.9-70.7-46.9-113.1V181.5v-57zM512 72.3c0-.1 0-.2 0-.3s0-.2 0-.3v.6zm-1.3 7.4L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9c0 13.3 10.7 24 24 24c10.6 0 19.5-6.8 22.7-16.3zM130.9 116.5c16.3-14.5 40.4-16.2 58.5-4.1l130.6 87V227c0 32.8 8.4 64.8 24 93H112c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7L171 232.3 18.4 255.8c-7 1.1-13.9-2.6-16.9-9s-1.5-14.1 3.8-18.8L130.9 116.5z"/></svg>
              </div>
            </Hexagon>
            <h4>Fantasy</h4>
            <p>swords / spells / beasts - if it has all three I'm hooked, I've always been fond of everything fantasy-related and it hasn't changed to this day, with Tolkien's universe as my go-to</p>
          </m.div>

          <m.div
            className="hexagon-column"
            variants={contentVariants}
            initial="hidden"
            transition={{ duration: 0.5, delay: 1.4 }}
            animate={controls}
          >
            <Hexagon className='hexagon-hobbies'>
            <svg className="gear-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg>
            </Hexagon>
            <h4>Gaming</h4>
            <p>no matter if they're video or board games - I enjoy great stories with complicated characters, facing challenging campaigns, cooperating towards common goal or competing against skilled opponents</p>
          </m.div>

          <m.div
            className="hexagon-column"
            variants={contentVariants}
            initial="hidden"
            transition={{ duration: 0.5, delay: 1.7 }}
            animate={controls}
          >
            <Hexagon className='hexagon-hobbies'>
              <svg className="seo-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            </Hexagon>
            <h4>Coding</h4>
            <p>my love for coding started at my first job where I'd spent hours on creating multi-line excel functions, I got hooked in before I knew it and so today I'm still writing code only a bit more complicated</p>
          </m.div>

        </div>
        
      </div>
        
    </section>
  )
}