import React from 'react'
import CopyTextbox from '../components/CopyTextbox';

const Group = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">Group X</h1>

      <div className="text-2xl mt-10">Invite your friends:</div>
      
      <div className="flex justify-center mt-5">
      <CopyTextbox text="https://EasyPlan.com/invite?id=xdfx123"/>
      </div> 

        <div className="w-96 h-96 bg-blue-600 m-20 p-10 text-white text-center flex rounded-lg">
          <h1 className="font-bold p-4">Group Members</h1>
          <br />
            <ul className="mt-5 p-4 text-left">
              <li className="mb-2">Member 1</li>
              <li className="mb-2">Member 2</li>
              <li className="mb-2">Member 3</li>
            </ul>
        </div>
      
      
      </div>

  )
}

export default Group