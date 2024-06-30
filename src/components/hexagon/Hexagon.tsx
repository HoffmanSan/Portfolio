// styles
import './hexagon.css'

type Props = {
 children: JSX.Element
 className?: String
}

export default function Hexagon({children, className} : Props) {
  return (
    <div className={`hexagon ${className}`}>
      {children}
    </div>
  )
}