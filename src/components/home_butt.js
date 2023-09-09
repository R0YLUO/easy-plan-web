import React from 'react';
import { ReactComponent as CustomSVG } from '../components/button_icon/home.svg';

const HomeButton = () => {
  return (
    <button className="btn">
      <CustomSVG />
    </button>
  );
}

export default HomeButton;
