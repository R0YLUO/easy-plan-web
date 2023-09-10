import React from "react";
import Button from "../components/Button";
import HomeButton from "../components/home_butt";
import { Link } from 'react-router-dom';
import EPLogo from '../components/image'; // Import the image

const Home = () => {
  async function createGroup() {
    const result = await fetch("http://localhost:5000/new-group", {
      method: "POST",
    });

    const data = await result.json();

    // Redirect to the group page
    window.location.href = `/group/${data.group}`;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <HomeButton />
      
      <div className="text-center">
        <img src={EPLogo} alt="EPLogo" />
      </div>

      <div className="text-center mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p>Introducing EasyPlan, your all-in-one solution for seamless group dining experiences. Tired of the endless debates over where to eat with your friends? Say goodbye to the hassle of coordinating everyone's preferences and locations. With EasyPlan, planning group outings has never been more, well, easy!</p>
      </div>
      <div className="flex justify-center">
        <Button callBack={createGroup} name="Create group" />
        <Button name="Join group" />
      </div>
      {/* This empty div pushes the buttons container to the middle */}
      <div></div>
    </div>
  );
};

export default Home;
