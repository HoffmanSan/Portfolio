import './hexagon.css'

type HexagonProps = {
 children: JSX.Element
}

export default function Hexagon({children}: HexagonProps) {
  return (
    <div className='hexagon'>
      {children}
    </div>
  )
}