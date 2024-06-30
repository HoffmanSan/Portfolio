// styles
import './bar.css'

// others
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion';

type Props = {
  tag: string
  progress: number
  delay: number
}

export default function Bar({ tag, progress, delay } : Props) {
  const [percentage, setPercentage] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setPercentage(progress)
      }, delay)
    }
  }, [isInView])
  

  return (
    <div className='bar-wrapper'>
      <div className='bar-value' style={{ width: `${percentage}%` }} ref={ref}>
        <div className='bar-tag'>
          {tag}
        </div>
      </div>
    </div>
  )
}