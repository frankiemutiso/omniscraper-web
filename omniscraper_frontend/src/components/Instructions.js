import { Grid, Paper, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Twitter from "@mui/icons-material/Twitter";
import Click from "@mui/icons-material/InsertLinkRounded";
import Download from "@mui/icons-material/FileDownloadOutlined";
import Mention from "@mui/icons-material/ReplyRounded";
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const useStyles = makeStyles({
  container: {
    display: "grid",
    placeItems: "center",
    // width: 200,
    textAlign: "center",
  },
  paper: { padding: 8, display: "flex", justifyContent: "center", width: 200 },
  typography: { marginTop: 4, lineHeight: 1.5 },
  icons: { fontSize: 50 },
});

function Instructions({ window }) {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Paper
      elevation={0}
      style={{
        padding: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        top: trigger && 80,
        flex: 1,
        width: "23vw",
        textAlign: "center",
        transition: "all 0.5s ease",
      }}
    >
      <div elevation={0} className={classes.paper}>
        <div className={classes.container}>
          <Twitter className={classes.icons} color="primary" />
          <Typography variant="overline" className={classes.typography}>
            Log into Twitter
          </Typography>
        </div>
      </div>
      <div elevation={0} className={classes.paper}>
        <div className={classes.container}>
          <Mention className={classes.icons} color="primary" />
          <Typography variant="overline" className={classes.typography}>
            Find a tweet with a video and comment with{" "}
            <b style={{ fontStyle: "italic" }}>@omniscraper</b>
          </Typography>
        </div>
      </div>

      <div elevation={0} className={classes.paper}>
        <div className={classes.container}>
          <Click className={classes.icons} color="primary" />
          <Typography variant="overline" className={classes.typography}>
            Click on the replied link
          </Typography>
        </div>
      </div>
      <div elevation={0} className={classes.paper}>
        <div className={classes.container}>
          <Download className={classes.icons} color="primary" />
          <Typography variant="overline" className={classes.typography}>
            Download and share your video!
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default Instructions;
