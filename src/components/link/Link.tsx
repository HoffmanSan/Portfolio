import { Link as ScrollLink } from "react-scroll";

type LinkProps = {
  to: string
  content: string
  offset?: number
}

export default function Link({ to, content, offset }: LinkProps) {

  const active = {
    backgroundColor: '#04C2C9'
  }

  return (
    <ScrollLink
      activeStyle={active}
      to={to}
      spy={true}
      smooth={true}
      duration={750}
      offset={offset || -30}
    >
      {content}
    </ScrollLink>
  )
}