import React from "react";
import "./TweetCard.css";
import ProfileIcon from "./../../../Images/ProfileIcon.png";

export default function TweetCard() {
  const tweetDescription = `Market Volume Barometer 6-27-2023
Sentiment: VORACIOUS 
Volume: 10% 
Real Feel: FRIGID 
Cycle: BEARISH III 
Portfolio: CASH 
Next Day Move: SIDEWAYS`;
  return (
    <div className="TweetCard">
      <div className="Details">
        <div className="ProfileDetails">
          <img src={ProfileIcon} alt="ProfileLog" className="ProfileImg" />
          <p className="UserName">Binca Shinaasi</p>
        </div>
        <p className="Date">Abrl 26</p>
      </div>
      <div className="Description">
        <pre>{tweetDescription} </pre>
      </div>
    </div>
  );
}
