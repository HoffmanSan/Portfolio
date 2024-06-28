import { useContext } from 'react'
import './footer.css'
import { TemplateContext } from '../../contexts/TemplateContext'

export default function Footer() {
  const { template: { footer } } = useContext(TemplateContext)

  return (
    <div className='footer'>
      {footer.headingOne}
      <ul>
        <li><a href={footer.anchors[0].link} target="_blank">{footer.anchors[0].name}</a></li>
        <li><a href={footer.anchors[1].link} target="_blank">{footer.anchors[1].name}</a></li>
      </ul>
      {footer.headingTwo} <a href={footer.anchors[2].link} target='_blank'>{footer.anchors[2].name}</a>
    </div>
  )
}