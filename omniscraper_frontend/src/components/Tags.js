import React from "react";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import makeStyles from "@mui/styles/makeStyles";
import { HideOnScroll } from "./HideOnScroll";
import { useTheme } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import "./Tags.css";

const styles = makeStyles((theme) => ({
  toolBarRoot: {
    paddingRight: 0,
    paddingLeft: 0,
    [theme.breakpoints.down("sm")]: {
      // paddingTop: 16,
    },
    height: 64,
  },

  appBar: {},
}));

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
  const classes = styles(props);
  const history = useHistory();

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
    <AppBar
      style={{
        background: "#fff",
        position: "fixed",
        top: 64,
        opacity: 0.95,
        transition: "all 0.5s ease",
      }}
    >
      <Toolbar classes={{ root: classes.toolBarRoot }}>
        {loggedIn && tagEditor}
        <div className="tags">
          <div style={{ paddingRight: 16 }} />
          {videoTags.map((tag) => (
            <Chip
              onContextMenu={(e) => handleRightClick(e, tag)}
              onClick={() => {
                handleScrollPosition();
                history.push(`/tags/${tag.slug}`);
              }}
              key={tag.tag_name}
              label={tag.tag_name}
              disabled={loading}
              clickable
              color="primary"
              variant={clickedTag === tag.slug ? "default" : "outlined"}
              style={{ marginLeft: 4, marginRight: 4, fontWeight: 500 }}
            />
          ))}
          <div style={{ paddingRight: 16 }} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Tags;
