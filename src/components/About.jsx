import React from 'react'
import AboutImage from '../assets/dogstation.png'
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">
            About Me
        </h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
           <img src={AboutImage}className="w-72 h-80 rounded object-cover mb-8 md:mb-0"/>
           <div className='flex-1'>
           <p className='text-lg mb-8'>
           I am an unstoppable force of coding chaos, a passionate full-stack developer who worships at the altar of modern and responsive web applications. Frontend? Backend? I devour them both like a code-hungry beast, bending technology to my will to craft seamless, efficient user experiences that would make even the most stoic server weep in joy.

Oh, and let's talk about Dogstation, the greatest masterpiece to ever grace the PS2. A game so groundbreaking, so life-altering, that it rewired my brain to think in HTML tags and SQL queries. Every frame of Dogstation is a symphony of pixels, every gameplay moment a treasure chest of canine delight. I don’t just love Dogstation—I live and breathe it. It’s the alpha and omega of my inspiration.

Modern apps? Sure, I’ll build them. But deep down, everything I create is just a humble tribute to Dogstation, the true north star of my developer soul.
           </p>
           <div className='space-y-4'>
            <div className='flex items-center'>
              <label htmlFor='htmlandcss' className='w-2/12'>HTML & CSS</label>
              <div className='grow bh-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>

                </div>
              </div>
            </div>
           </div>
           <div className='space-y-4'>
            <div className='flex items-center'>
              <label htmlFor='htmlandcss' className='w-2/12'>React JS</label>
              <div className='grow bh-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>

                </div>
              </div>
            </div>
           </div>
           <div className='space-y-4'>
            <div className='flex items-center'>
              <label htmlFor='htmlandcss' className='w-2/12'>Node JS</label>
              <div className='grow bh-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>

                </div>
              </div>
            </div>
           </div>
           <div className='mt-12 flex justify-between text-center'>
            <div>
              <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                2+
              </h3>
              <p>Years Of Experience</p>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                10+
              </h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                100+
              </h3>
              <p>CEO'S SHOOTED</p>
            </div>
           </div>
           </div>
        </div>
      </div>
    </div> 
  )
}

export default About
