import React from "react";
import "./DesktopTrendingVideo.css";
import MediaCard from "./reusableComponents/MediaCard";

function DesktopTrendingVideo(props) {
  const { height, url, handleClick, lapse, text, type, play } = props;

  return (
    <div className="desktop__trending__video" onClick={() => handleClick()}>
      <MediaCard
        desktopTrending
        src={url}
        handleClick={handleClick}
        height={height}
        screen="list"
        playIconSize={40}
        style={{
          width: "30%",
        }}
        type={type}
      />
      <div className="desktop__trending__video_right">
        <div className="desktop__trending__video_right__top">
          <p className="desktop__trending__video_text">{text}</p>
        </div>
        <div className="desktop__trending__video_right__bottom">
          <p className="desktop__trending__video_text">{lapse}</p>
        </div>
      </div>
    </div>
  );
}

export default DesktopTrendingVideo;
