import React, { useRef } from 'react';
import copy from 'clipboard-copy';

function CopyTextbox({ text }) {
  const textRef = useRef(null);

  const handleCopyClick = async () => {
    try {
      await copy(text);
    } catch (err) {
      alert('Failed to copy text. Please try again.');
    }
  };

  return (
    <div className="relative">
      <input
        style={{ width: '350px'}}
        className="p-2 text-center rounded-lg border"
        readOnly
        onClick={handleCopyClick}
        ref={textRef}
        type="text"
        value={text}
      />
    </div>
  );
}

export default CopyTextbox;