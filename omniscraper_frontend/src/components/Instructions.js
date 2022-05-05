import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Twitter from "@mui/icons-material/Twitter";
import Click from "@mui/icons-material/InsertLinkRounded";
import Download from "@mui/icons-material/FileDownloadOutlined";
import Mention from "@mui/icons-material/ReplyRounded";
import "./Instructions.css";

function Instructions({ window }) {
  return (
    <Paper
      elevation={0}
      style={{
        padding: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        flex: 1,
        width: "23vw",
        textAlign: "center",
      }}
    >
      <div className='paper'>
        <div className='container'>
          <Twitter className='icons' color='primary' />
          <Typography variant='overline' className='typography'>
            Log into Twitter
          </Typography>
        </div>
      </div>
      <div className='paper'>
        <div className='container'>
          <Mention className='icons' color='primary' />
          <Typography variant='overline' className='typography'>
            Find a tweet with a video and comment with{" "}
            <b style={{ fontStyle: "italic" }}>@omniscraper</b>
          </Typography>
        </div>
      </div>

      <div className='paper'>
        <div className='container'>
          <Click className='icons' color='primary' />
          <Typography variant='overline' className='typography'>
            Click on the replied link
          </Typography>
        </div>
      </div>
      <div className='paper'>
        <div className='container'>
          <Download className='icons' color='primary' />
          <Typography variant='overline' className='typography'>
            Download and share your video!
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default Instructions;
