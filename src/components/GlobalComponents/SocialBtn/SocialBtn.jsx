import { faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCommentDots, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './SocialBtn.scss'

const links = [
  {
    url: 'https://www.facebook.com/biznes.ombudsman/', 
    icon: faFacebook, className: 'facebook'
  },
  {
    url: 'https://www.instagram.com/biznes_ombudsman/', 
    icon: faInstagram, className: 'instagram'
  },
  {
    url: 'https://t.me/biznes_ombudsman', 
    icon: faTelegram, className: 'telegram'
  },
  {
    url: 'https://m.youtube.com/channel/UCI9e4XZYtGq8txTgix02Ojw', 
    icon: faYoutube, className: 'youtube'
  },
]

const SocialBtn = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div className="SocialBtn">
      <div id="circularMenu" className={`circular-menu ${menuIsOpen ? 'active' : ''}`}>

        <div className="floating-btn" onClick={()=>setMenuIsOpen(prev=>!prev)}>
          <FontAwesomeIcon icon={faCommentDots} className="icon"/>
          <FontAwesomeIcon icon={faTimes} className="times-icon"/>
        </div>

        <menu className="items-wrapper">
          {
            links.map((link, index)=>(
              <a 
                href={link.url}
                className={`menu-item ${link.className}`}
                key={index}
              >
                <FontAwesomeIcon icon={link.icon} className="social-icon"/>
              </a>
            ))
          }
        </menu>

        </div>
    </div>
  )
}

export default SocialBtn