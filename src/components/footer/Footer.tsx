// styles
import './footer.css'

// others
import { useContext } from 'react'
import { TemplateContext } from '../../contexts/TemplateContext'
import { TemplateContextType } from '../../types/types'

export default function Footer() {
  const { template: { footer } } = useContext(TemplateContext)  as TemplateContextType

  return (
    <footer className='footer flex-column-center'>
      {footer.headingOne}
      <ul>
        <li><a href={footer.anchors[0].link} target="_blank">{footer.anchors[0].name}</a></li>
        <li><a href={footer.anchors[1].link} target="_blank">{footer.anchors[1].name}</a></li>
      </ul>
      {footer.headingTwo} <a href={footer.anchors[2].link} target='_blank'>{footer.anchors[2].name}</a>
    </footer>
  )
}