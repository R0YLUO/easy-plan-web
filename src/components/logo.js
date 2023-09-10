import React from 'react';
import EPLogo from '../components/image/EPLogo.png'; // Import the image

function Logo() {
  const logoStyles = {
    width: '100px', // Adjust the width as needed
    display: 'block', // To center the image horizontally
    margin: '0 auto', // To center the image horizontally
  };

  return (
    <div>
      <img src={EPLogo} alt="EPLogo" />
    </div>
  );
}

export default Logo;
