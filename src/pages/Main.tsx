import React, { useContext, useState } from "react";
import { UserContext } from "../App";

import { useNowotifys } from "../hooks/useNowotifys";
import { useMakeNowotifyValues } from "../hooks/useMakeNowotifyValues";
import { NowotifyLink, MakeNowotifyButton, MakeNowotify } from "../components";

import { CssBaseline, Grid } from "@material-ui/core";

export const Main: React.FC = () => {
  const [toggleMakeNowotify, setToggleMakeNowotify] = useState(false);
  const { name, type, data, id, setAllValues, clearAllValues } =
    useMakeNowotifyValues();

  const user = useContext(UserContext);
  const links = useNowotifys(user.uid);

  return (
    <React.Fragment>
      <CssBaseline />

      {toggleMakeNowotify ? (
        <MakeNowotify
          setToggle={setToggleMakeNowotify}
          clearAllValues={clearAllValues}
          _name={name}
          _type={type}
          _data={data}
          _id={id}
        />
      ) : (
        <Grid container spacing={4}>
          {links.map((link) => (
            <NowotifyLink
              link={link}
              setAllValues={setAllValues}
              setToggle={setToggleMakeNowotify}
              key={link.id}
            />
          ))}
          <MakeNowotifyButton setToggle={setToggleMakeNowotify} />
        </Grid>
      )}
    </React.Fragment>
  );
};
