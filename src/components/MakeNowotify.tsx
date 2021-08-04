import React, { useState, useContext } from "react";
import { submit } from "../helpers/database";
import { Tutorial } from "./Tutorial";
import { FormContext } from "../pages/types";
import { NowotifyType } from "../hooks/useNowotifys";

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
  FormGroup,
  Checkbox,
} from "@material-ui/core";

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
  formState: NowotifyType;
}

export const MakeNowotify: React.FC<MakeNowotifyProps> = ({ formState }) => {
  const { formDispatch, setToggleMakeNowotify } = useContext(FormContext);

  const [name, setName] = useState(formState.name);
  const [type, setType] = useState<"discord" | "line">(formState.type);
  const [data, setData] = useState(formState.data);
  const [only_pinned, setOnly_pinned] = useState(formState.only_pinned);

  const handle_submit = () => {
    if (!name.length || !data.length) return;
    submit({
      name,
      type,
      data,
      only_pinned,
      uid: formState.uid,
      id: formState.id,
    });

    handle_cancel();
  };

  const handle_cancel = () => {
    setName("");
    setType("discord");
    setData("");
    setOnly_pinned(false);
    formDispatch({ type: "init" });
    setToggleMakeNowotify(false);
  };

  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <div className={classes.formOuter}>
        <Typography variant="h4">
          <b>{formState.id.length ? "更新" : "新增"} nowotify</b>
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

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormLabel component="legend">通知選項</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={only_pinned}
                        onChange={() => setOnly_pinned((prev) => !prev)}
                      />
                    }
                    label="只接收釘選公告 (有紅色HOT!標籤的)"
                  />
                </FormGroup>
              </FormControl>
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
                {formState.id.length ? "更新 !" : "新增 !"}
              </Button>
            </Grid>
          </Grid>
        </form>

        <Tutorial type={type} />
      </div>
    </Container>
  );
};
