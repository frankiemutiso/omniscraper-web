import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

export const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      timeout={{ enter: 500, exit: 500 }}
    >
      {children}
    </Slide>
  );
};
