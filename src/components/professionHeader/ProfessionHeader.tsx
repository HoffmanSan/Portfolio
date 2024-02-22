import { useState, useEffect } from "react"

export default function ProfessionHeader() {
  const [content, setContent] = useState<any>("React Web Developer")

  // const letters = "abcdefghijklmnopqrstuvwxyz"
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const myProfession = "React Web Developer"

  const stringHackerEffect = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      setContent(content.split("").map((_: string, index: number) => {
        if (index < iterations) {
          return myProfession[index]
        }
         return letters[Math.floor(Math.random() * 26)]
      }).join(""));

      if (iterations >= myProfession.length) clearInterval(interval);

      iterations += 1 / 4;
    }, 25)
  }

  useEffect(() => {
    stringHackerEffect()
  }, [])

  return (
    <h1 >
      I'm a 
      <span className="profession" onMouseEnter={stringHackerEffect}>
        {' ' + content}
      </span>
    </h1>
  )
}