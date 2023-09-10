import React from "react";
import RestaurantBox from "../components/RestaurantBox";
import HomeButton from "../components/home_butt";
import EPLogo from '../components/image/Kimchi-Jjigae-Kimchi-Stew-1702-II.jpg'; // Import the image

const Recommendations = () => {
  return (
    <div>
      <HomeButton />
      <div className="flex justify-center m-auto">
        <div className="w-96 h-fit bg-neutral/75 mx-10 my-20 p-5 text-white flex rounded-lg flex-col space-y-5 jusitfy-center">
          <RestaurantBox
            restaurant="Kimchi Hut"
            cuisine="Korean"
            address="185 Coleman Parade, Glen Waverley VIC 3150"
            background="bg-neutral-400/40"
          />
          <RestaurantBox
            restaurant="BBQ-K Glen Waverley"
            cuisine="Korean"
            address="G1/52 Montclair Ave, Glen Waverley VIC 3150"
            background="bg-neutral-400/25"
          />
          <RestaurantBox
            restaurant="Yokohama Teppanyaki"
            cuisine="Japanese"
            address="3/289 Springvale Rd, Glen Waverley VIC 3150"
            background="bg-neutral-400/25"
          />
          <RestaurantBox
            restaurant="ICHI KATSU"
            cuisine="Japanese"
            address="97 Kingsway, Glen Waverley VIC 3150"
            background="bg-neutral-400/25"
          />
        </div>
        <div className="w-96 h-500px bg-neutral/75 mx-10 my-20 p-5 text-white flex-col space-y-5 rounded-lg">
          <div className="w-full h-2/3 bg-neutral-400/25 p-5 text-white flex rounded-lg">
            <img src={EPLogo} alt="Kimchi Hut" className="w-96 h-96 rounded-lg" />
          </div>
          <div className="text-justify">
          Kimchi Hut in Glen Waverley, Melbourne is a delightful culinary gem that brings the bold and flavorful taste of Korean cuisine to the heart of this vibrant Australian city. Nestled in the bustling Glen Waverley neighborhood, Kimchi Hut is a cozy and welcoming eatery that specializes in crafting authentic Korean dishes with a modern twist.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
