import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function BokkingTable() {

    const [booking,setBooking]=useState([]);

    useEffect(()=>{

        fetch('booking.json')
        .then(res=>res.json())
        .then(data=>setBooking(data))



    },[])




  return (


    <div className="container m-auto mt-10">


        <div><h1 className='text-center text-3xl font-semibold my-2'>Avilable <span className='text-primary'>Table</span></h1></div>
        <hr />


        <div className=' grid lg:grid-cols-3 gap-10 w-[90%] m-auto p-2 my-10 '>
            {
                booking.map(item=> 

                <div className='shadow-2xl p-2 rounded-lg  '>

               <Link to={`/bookingabledetails/${item.id}`}>
               < img className='w-full h-[300px] ' src={item.image} alt="" />
                    
                    <h1 className='text-2xl font-bold py-2'>{item.title}</h1>
                    <h1>{item.location}</h1>
                    <h1 className='py-2 font-semibold'>price : $206</h1>

                    <button className='w-full bg-secondary rounded-xl text-white py-2 hover:bg-slate-600'>Book Now</button>
                    </Link>
                    
                </div>)
            }
        </div>

        



    </div>
  )
}
