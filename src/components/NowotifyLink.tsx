import React, { useContext } from "react";
import { remove } from "../helpers/database";
import { sendTestMessage } from "../helpers/sendTestMessage";
import { NowotifyType } from "../hooks/useNowotifys";
import { FormContext } from "../pages/types";

import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Button,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    marginTop: "20px",
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
});

interface NowotifyLinkProps {
  nowotify: NowotifyType;
}

export const NowotifyLink: React.FC<NowotifyLinkProps> = ({ nowotify }) => {
  const { formDispatch, setToggleMakeNowotify } = useContext(FormContext);

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.cardDetails}>
        <CardContent>
          <Typography component="h2" variant="h5">
            {nowotify.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {nowotify.type === "discord" ? "Discord webhook" : "Line notify"}
            {nowotify.only_pinned && " (只接收釘選公告)"}
          </Typography>
        </CardContent>

        <CardActions>
          {nowotify.type !== "line" && ( // well... we have some technical problems here
            <Button
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => {
                sendTestMessage(nowotify.type, nowotify.data);
              }}
            >
              發送測試訊息
            </Button>
          )}
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={() => {
              formDispatch({ type: "update", data: { ...nowotify } });
              setToggleMakeNowotify(true);
            }}
          >
            編輯
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            onClick={() => {
              if (window.confirm("確認刪除")) remove(nowotify.id);
            }}
          >
            刪除
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
