import React from "react";
import "./MediaCard.css";

function MediaCard(props) {
  const { type, alt, src, autoPlay, height, width, ...restProps } = props;
  return (
    <div {...restProps} className="media-card">
      {type === "video" ? (
        <video
          autoPlay={autoPlay}
          disablePictureInPicture
          controlsList="nodownload"
          height={height}
          width={width}
          className="media-card__video"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img
          crossOrigin="anonymous"
          src={src}
          alt={alt ? alt : ""}
          height={height}
          width="width"
          loading="lazy"
          className="media-card__image"
        />
      )}
      <div className="media-card__actions">
        <p className="media-card__actions__text"></p>
        <div className="media-card__actions__bottom">
          <p className="media-card__actions__time"></p>
          <div className="media-card__actions__buttons"></div>
        </div>
      </div>
    </div>
  );
}

export default MediaCard;
