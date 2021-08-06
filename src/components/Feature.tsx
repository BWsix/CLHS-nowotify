import React from "react";

import { signIn } from "../helpers/auth";
import { Grid, Paper, Typography, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    marginTop: theme.spacing(3),
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),
    backgroundImage: "url(https://i.imgur.com/Bf3la7K.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

interface FeatureProps {
  with_login?: boolean;
}

export const Feature: React.FC<FeatureProps> = ({ with_login }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.mainFeaturedPost}>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography variant="h5" color="inherit" paragraph>
                使用 Discord / Line 及時接收壢中官網公告
              </Typography>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                <b>CLHS nowotify</b>
              </Typography>
              {with_login && (
                <Button variant="contained" onClick={signIn} size="large">
                  使用Google帳號登入設定頁面
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/blog/MainFeaturedPost.js
