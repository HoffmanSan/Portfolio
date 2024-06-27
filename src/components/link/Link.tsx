import { Link as ScrollLink } from "react-scroll";

type Props = {
  to: string
  content: string
  className?: string
}

export default function Link({ to, content, className } : Props) {

  const active = {
    backgroundColor: '#04C2C9'
  }

  return (
    <ScrollLink
      activeStyle={active}
      className={className}
      to={to}
      spy={true}
      smooth={true}
      duration={750}

    >
      {content}
    </ScrollLink>
  )
}