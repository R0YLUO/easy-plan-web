import React, { useState } from "react";

const SetPreferences = () => {
  const [groupId, setGroupId] = useState("");

  function joinHandler() {
    window.location.href = `/recommendations/${groupId}`;
  }

  const handleInputChange = (event) => {
    setGroupId(event.target.value);
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-neutral ml-10 mr-10"
        style={{ width: '150px' }}
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Update Preferences
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box space-y-5">
          <h3 className="font-bold text-lg">Enter food preferences</h3>
          <input
            type="text"
            placeholder="Food preferences"
            className="input w-full max-w-xs bg-white text-black mt-2"
            value={groupId}
            onChange={handleInputChange}
          />
          <h3 className="font-bold text-lg">Enter location</h3>
          <input
            type="text"
            placeholder="Location"
            className="input w-full max-w-xs bg-white text-black mt-2"
            value={groupId}
            onChange={handleInputChange}
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Update</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SetPreferences;
