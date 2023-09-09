import React from 'react'
import CopyTextbox from '../components/CopyTextbox';

const Group = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">Group X</h1>

      <div className="text-2xl mt-10">Invite your friends:</div>
      
      <div className="min-h-screen flex justify-center mt-5">
      <CopyTextbox text="https://EasyPlan.com/invite?id=xdfx123"/>
      </div>

      <div></div>

    </div>
  )
}

export default Group