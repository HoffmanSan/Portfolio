import { Link as ScrollLink } from "react-scroll";

type LinkProps = {
  to: string
  content: string
}

export default function Link({ to, content }: LinkProps) {

  const active = {
    color: 'red'
  }

  return (
    <ScrollLink
      activeStyle={active}
      to={to}
      spy={true}
      smooth={true}
      duration={1000}
    >
      {content}
    </ScrollLink>
  )
}