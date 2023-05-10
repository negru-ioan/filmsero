import React, { useContext } from "react";
import "./style.scss";

import VideoPopup from "../video-popup/VideoPopup";
import Img from "./Img";
import { PlayIcon } from "./Playbtn";
import { PopupContext } from "../../context/PopupContext";

const VideosSection = (props) => {
  const { showPopup } = useContext(PopupContext);
  const { loading, videos } = props;

  return (
    <div className="videosSection mb-3">
      <div className="contentWrapper">
        <div className="sectionHeading">Official Videos</div>
        {loading ? (
          <div className="videos">
            {videos.map((video) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  showPopup(video.key);
                }}
              >
                <div className="videoThumbnail">
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayIcon />
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {/* {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()} */}
            Loading...
          </div>
        )}
      </div>
      <VideoPopup />
    </div>
  );
};

export default VideosSection;
