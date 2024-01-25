import React from 'react'
import { Header } from './Header'
import './main.css'
import line from '../images/line.png'

const Main = () => {
  return (
    <div className='container'>

      <Header />

      <img src={line} alt='' />
      
    </div>
  )
}

export {Main}