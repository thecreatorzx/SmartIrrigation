import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";

const VideoFeed = () => {
  return (
    <div className="video-feed-component">
      <h2>
        <a target="_blank" href="http://192.168.137.117">
          Live Video Feed <RiExternalLinkFill />
        </a>
      </h2>
    </div>
  );
};

export default VideoFeed;
