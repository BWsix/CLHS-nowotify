import React from "react";
import { Feature } from "../components";
import {
  Container,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  image_outer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
  },
});

export const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Feature with_login={true} />

        <Typography component="h2" variant="h4" color="textPrimary">
          螢幕截圖
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} className={classes.image_outer}>
            <CardActionArea component="div">
              <img
                src="https://i.imgur.com/po8mLk0.png"
                alt=""
                className={classes.image}
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={12} md={6} className={classes.image_outer}>
            <CardActionArea component="div">
              <img
                src="https://i.imgur.com/Y6nEr9j.png"
                alt=""
                className={classes.image}
              />
            </CardActionArea>
          </Grid>
        </Grid>

        <Typography component="h2" variant="h4" color="textPrimary">
          原始碼
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardActionArea
              component="a"
              href="https://github.com/BWsix/CLHS-nowotify"
            >
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      source code - client side
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      typescript-react + material-ui
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      極度需要幫助，我的美感少的有點可憐
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      前往github(CLHS-nowotify)
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardActionArea
              component="a"
              href="https://github.com/BWsix/CLHS-nowotify-server"
            >
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      source code - server side
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      python + firebase
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      雖然後端有好一些，但還是需要幫助
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      前往github(CLHS-nowotify-server)
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
