import React from 'react'
import search from '../images/Seacrh.png'
import calendar from '../images/solar_calendar-linear.png'
import bell from '../images/icon (4).png'
import profile from '../images/Rectangle 1061.png'
import arrow from '../images/Arrow - Down 2.png'

const Header = () => {
  return (

    <header>

      <div className='dashbar'>

        <h1>Dashboard</h1>

        <div className='searchbar'>
          
          <img src={search} alt='' />
          
          <input type='text' placeholder='Search...' />
          
        </div>

      </div>

      <div className='profile-box'>

        <div className='calendar'>

          <img src={calendar} alt='' />
          <p>November 15, 2023</p>

        </div>

        <img src={bell} alt='' />

        <div className='profile'>

          <img src={profile} alt='' id='profile' />

          <div className='details'>

            <p id='p1' style={{marginTop: '8px', fontSize: '15px', fontWeight: '500'}}>Justin Bergson</p>
            <p id='p2' style={{marginTop: '-1.3em', fontSize: '12px', color: '#A3A3A3'}}>Justin@gmail.com</p>

          </div>

          <img src={arrow} alt='' id='arrow' />

        </div>

      </div>

    </header>
  )
}

export {Header}