import React from 'react'
import './main.css'
import image from '../images/15.jpg'
import image1 from '../images/time-line1.svg'
import image2 from '../images/time-line2.svg'
import image3 from '../images/time-line3.svg'
import image4 from '../images/pic.jpg'
import image5 from '../images/pic1.jpg'
import image6 from '../images/pic2.jpg'
import image7 from '../images/pic3.jpg'
import skin from '../images/images (1).jpeg'
import logo from '../images/Logo1.svg'

const Main = () => {
  return (
    <div className='container flex flex-col'>

      <section className='hero mt-16 md:flex md:mt-32 md:justify-between items-center text-white'>

        <aside className='aside md:w-3/5'>

          <h3 className='font-bold text-5xl'>Skinify: your personalized skin care AI</h3>

          <p className='font-normal text-xl text-gray-300 mt-4'>Get expert guidelines with AI skin analysis & customized routines. <br />
            Harnesses the power of AI and mobile technology into skin care.
          </p>

          <section className='infos flex w-full mt-8 justify-between md:items-center'>

            <div className='info'>
              <p className='text-base p1'>Team</p>
              <p className='p2 font-semibold text-lg'>4 Members</p>
            </div>

            <div className='info'>
              <p className='text-base p1'>Platforms</p>
              <p className='p2 font-semibold text-lg'>ReactJs, React Native</p>
            </div>

            <div className='info'>
              <p className='text-base p1'>Type</p>
              <p className='p2 font-semibold text-lg'>skin care app</p>
            </div>

            <div className='info'>
              <p className='text-base p1'>Industry</p>
              <p className='p2 font-semibold text-lg'>Healthcare</p>
            </div>

          </section>

        </aside>

        <img src={image} alt='' id='image' className='md:w-1/3' />

      </section>

      <section className='about md:flex md:justify-between items-center mt-32'>

        <div className='idea flex flex-col items-center rounded-2xl px-4 py-4'>

          <h3 className='h3 font-semibold text-3xl'>Idea</h3>

          <img src={image1} alt='' className='idealogo mt-4' />

          <p className='font-bold text-2xl text-center capitalize mt-4'>personalized skin care app</p>

          <p className='text-center mt-4'>Unique AI skin care app solution for improving the skin, 
            harnessing the power of Artificial Intelligence and mobile technology, <br />
            and making skin care easy for all.
          </p>

        </div>

        <div className='idea flex flex-col items-center rounded-2xl px-4 py-4'>

          <h3 className='h3 font-semibold text-3xl'>Challenge</h3>

          <img src={image2} alt='' className='idealogo mt-4' />

          <p className='font-bold text-2xl text-center capitalize mt-4'>Addressing Skin care problems with an AI App</p>

          <p className='text-center mt-4'>This aims to address user challenges such as skin care, skin care products, 
            access to dermatologists, and the need for convenient skin health monitoring
          </p>

        </div>

        <div className='idea flex flex-col items-center rounded-2xl px-4 py-4'>

          <h3 className='h3 font-semibold text-3xl'>Solution</h3>

          <img src={image3} alt='' className='idealogo mt-4' />

          <p className='font-bold text-2xl text-center capitalize mt-4'>Smart skin analysis and routine at Any Time!</p>

          <p className='text-center mt-4'>Empowering users to take control of their skin health. 
            It combines AI-driven accuracy, convenience, and privacy, enabling early detection, 
            informed decision-making on skin care.
          </p>

        </div>

      </section>

      <section className='design flex flex-col items-center mt-16'>

        <h1 className='font-bold text-6xl text-center'>Design</h1>

        <h3 className='font-base text-4xl text-center mt-4'>Here is a quick view of our AI-driven Skin Care App</h3>

        <div className='images flex justify-between items-center mt-8'>

          <img src={image4} alt='' />
          <img src={image5} alt='' />
          <img src={image6} alt='' />
          <img src={image7} alt='' />

        </div>

      </section>

      <section className='extra md:flex md:justify-between items-center mt-16'>

        <div className='flex flex-col justify-center items-center'>
          <img src={logo} alt='' />
          <p className='font-base text-2xl text-center mt-4'>A healthier skin for you</p>
        </div>

        <img src={skin} alt='' />

      </section>
      
    </div>
  )
}

export {Main}