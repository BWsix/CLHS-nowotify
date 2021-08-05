import React, { useState } from "react";

import { FormContext } from "./types";
import { useHandleForm, useNowotifys } from "../hooks/";
import { Announcements } from "./contents";
import {
  NowotifyLink,
  MakeNowotifyButton,
  MakeNowotify,
  Feature,
} from "../components";

import { CssBaseline, Grid, Typography } from "@material-ui/core";

export const Main: React.FC = () => {
  const [toggleMakeNowotify, setToggleMakeNowotify] = useState(false);
  const { formState, formDispatch } = useHandleForm();
  const Nowotifys = useNowotifys(formState.uid);

  return (
    <FormContext.Provider value={{ setToggleMakeNowotify, formDispatch }}>
      <React.Fragment>
        <CssBaseline />

        {toggleMakeNowotify ? (
          <MakeNowotify formState={formState} />
        ) : (
          <>
            <Feature />
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography component="h2" variant="h4" color="textSecondary">
                  <b>Nowotify列表</b>
                </Typography>
                {Nowotifys.map((nowotify) => (
                  <NowotifyLink nowotify={nowotify} key={nowotify.id} />
                ))}
                <br />
                <MakeNowotifyButton setToggle={setToggleMakeNowotify} />
              </Grid>
              <Announcements />
            </Grid>
          </>
        )}
      </React.Fragment>
    </FormContext.Provider>
  );
};
