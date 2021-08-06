import React from "react";
import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";

const screenShotList = [
  ["line群組通知", "https://i.imgur.com/po8mLk0.png"],
  ["discord頻道通知", "https://i.imgur.com/Y6nEr9j.png"],
  ["設定頁面", "https://i.imgur.com/1XrN0qZ.png"],
];

const announcements = [
  [
    "功能更新",
    "2021/8/5",
    <>
      新增 "忽略公告" 功能
      <br />
      當公告內容出現特定關鍵字時，不要發送通知
      <br />
      (預設是忽略標案相關 、教師相關)
    </>,
  ],
  [
    "功能更新",
    "2021/8/4",
    <>
      加入"只接收釘選公告"選項
      <br />
      現在可以選擇只接收有"HOT!"標籤的公告了
      <br />
      (預設是接收所有公告)
    </>,
  ],
];

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  image_outer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
  },
});

export const ScreenShots: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Typography component="h2" variant="h4" color="textSecondary">
        <b>螢幕截圖</b>
      </Typography>

      {screenShotList.map(([title, url], idx) => (
        <div key={idx}>
          <Typography component="h3" variant="h5" color="textSecondary">
            <br />
            <b>{title}</b>
          </Typography>
          <CardActionArea component="div">
            <img src={url} alt="" className={classes.image} />
          </CardActionArea>
        </div>
      ))}
    </Grid>
  );
};

export const Announcements: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Typography component="h2" variant="h4" color="textSecondary">
        <b>公告</b>
      </Typography>

      <br />

      {announcements.map(([title, date, content], idx) => (
        <div key={idx}>
          <CardActionArea component="div">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {date}
                  </Typography>
                  <Typography variant="subtitle1">{content}</Typography>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
          <br />
        </div>
      ))}

      <br />
      <br />
      <Typography component="h2" variant="h4" color="textSecondary">
        <b>原始碼</b>
      </Typography>

      <br />

      <CardActionArea
        component="a"
        target="_blank"
        href="https://github.com/BWsix/CLHS-nowotify"
        rel="noreferrer"
      >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                <b>client side</b>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                typescript-react + material-ui
              </Typography>
              <Typography variant="subtitle1" paragraph>
                極度需要幫助，我的美感少的有點可憐
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                前往github - CLHS-nowotify
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>

      <br />

      <CardActionArea
        component="a"
        target="_blank"
        href="https://github.com/BWsix/CLHS-nowotify-server"
        rel="noreferrer"
      >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                <b>server side</b>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                python + firebase
              </Typography>
              <Typography variant="subtitle1" paragraph>
                雖然後端有好一些，但還是需要幫助
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                前往github - CLHS-nowotify-server
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
