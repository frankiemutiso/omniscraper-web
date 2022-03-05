import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import makeStyles from "@mui/styles/makeStyles";
import Twitter from "@mui/icons-material/Twitter";
import Click from "@mui/icons-material/InsertLinkRounded";
import Download from "@mui/icons-material/FileDownloadOutlined";
import Mention from "@mui/icons-material/ReplyRounded";

const useStyles = makeStyles({
  container: {
    display: "grid",
    placeItems: "center",
    textAlign: "center",
  },
  paper: { padding: 8, display: "flex", justifyContent: "center", width: 200 },
  typography: { marginTop: 4, lineHeight: 1.5 },
  icons: { fontSize: 50 },
});

function Instructions({ window }) {
  const classes = useStyles();

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
      <div className={classes.paper}>
        <div className={classes.container}>
          <Twitter className={classes.icons} color="primary" />
          <Typography variant="overline" className={classes.typography}>
            Log into Twitter
          </Typography>
        </div>
      </div>
      <div className={classes.paper}>
        <div className={classes.container}>
          <Mention className={classes.icons} color="primary" />
          <Typography variant="overline" className={classes.typography}>
            Find a tweet with a video and comment with{" "}
            <b style={{ fontStyle: "italic" }}>@omniscraper</b>
          </Typography>
        </div>
      </div>

      <div className={classes.paper}>
        <div className={classes.container}>
          <Click className={classes.icons} color="primary" />
          <Typography variant="overline" className={classes.typography}>
            Click on the replied link
          </Typography>
        </div>
      </div>
      <div className={classes.paper}>
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
