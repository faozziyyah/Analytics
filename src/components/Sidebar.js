import React from 'react'
import logo from '../images/Vector.png'
import dashboard from '../images/Component 8.png'
import icon1 from '../images/Component 10.png'
import icon2 from '../images/Component 9.png'
import icon3 from '../images/Component 13.png'
import icon4 from '../images/Component 11.png'
import icon5 from '../images/Component 12.png'
import icon6 from '../images/Frame 427319676.png'
import icon7 from '../images/moon 1.png'
import icon8 from '../images/Icon5.png'
import icon9 from '../images/Icon-1.png'
import icon10 from '../images/Icon-2.png'

const Sidebar = () => {

  return (

    <aside className='sidebar'>

        <img src={logo} alt='' />

        <div className='aside-top'>

            <a href='http'> <img src={dashboard} alt='' /> </a>
            <a href='http'> <img src={icon1} alt='' /> </a>
            <a href='http'> <img src={icon2} alt='' /> </a>
            <a href='http'> <img src={icon3} alt='' /> </a>
            <a href='http'> <img src={icon4} alt='' /> </a>
            <a href='http'> <img src={icon5} alt='' /> </a>

            <div className='themes'>
                
                <a href='http'> <img src={icon6} alt='' /> </a>
                <a href='http'> <img src={icon7} alt='' style={{marginTop: '10px'}} /> </a>

            </div>

        </div>

        <div className='aside-bottom'>
            
            <a href='http'> <img src={icon8} alt='' /> </a>
            <a href='http'> <img src={icon9} alt='' /> </a>
            <a href='http'> <img src={icon10} alt='' /> </a>

        </div>

    </aside>
  )
}

export {Sidebar}