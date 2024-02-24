import React, {useState} from 'react'
//import Link from 'react-router-dom'
import logo from '../images/Logo1.svg'
import download from '../images/mobile.png'
import hamburger from '../images/hamdark.png'
import close from '../images/Frame.png'
const Navbar = () => {
  
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "work",
    },
    {
      id: 3,
      link: "career",
    },
    {
      id: 4,
      link: "blog",
    },
    {
      id: 5,
      link: "investors",
    },
  ];

  return (
    <div className='nav-container flex items-center pt-2'>

      <img src={logo} alt='' id='logo' />

      <div className="navitem flex justify-between items-center w-3/4">

        {links.map(({ id, link }) => (
          <div
            key={id}
          >
            <a className='capitalize' href={link}>{link}</a>
          </div>
        ))}

        <img src={download} alt='' />

        <a className='capitalize' href='/'>Contact Us</a>

      </div>

      <div onClick={() => setNav(!nav)} className="toggler md:hidden">

        {nav ? <img src={hamburger} alt='logo' width='50' height='50'/> : 
          <img src={close} alt='logo' width='30' height='30'/>
        }

      </div>

      {nav && (

        <div className="mobilenav">

          {links.map(({ id, link }) => (
            <div
              key={id}
            >
              <a onClick={() => setNav(!nav)} href={link}>
                {link}
              </a>
            </div>
          ))}

        </div>

      )}
    
    </div>
  )
}

export {Navbar}