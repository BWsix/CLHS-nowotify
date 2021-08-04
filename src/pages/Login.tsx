import React from "react";
import { Announcements, ScreenShots } from "./contents";
import { Feature } from "../components";
import { Container, Grid } from "@material-ui/core";

export const Login: React.FC = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Feature with_login={true} />

        <Grid container spacing={4}>
          <ScreenShots />
          <Announcements />
        </Grid>
      </Container>
    </div>
  );
};
