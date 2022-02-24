import React from "react";
import ViewIcon from "@mui/icons-material/PlayArrow";

import "./MediaCard.css";

// Media Card Types: image, video

const MediaCard = React.forwardRef((props, ref) => {
  const {
    type,
    alt,
    src,
    autoPlay,
    height,
    text,
    lapse,
    handleClick,
    leftButton,
    rightButton,
    screen,
    device,
    play,
    ...restProps
  } = props;
  return (
    <div {...restProps} className="media-card">
      <div style={{ position: "relative" }}>
        {type === "video" ? (
          <video
            ref={ref && ref}
            autoPlay={autoPlay}
            disablePictureInPicture
            controlsList="nodownload"
            // height={height}
            className="media-card__video"
            onContextMenu={(e) => e.preventDefault()}
            onClick={handleClick}
            style={{
              height: height,
              objectFit: screen !== "detail" ? "cover" : "contain",
              border:
                device === "desktop" && screen === "detail"
                  ? "1px solid #e0e0e0"
                  : "none",
              borderBottom: "none",
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img
            ref={ref && ref}
            crossOrigin="anonymous"
            src={src}
            alt={src}
            // height={height}
            loading="lazy"
            className="media-card__image"
            onContextMenu={(e) => e.preventDefault()}
            onClick={handleClick}
            style={{
              height: height,
              objectFit: device !== "mobile" ? "cover" : "contain",
              border:
                device === "desktop" && screen === "detail"
                  ? "1px solid #e0e0e0"
                  : "none",
              borderBottom: "none",
            }}
          />
        )}
        {!play && (
          <ViewIcon
            style={{
              color: "white",
              fontSize: 60,
              opacity: 0.8,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
            onClick={handleClick}
            size="large"
          />
        )}
      </div>

      {(screen !== "detail" || device !== "mobile") && (
        <div className="media-card__actions">
          <div className="media-card__actions__text-container">
            {text?.length > 0 && (
              <p className="media-card__actions__text">{text}</p>
            )}
          </div>
          <div className="media-card__actions__bottom">
            <p
              className="media-card__actions__text"
              style={{
                marginLeft: 8,
              }}
            >
              {lapse}
            </p>
            <div className="media-card__actions__buttons">
              {leftButton && leftButton}
              {rightButton && rightButton}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default MediaCard;
