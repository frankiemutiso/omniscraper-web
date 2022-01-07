import { Grid, Paper, Typography } from "@mui/material";
import Twitter from "@mui/icons-material/Twitter";
import Mention from "@mui/icons-material/AlternateEmail";
import Download from "@mui/icons-material/Download";
import Click from "@mui/icons-material/Mouse";
import Avatar from "@mui/material/Avatar";

import React from "react";

function Instructions() {
  return (
    <Paper elevation={1} square style={{ padding: 16 }}>
      <Typography varaint="body1">
        The most trusted, reliable, and fastest application that helps users to
        download their favourite Twitter videos.
      </Typography>
      <div style={{ marginTop: 8, marginBottom: 8 }}>
        <Paper
          elevation={0}
          style={{
            marginBottom: 16,
            height: 50,
            width: 50,
            display: "grid",
            placeItems: "center",
            backgroundColor: "#64e2ff",
          }}
        >
          <Twitter style={{ color: "#1D9BF0" }} />
        </Paper>
        <Paper
          elevation={0}
          style={{
            marginBottom: 16,
            height: 50,
            width: 50,
            display: "grid",
            placeItems: "center",
            backgroundColor: "#ffc2f2",
          }}
        >
          <Mention style={{ color: "#F22F5F" }} />
        </Paper>

        <Paper
          elevation={0}
          style={{
            marginBottom: 16,
            height: 50,
            width: 50,
            display: "grid",
            placeItems: "center",
            backgroundColor: "#b2b8c4",
          }}
        >
          <Click style={{ color: "#1F2531" }} />
        </Paper>
        <Paper
          elevation={0}
          style={{
            marginBottom: 16,
            height: 50,
            width: 50,
            display: "grid",
            placeItems: "center",
            backgroundColor: "#b0ffe7",
          }}
        >
          <Download style={{ color: "#1DB954" }} />
        </Paper>
      </div>
    </Paper>
  );
}

export default Instructions;
