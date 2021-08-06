import React, { useState } from "react";

import { FormContext } from "./types";
import { useHandleForm, useNowotifys, useGithubData } from "../hooks/";
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
  const { nowotifys, isLoadingNowotifys } = useNowotifys(formState.uid);
  const { GROUP_TABLE, KEYWORD_TABLE, isLoading, error } = useGithubData();

  if (error) return <>ERROR</>;
  return (
    <FormContext.Provider value={{ setToggleMakeNowotify, formDispatch }}>
      <React.Fragment>
        <CssBaseline />

        {toggleMakeNowotify ? (
          <MakeNowotify
            formState={formState}
            KEYWORD_TABLE={KEYWORD_TABLE}
            GROUP_TABLE={GROUP_TABLE}
          />
        ) : (
          <>
            <Feature />
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography component="h2" variant="h4" color="textSecondary">
                  <b>Nowotify列表</b>
                </Typography>
                {isLoadingNowotifys ? (
                  <Typography color="textSecondary">Loading...</Typography>
                ) : (
                  nowotifys.map((nowotify) => (
                    <NowotifyLink nowotify={nowotify} key={nowotify.id} />
                  ))
                )}
                <br />
                {!isLoading && (
                  <MakeNowotifyButton setToggle={setToggleMakeNowotify} />
                )}
              </Grid>
              <Announcements />
            </Grid>
          </>
        )}
      </React.Fragment>
    </FormContext.Provider>
  );
};
