import { useState, useEffect } from "react"

import "./professionHeader.css"

export default function ProfessionHeader() {
  const [content, setContent] = useState<string>('Fullstack Web Developer')
  const [isIterating, setIsIterating] = useState(false)

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const stringHackerEffect = () => {
    let iterations = 0;
    setIsIterating(true)

    if (!isIterating) {
      const interval = setInterval(() => {
        setContent(content.split("").map((_: string, index: number) => {

          if (index < iterations) {
            return content[index]
          }
            return letters[Math.floor(Math.random() * 26)]

        }).join(""));

        if (iterations >= content.length) {
          setIsIterating(false)
          clearInterval(interval);
        }
        iterations += 1 / 4;
      }, 25)
    }
  }

  useEffect(() => {
    stringHackerEffect()
  }, [])

  return (
    <h2 className="profession">
      {"I'm a "} 
      <span onMouseEnter={stringHackerEffect}>
        {content}
      </span>
    </h2>
  )
}