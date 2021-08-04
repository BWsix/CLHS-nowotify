import React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  ButtonBase,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
    textAlign: "center",
    height: "100%",
    width: "100%",
  },
  cardButton: {
    height: "100%",
    width: "100%",
  },
});

interface MakeNowotifyButtonProps {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MakeNowotifyButton: React.FC<MakeNowotifyButtonProps> = ({
  setToggle,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <ButtonBase
              className={classes.cardButton}
              onClick={() => setToggle((prev) => !prev)}
            >
              <CardActionArea component="div">
                <CardContent>
                  <Typography component="h2" variant="h4">
                    新增 nowotify
                  </Typography>
                </CardContent>
              </CardActionArea>
            </ButtonBase>
          </div>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
