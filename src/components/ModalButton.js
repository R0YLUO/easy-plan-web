import React, { useState } from "react";

const ModalButton = () => {
  const [groupId, setGroupId] = useState("");

  function joinHandler() {
    window.location.href = `/group/${groupId}`;
  }

  const handleInputChange = (event) => {
    setGroupId(event.target.value);
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-neutral ml-10 mr-10"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Join Group
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Enter the group ID</h3>
          <input
            type="text"
            placeholder="Group ID"
            className="input w-full max-w-xs bg-white text-black mt-2"
            value={groupId}
            onChange={handleInputChange}
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={joinHandler}>Join</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalButton;
