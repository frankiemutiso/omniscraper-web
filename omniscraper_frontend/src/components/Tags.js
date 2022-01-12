import React from "react";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import "./Tags.css";
import { Menu, MenuItem } from "@mui/material";

function Tags({
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
}) {
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
    <div className="tags" style={{ marginTop: 8, marginBottom: 8 }}>
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
          style={{ margin: 5, fontWeight: 500 }}
        />
      ))}
    </div>
  );
}

export default Tags;
