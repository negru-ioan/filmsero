import React, { useContext } from "react";
import ReactPlayer from "react-player/youtube";
import "./video-popup.scss";
import { PopupContext } from "../../context/PopupContext";

const VideoPopup = () => {
  const { show, videoId, hidePopup } = useContext(PopupContext);

  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPopup;
