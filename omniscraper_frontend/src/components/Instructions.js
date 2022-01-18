import { Grid, Paper, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Twitter from "@mui/icons-material/Twitter";
import Click from "@mui/icons-material/InsertLinkRounded";
import Download from "@mui/icons-material/FileDownloadOutlined";
import Mention from "@mui/icons-material/ReplyRounded";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "grid",
    placeItems: "center",
    // width: 200,
    textAlign: "center",
  },
  paper: { padding: 16, display: "flex", justifyContent: "center", width: 200 },
  typography: { marginTop: 8, lineHeight: 1.5 },
});

function Instructions() {
  const classes = useStyles();

  return (
    <div>
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
        <div elevation={0} className={classes.paper}>
          <div className={classes.container}>
            <Twitter style={{ color: "#6E6E73", fontSize: 50 }} />
            <Typography variant="overline" className={classes.typography}>
              Log into Twitter
            </Typography>
          </div>
        </div>
        <div elevation={0} className={classes.paper}>
          <div className={classes.container}>
            <Mention style={{ color: "#6E6E73", fontSize: 50 }} />
            <Typography variant="overline" className={classes.typography}>
              Find your favourite video and comment with <b>@omniscraper</b>
            </Typography>
          </div>
        </div>

        <div elevation={0} className={classes.paper}>
          <div className={classes.container}>
            <Click style={{ color: "#6E6E73", fontSize: 50 }} />
            <Typography variant="overline" className={classes.typography}>
              Click on the link reply
            </Typography>
          </div>
        </div>
        <div elevation={0} className={classes.paper}>
          <div className={classes.container}>
            <Download style={{ color: "#6E6E73", fontSize: 50 }} />
            <Typography variant="overline" className={classes.typography}>
              Download and share your video!
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Instructions;
