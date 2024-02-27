import "./headerBackground.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShieldHalved, faGear, faCode, faCrown,
  faCar, faBolt, faGift, faKey, faPaperPlane,
  faCamera, faThumbsUp, faTree, faFlask, faFish,
  faGamepad, faClock, faBrain, faRobot, faRecycle,
  faTrophy, faMask, faDice, faYinYang, faVolumeOff,
  faUserLarge
} from "@fortawesome/free-solid-svg-icons"

const array = [faShieldHalved, faGear, faCode, faCrown, faCar, faBolt, faGift, faKey, faPaperPlane, faCamera, faThumbsUp, faTree, faFlask, faFish, faGamepad, faClock, faBrain, faRobot, faRecycle, faTrophy, faMask, faDice, faYinYang, faVolumeOff, faUserLarge ]

export default function HeaderBackground() {
  let rowsByHeight = window.screen.height / 48
  let iconsByWidth = window.screen.width / 64

  console.log(`${Math.random() * 500} ms`)
  console.log()

  return (
    <div className="header-background">

      {[...Array(Math.ceil(rowsByHeight)).keys()].map((row) => (
        <div className='icon-row' key={row}>
          {[...Array(Number(Math.ceil(iconsByWidth))).keys()].map((item) => (
            <FontAwesomeIcon key={item} icon={array[Math.floor(Math.random() * 25)]} />
          ))}
        </div>
      ))}
        

    </div>
  )
}