import React from 'react';
import Button from '../components/Button';
import CustomSVG from '../components/button_icon/home.svg'; // Import your own SVG file locally

const HomeButton = () => {
  return (
    <button className="btn btn-neutral" style={{ width: '50px'}}>
      <img src={CustomSVG} alt="Custom Icon" width="25" height="25" />
    </button>
  );
}

export default HomeButton;