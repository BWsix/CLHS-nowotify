import React, { useState } from "react";

import { FormContext } from "./types";
import { useHandleForm, useNowotifys } from "../hooks/";
import { NowotifyLink, MakeNowotifyButton, MakeNowotify } from "../components";

import { CssBaseline, Grid } from "@material-ui/core";

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
          <Grid container spacing={4}>
            {Nowotifys.map((nowotify) => (
              <NowotifyLink nowotify={nowotify} key={nowotify.id} />
            ))}
            <MakeNowotifyButton setToggle={setToggleMakeNowotify} />
          </Grid>
        )}
      </React.Fragment>
    </FormContext.Provider>
  );
};
