import React from "react";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";

function Tags({ videoTags, clickedTag }) {
  return (
    <div>
      {videoTags.map((tag) => (
        <Chip
          component={Link}
          to={`/tags/${tag.slug}`}
          key={tag.tag_name}
          label={tag.tag_name}
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
