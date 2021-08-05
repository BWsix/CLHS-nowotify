import React, { useState, useContext, useEffect } from "react";
import { submit } from "../helpers/database";
import { Tutorial } from "./Tutorial";
import { FormContext } from "../pages/types";
import { KEYWORD_TABLE, NowotifyType } from "../hooks/useNowotifys";

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
  Switch,
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
  const [blocked_keyword_ids, setBlocked_keyword_ids] = useState(
    formState.blocked_keyword_ids
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const preventGoBack = (e: MouseEvent) => {
      if (e.button === 3) {
        e.preventDefault();
        handle_cancel();
      }
    };

    window.addEventListener("mousedown", preventGoBack);
    return () => window.removeEventListener("mousedown", preventGoBack);
  }, []);

  const handle_submit = () => {
    if (!name.length || !data.length) return;
    submit({
      name,
      type,
      data,
      only_pinned,
      uid: formState.uid,
      id: formState.id,
      blocked_keyword_ids,
    });

    handle_cancel();
  };

  const handle_cancel = () => {
    setName("");
    setType("discord");
    setData("");
    setOnly_pinned(false);
    setBlocked_keyword_ids([0, 1]);

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
                <FormLabel component="legend">
                  當公告內容出現以下選取的關鍵字，不要發送通知
                </FormLabel>
                <FormGroup>
                  {KEYWORD_TABLE.map(([keywordTag, ...keywordList], idx) => (
                    <div key={idx}>
                      <FormControlLabel
                        label={keywordTag}
                        control={
                          <Switch
                            name={idx.toString()}
                            checked={blocked_keyword_ids.includes(idx)}
                            onChange={() =>
                              setBlocked_keyword_ids((prev) => {
                                if (prev.includes(idx)) {
                                  return prev.filter((id) => id !== idx);
                                } else {
                                  return [...prev, idx];
                                }
                              })
                            }
                          />
                        }
                      />
                      <Typography component="span" color="textSecondary">
                        ({keywordList.join(", ")})
                      </Typography>
                    </div>
                  ))}
                </FormGroup>
              </FormControl>
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
