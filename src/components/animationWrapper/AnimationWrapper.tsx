import { m, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  hidden: {[key: string]: number}
  visible: {[key: string]: number}
  transition: {[key: string]: number | string}
  style?: {[key: string]: string}
}

export default function AnimationWrapper({ children, hidden, visible, transition, style } : Props) {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <m.div
      style={style}
      ref={ref}
      variants={{
        hidden,
        visible
      }}
      initial="hidden"
      animate={controls}
      transition={transition}
    >
      {children}
    </m.div>
  )
}