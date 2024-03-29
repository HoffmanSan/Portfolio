import './hexagon.css'

type HexagonProps = {
 children: JSX.Element
 className?: String
}

export default function Hexagon({children, className}: HexagonProps) {
  return (
    <div className={`hexagon ${className}`}>
      {children}
    </div>
  )
}