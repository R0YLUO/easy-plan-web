import React from "react";
import Button from "../components/Button";
import HomeButton from "../components/home_butt";

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
        <h1 className="text-8xl font-bold mt-10">EasyPlan</h1>
      </div>
      <div
        className="text-center mb-4"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          venenatis urna cursus eget. Odio euismod lacinia at quis risus sed.
          Purus sit amet luctus venenatis lectus magna. Dui accumsan sit amet
          nulla. Non tellus orci ac auctor augue mauris. Laoreet non curabitur
          gravida arcu ac tortor dignissim convallis aenean. Velit scelerisque
          in dictum non consectetur a erat nam. Consequat nisl vel pretium
          lectus quam id leo in vitae. Sit amet consectetur adipiscing elit
          pellentesque habitant morbi tristique senectus. Velit sed ullamcorper
          morbi tincidunt ornare massa eget. Senectus et netus et malesuada
          fames ac turpis. Consequat id porta nibh venenatis cras sed felis
          eget. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce
          ut. Enim sed faucibus turpis in eu mi bibendum. Phasellus vestibulum
          lorem sed risus ultricies tristique nulla aliquet. Amet dictum sit
          amet justo. Fringilla est ullamcorper eget nulla facilisi etiam
          dignissim diam.
        </p>
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
