import React from "react";
import TomNook from "./img/TomNook.png"

function Homepage() {
  return (
    <div className="homepage-top">
    <img id="nook" src={TomNook} alt="TomNook" />
    <h1>Welcome to the Nook Foundation!</h1>
    </div>
  );
}

export default Homepage;
