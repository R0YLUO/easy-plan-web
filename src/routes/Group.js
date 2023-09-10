import CopyTextbox from "../components/CopyTextbox";
import Button from "../components/Button";
import HomeButton from "../components/home_butt";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SetPreferences from "../components/SetPreferences";

export async function loader({ params }) {
  return { groupId: params.groupId };
}

const Group = () => {
  const { groupId } = useLoaderData();
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (!savedName) {
      document.getElementById("my_modal_1").showModal();
    }
  }, []);

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleJoin() {
    localStorage.setItem("name", name);
  }

  async function getRecommendations() {
    const result = await fetch("http://localhost:5000/recommendations", {
      method: "GET",
    });

    const data = await result.json();

    // Redirect to the recommendations page
    window.location.href = `/recommendations/${groupId}`;
  }

  return (
    <div className="text-center justify min-h-screen">
      <div className="flex justify-between items-start">
        <HomeButton />
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Welcome to your group!</h3>
          <p className="text-sm">Enter your name to join:</p>
          <input
            type="text"
            placeholder="Your Name"
            className="input w-full max-w-xs bg-white text-black mt-2"
            value={name}
            onChange={handleInputChange}
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={handleJoin}>
                Join
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10 mb-10">Group X</h1>

        <div className="flex flex-col items-center mt-5 ">
          <h1 className="text-2xl mb-5">Invite your friends:</h1>
          <CopyTextbox text={groupId} />
        </div>

        <div className="flex justify-between">
          <div className="w-96 h-96 bg-neutral/75 m-20 p-5 text-white flex flex-col justify-start items-center rounded-lg">
            <h1 className="text-xl font-bold p-2">Group Members</h1>
            <ul className="mt-3 p-4 text-left list-inside">
              <li className="mb-2">Bob</li>
              <li className="mb-2">Steve</li>
              <li className="mb-2">Stan</li>
              <li className="mb-2">Vanessa (you)</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <SetPreferences />
            <br/>
            <Button callBack={getRecommendations} name="Generate Restaurants" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
