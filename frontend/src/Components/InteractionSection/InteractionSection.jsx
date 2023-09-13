import React from "react";
import PostSection from "../PostSections/PostSection";
import TweetSection from "../TweetSection/TweetSection";
import './InteractionSection.css'

export default function InteractionSection() {
  return (
    <div className="InteractionSection">
        <div className="PostSection"><PostSection/></div>
        <div className="TweetSection"><TweetSection/></div>
    </div>
  );
}
