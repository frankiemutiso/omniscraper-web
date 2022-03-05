import React from "react";
import "./Paper.css";

function Paper(props) {
  const { children, ...restProps } = props;
    return <div className="paper" {...restProps}>{children}</div>;
}

export default Paper;
