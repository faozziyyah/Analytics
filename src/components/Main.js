import React from 'react'
import './main.css'
import image from '../images/15.jpg'
import image1 from '../images/time-line1.svg'
import image2 from '../images/time-line2.svg'
import image3 from '../images/time-line3.svg'

const Main = () => {
  return (
    <div className='container flex flex-col'>

      <section className='hero flex mt-32 justify-between items-center text-white'>

        <aside className='aside w-3/5'>

          <h3 className='font-bold text-5xl'>Skinnify: your personalized skin care AI</h3>

          <p className='font-normal text-2xl text-slate-100 mt-4'>Get expert guidelines with AI skin analysis & customized routines. <br />
            Harnesses the power of AI and mobile technology into skin care.
          </p>

          <section className='infos flex w-full mt-8 justify-between items-center'>

            <div className='info'>
              <p className='text-base text-gray-300'>Team</p>
              <p className='font-semibold text-lg'>4 Members</p>
            </div>

            <div className='info'>
              <p className='text-base text-gray-300'>Platforms</p>
              <p className='font-semibold text-lg'>ReactJs, React Native</p>
            </div>

            <div className='info'>
              <p className='text-base text-gray-300'>Type</p>
              <p className='font-semibold text-lg'>skin care app</p>
            </div>

            <div className='info'>
              <p className='text-base text-gray-300'>Industry</p>
              <p className='font-semibold text-lg'>Healthcare</p>
            </div>

          </section>

        </aside>

        <img src={image} alt='' id='image' className='w-1/3' />

      </section>

      <section className='about flex justify-between items-center mt-8 text-white'>

        <div className='idea flex flex-col items-center rounded-2xl hover:border-2 pt-4 pb-4 pl-4'>

          <h3 className=''>Idea</h3>

          <img src={image1} alt='' className='' />

          <p className=''></p>

          <p className=''></p>

        </div>

      </section>
      
    </div>
  )
}

export {Main}