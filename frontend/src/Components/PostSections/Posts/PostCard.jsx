import React from "react";
import ProfileIcon from "./../../../Images/ProfileIcon.png";
import LikesIcon from "./../../../Images/Likes.svg";
import "./PostCard.css";
export default function PostCard() {
  return (
    <div className="PostCard">
      <div className="Head">
        <p className="Counter">2</p>
        <img src={LikesIcon} alt="Likes" className="Likes" />
      </div>
      <div className="Details">
        <div className="ProfileDetails">
          <img src={ProfileIcon} alt="ProfileLog" className="ProfileImg" />
          <p className="UserName">Binca Shinaasi</p>
        </div>
        <p className="Date">Abrl 26</p>
      </div>
      <div className="Description">
        <p>
          He visto esta acción en PulseTracker, he comprado en Apple a precio
          185.9$
        </p>
      </div>
    </div>
  );
}
