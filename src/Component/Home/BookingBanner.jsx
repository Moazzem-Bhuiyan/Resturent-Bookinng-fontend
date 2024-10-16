import React from 'react'
import appframe from '../../assets/appframe.png'
import app from '../../assets/apple.png'
import mbl from '../../assets/mbl.png'

export default function BookingBanner() {




  return (

    
    <div className='container px-5 m-auto grid lg:grid-cols-3 mt-20 mb-20 '>

      <div className="txt space-y-10 col-span-2 md:p-10">
        <h1 className='text-6xl font-bold mt-10 '>It's Now Moe Easy to <span className='text-primary'>Booking</span> <br /> by Our Mobile App</h1>
        <p className='text-gray-400 '>All you need to do is downlode one of the best delivery apps, make a and most companies <br /> are opting  for mobile app devlopment for food delivery</p>

        <div className='flex md:gap-10'>
          <img src={app} alt="" />
          <img src={mbl} alt="" />
        </div>

      </div>

      <div className="img flex justify-center ">
        <img className='w-full' src={appframe} alt="" />
      </div>

    </div>



  )
}
