import React, { useContext, useState } from "react";
import { UserContext } from "../App";

import { useUserLinks } from "../hooks/useUserLinks";
import { useMakeLInkValues } from "../hooks/useMakeLInkValues";
import { NowotifyLink, MakeLinkButton, MakeLink } from "../components";

import { CssBaseline, Grid } from "@material-ui/core";

export const Main: React.FC = () => {
  const [toggleMakeLink, setToggleMakeLink] = useState(false);
  const { name, type, data, id, setAllValues, clearAllValues } =
    useMakeLInkValues();

  const user = useContext(UserContext);
  const links = useUserLinks(user.uid);

  return (
    <React.Fragment>
      <CssBaseline />

      {toggleMakeLink ? (
        <MakeLink
          setToggle={setToggleMakeLink}
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
              setToggle={setToggleMakeLink}
              key={link.id}
            />
          ))}
          <MakeLinkButton setToggle={setToggleMakeLink} />
        </Grid>
      )}
    </React.Fragment>
  );
};
