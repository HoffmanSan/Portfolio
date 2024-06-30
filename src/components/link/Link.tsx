// others
import { Link as ScrollLink } from "react-scroll";

type Props = {
  to: string
  content: string
  className?: string
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Link({ to, content, className, setIsMobileMenuOpen } : Props) {

  const active = {
    backgroundColor: 'rgb(var(--color-quinary))'
  }


  return (
    <ScrollLink
      activeStyle={active}
      className={className}
      to={to}
      spy={true}
      smooth={true}
      duration={750}
      onClick={() => {setIsMobileMenuOpen && setIsMobileMenuOpen(false)}}
    >
      {content}
    </ScrollLink>
  )
}