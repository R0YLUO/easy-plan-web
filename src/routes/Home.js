import React from 'react'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="text-center">
        <h1 className="text-8xl font-bold mt-10">EasyPlan</h1>
      </div>
      <div className="flex justify-center">
        <Button name="Create group" />
        <Button name="Join group" />
      </div>
      {/* This empty div pushes the buttons container to the middle */}
      <div></div>
      
    </div>
  );
}

export default Home

