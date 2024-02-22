import Link from '../link/Link'

import './header.css'
import ProfessionHeader from '../professionHeader/ProfessionHeader'

export default function Header() {

  return (
    <div id='home' className='header'>
      <h1>Hello</h1>
      <h1>My name is <span>MACIEJ GORTYCH</span></h1>
      <ProfessionHeader />
      <Link to="about" content="About me" />
    </div>
  )
}