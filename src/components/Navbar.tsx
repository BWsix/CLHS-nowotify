import React, { useContext } from "react";
import { UserContext } from "../App";
import { signOut } from "../helpers/auth";

import {
  Button,
  Toolbar,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
}));

export const Navbar: React.FC = () => {
  const user = useContext(UserContext);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          CLHS nowotify
        </Typography>
        <Button variant="contained" size="small" onClick={signOut}>
          Sign out
        </Button>
        <Avatar
          alt={user.displayName || ""}
          src={user.photoURL || ""}
          className={classes.avatar}
        />
      </Toolbar>
    </React.Fragment>
  );
};
