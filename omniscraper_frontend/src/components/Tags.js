import React from "react";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import makeStyles from "@mui/styles/makeStyles";
import { HideOnScroll } from "./HideOnScroll";

const styles = makeStyles({
  tags: {
    overflowX: "auto",
    display: "flex",
    "&::-webkit-scrollbar": { width: 0 },
  },
});

function Tags(props) {
  const {
    videoTags,
    clickedTag,
    handleEditTagDialogOpen,
    mouseX,
    mouseY,
    handleRightClick,
    handleClose,
    loggedIn,
    loading,
    handleScrollPosition,
  } = props;
  const classes = styles();

  const tagEditor = (
    <Menu
      disableScrollLock
      keepMounted
      open={mouseY !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        mouseY !== null && mouseX !== null
          ? { top: mouseY, left: mouseX }
          : undefined
      }
    >
      <MenuItem onClick={() => handleEditTagDialogOpen()}>Edit</MenuItem>
    </Menu>
  );

  return (
    <>
      {/* <HideOnScroll {...props}>
        <Toolbar />
      </HideOnScroll> */}
      <AppBar position="fixed" style={{ background: "#fff", opacity: 0.9 }}>
        <Toolbar>
          <div className={classes.tags}>
            {loggedIn && tagEditor}
            {videoTags.map((tag) => (
              <Chip
                onContextMenu={(e) => handleRightClick(e, tag)}
                component={Link}
                to={`/tags/${tag.slug}`}
                onClick={() => handleScrollPosition()}
                key={tag.tag_name}
                label={tag.tag_name}
                disabled={loading}
                clickable
                color="primary"
                variant={clickedTag === tag.slug ? "default" : "outlined"}
                style={{ marginLeft: 4, marginRight: 4, fontWeight: 500 }}
              />
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Tags;
