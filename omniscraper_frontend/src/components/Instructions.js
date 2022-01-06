import { makeStyles, Paper, Typography } from "@mui/material";
import React from "react";

const useStyles = makeStyles({});

function Instructions() {
  const classes = useStyles();
  return (
    <Paper elevation={1} square>
      <Typography
        variant="h4"
        color="textPrimary"
        style={{ fontWeight: 600, textTransform: "uppercase" }}
      >
        Omniscraper
      </Typography>
    </Paper>
  );
}

export default Instructions;
