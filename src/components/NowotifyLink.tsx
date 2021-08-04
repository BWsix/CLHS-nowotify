import React from "react";
import { remove } from "../helpers/database";
import { NowotifyType } from "../hooks/useNowotifys";

import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  Button,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
});

interface NowotifyLinkProps {
  link: NowotifyType;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setAllValues: (
    name: string,
    type: "discord" | "line",
    data: string,
    id: string
  ) => void;
}

export const NowotifyLink: React.FC<NowotifyLinkProps> = ({
  link,
  setToggle,
  setAllValues,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {link.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {link.type === "discord" ? "Discord webhook" : "Line notify"}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={() => {
                  setAllValues(link.name, link.type, link.data, link.id);
                  setToggle(true);
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                size="medium"
                color="secondary"
                onClick={() => {
                  if (window.confirm("確認刪除")) remove(link.id);
                }}
              >
                Delete
              </Button>
            </CardActions>
          </div>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
