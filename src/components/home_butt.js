import React from 'react';
import CustomSVG from '../components/button_icon/home.svg'; // Import your own SVG file locally
import { Link } from 'react-router-dom';

const HomeButton = (props) => {
  return (
      <Link to="/" >
        <button onClick={props.callBack} className="btn btn-neutral" style={{ width: '50px'}}>
          <img src={CustomSVG} alt="Custom Icon" width="25" height="25" />
        </button>
      </Link>
  );
}

export default HomeButton;