import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";

function Blank({ window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <Toolbar />
    </Slide>
  );
}

export default Blank;
