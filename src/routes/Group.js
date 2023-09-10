import React from 'react'
import CopyTextbox from '../components/CopyTextbox';
import Button from '../components/Button'
import HomeButton from '../components/home_butt';
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return { groupId: params.groupId };
}

const Group = () => {
  const { groupId } = useLoaderData();

  async function getRecommendations() {
    const result = await fetch("http://localhost:5000/recommendations", {
      method: "GET",
    });

    const data = await result.json();

    // Redirect to the recommendations page
    window.location.href = `/recommendations/${groupId}`;
  }

  return (
    
    <div className="text-center justify min-h-screen">
      <div className="flex justify-between items-start">
        <HomeButton />
      </div>

      <div className="flex flex-col items-center">
        
        <h1 className="text-4xl font-bold mt-10 mb-10">Group X</h1>
        
        <div className="flex flex-col items-center mt-5">
          <h1 className='text-2xl mb-5'>Invite your friends:</h1>
          <CopyTextbox text={`https://EasyPlan.com/invite?id=${groupId}`} />
        </div>

        <div className="flex justify-between">
          <div className="w-96 h-96 bg-neutral/75 m-20 p-5 text-white flex flex-col justify-start items-center rounded-lg">
            <h1 className="text-xl font-bold p-2">Group Members</h1>
            <ul className="mt-3 p-4 text-left list-inside">
              <li className="mb-2">Member 1</li>
              <li className="mb-2">Member 2</li>
              <li className="mb-2">Member 3</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <Button name="Update Preferences" />
            <br/>
            <Button callBack={getRecommendations} name="Generate Restaurants" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Group