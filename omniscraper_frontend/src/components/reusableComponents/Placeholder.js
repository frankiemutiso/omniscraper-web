import React from "react";
import "./Placeholder.css";

function Placeholder(props) {
  const { height, screen, device, loggedIn,hideTextContainer, ...restProps } = props;
  return (
    <div className="placeholder" {...restProps}>
      <div className="placeholder__media" style={{ height: height }}></div>
      {(screen !== "detail" || device !== "mobile") && (
        <div className="placeholder__actions">
        {!hideTextContainer &&
          <div className="placeholder__text">
            <div className="placeholder__text-item"></div>
            <div className="placeholder__text-item"></div>
          </div>}
          <div className="placeholder__actions__bottom">
            <div className="placeholder__time"></div>
            <div className="placeholder__buttons">
              {screen === "detail" ? (
                <>
                  <div className="placeholder__button-rect"></div>
                  {loggedIn && <div className="placeholder__button-rect"></div>}
                </>
              ) : (
                <>
                  <div className="placeholder__button-circle"></div>
                  {loggedIn && (
                    <div className="placeholder__button-circle"></div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Placeholder;
