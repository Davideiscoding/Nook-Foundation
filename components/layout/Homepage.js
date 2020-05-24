import React from "react";
import TomNook from "./img/TomNook.png"

function Homepage() {
  return (
  <div>
    <div className="homepage-top">
      <img id="nook" src={TomNook} alt="TomNook" />
        <div className="welcome">
          <h1>Welcome to Nook Foundation! ❦</h1>
          <h3>This website is here to spread kindness to others, and to donate materials to the wonderful
          Animal Crossing New Horizon Community! ❦</h3>
        </div>
    </div>
    <ul className="container">
      <div className="box">
        <h2>Our services include</h2>
        <li><span>Free</span>Gold Stacks to every member of our community</li>
        <li><span>Free</span>Nook Mile Tickets to every member of our community</li>
        <li><span>Free</span>Villager giveaways every week of highly sought-after villagers</li>
        <li><span>Free</span>Star Fragments and Large Star Fragments to all members of our community</li>
        <h3>We also have weekly Nintendo Gift Card Giveaways with insane prizes!</h3>
      </div>
      <div className="box">
        <h2>How it works</h2>
        <li>First you will need to join us in our Discord channel: <a href="https://discord.gg/nookfoundation" rel="noopener noreferrer" target="_blank">Nook Foundation</a></li>
        <li>It would be great to check the Information tab, which will give you an overview of everything!</li>
        <li>Under Free Stuff is most of the good stuff that you are looking for. Just request what you like on there.</li>
        <li>And that's about it! Have fun and enjoy your time in Nook Foundation!</li>
      </div>
      <div className="box">
        <h2>Rules</h2>
        <li><span>1:</span>Please be kind and respect to each other</li>
        <li><span>2:</span>Keep it P-13 friendly because we do have minors</li>
        <li><span>3:</span>No racism, sexism, death threats, harassment, trolling etc</li>
        <li><span>4:</span>Swearing is allowed as long it doesn't directly attacked someone</li>
      </div>
    </ul>
  </div>
  );
}

export default Homepage;
