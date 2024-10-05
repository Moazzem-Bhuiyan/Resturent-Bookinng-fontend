import React from 'react'
import Banner from './Home/Banner'
import ExploreRecipe from './Home/ExploreRecipe'
import Service from './Home/Service'
import BookingBanner from './Home/BookingBanner'

export default function Home() {
  return (
    <div>

        <Banner></Banner>


        <ExploreRecipe></ExploreRecipe>


     <div className='md:my20'>
     <Service></Service>
     </div>
        
        <BookingBanner></BookingBanner>
 



    </div>
  )
}
