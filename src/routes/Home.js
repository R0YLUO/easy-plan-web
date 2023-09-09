import React from 'react'
import Button from '../components/Button'

const Home = () => {
  return (
    
    <div className="min-h-screen flex flex-col justify-start items-center">
      <h1 className="text-6xl font-bold mt-8">EasyPlan</h1>
      <div className="flex ">
        <Button name="Create group" />
        <Button name="Join group" />
      </div>
    </div>
  );
}

export default Home

