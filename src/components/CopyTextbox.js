import React, { useRef, useState } from 'react';
import copy from 'clipboard-copy';

function CopyTextbox({ text }) {
  const textRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setShowPopup(true); // Show the popup after copying
    } catch (err) {
      alert('Failed to copy text. Please try again.');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      <input
        style={{ width: '350px' }}
        className="p-2 text-center rounded-lg bg-neutral"
        readOnly
        onClick={handleCopyClick}
        ref={textRef}
        type="text"
        value={text}
      />
      
      {showPopup && (
        <div className="alert mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Link has been copied.</span>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default CopyTextbox;