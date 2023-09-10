import React from 'react'
import RestaurantBox from '../components/RestaurantBox'
import HomeButton from '../components/home_butt';

const Recommendations = () => {
  return (
    <div>
      <HomeButton />
      <div className="flex justify-center m-auto">
          <div className="w-96 h-fit bg-neutral/75 mx-10 my-20 p-5 text-white flex rounded-lg flex-col space-y-5 jusitfy-center">
            <RestaurantBox />
            <RestaurantBox />
            <RestaurantBox />
            <RestaurantBox />
          </div>
          <div className="w-96 h-500px bg-neutral/75 mx-10 my-20 p-5 text-white flex-col space-y-5 rounded-lg">
            <div className="w-full h-2/3 bg-neutral-400/25 p-5 text-white flex rounded-lg"></div>
            <div className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat, quam et aliquam iaculis, 
            dui libero consequat lectus, at mattis tortor libero eu purus. Praesent a velit non risus ultrices tempus eget in augue.</div>
          </div>
      </div>      
    </div>
  )
}

export default Recommendations