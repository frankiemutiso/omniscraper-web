import React from "react";
import "./TrendingVideosPlaceholder.css";

function TrendingVideosPlaceholder() {
  return (
    <div className="trending__placeholder">
      <div className="trending__placeholder__left"></div>
      <div className="trending__placeholder__right">
        <div className="trending__placeholder__right__top">
          <div className="trending__placeholder__right__top__child"></div>
          <div className="trending__placeholder__right__top__child"></div>
        </div>

        <div className="trending__placeholder__right__bottom"></div>
      </div>
    </div>
  );
}

export default TrendingVideosPlaceholder;
