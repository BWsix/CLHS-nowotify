import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { submit } from "../helpers/database";

import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Tutorial } from "./Tutorial";

const useStyles = makeStyles((theme) => ({
  formOuter: {
    paddingTop: theme.spacing(8),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
}));

interface MakeNowotifyProps {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  clearAllValues: () => void;
  _name: string;
  _type: "discord" | "line";
  _data: string;
  _id: string;
}

export const MakeNowotify: React.FC<MakeNowotifyProps> = ({
  setToggle,
  clearAllValues,
  _name,
  _type,
  _data,
  _id,
}) => {
  const user = useContext(UserContext);

  const [name, setName] = useState(_name || "");
  const [type, setType] = useState<"discord" | "line">(_type || "discord");
  const [data, setData] = useState(_data || "");

  const handle_submit = () => {
    if (!name.length || !data.length) return;
    submit({ name, type, data, uid: user.uid, id: _id });

    handle_cancel();
  };

  const handle_cancel = () => {
    setName("");
    setType("discord");
    setData("");
    setToggle((prev) => !prev);
    clearAllValues();
  };

  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <div className={classes.formOuter}>
        <Typography variant="h4">
          <b>新增 nowotify</b>
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel component="legend">通知平台</FormLabel>
                <RadioGroup
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value as "discord" | "line")
                  }
                >
                  <FormControlLabel
                    value="discord"
                    control={<Radio />}
                    label="Discord"
                  />
                  <FormControlLabel
                    value="line"
                    control={<Radio />}
                    label="Line"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="群組名稱"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label={
                  type === "discord"
                    ? "Discord Webhook url"
                    : "Line Notify token"
                }
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handle_cancel}
              >
                取消
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={!name.length || !data.length}
                onClick={handle_submit}
              >
                {_id.length ? "更新 !" : "新增 !"}
              </Button>
            </Grid>
          </Grid>
        </form>

        <Tutorial type={type} />
      </div>
    </Container>
  );
};
