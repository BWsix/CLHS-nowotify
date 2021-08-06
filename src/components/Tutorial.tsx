import React from "react";
import { Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tutorial: {
    paddingTop: theme.spacing(6),
  },
  step: {
    paddingTop: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
  },
}));

interface TutorialProps {
  type: "discord" | "line";
}

export const Tutorial: React.FC<TutorialProps> = ({ type }) => {
  const classes = useStyles();
  return (
    <div className={classes.tutorial}>
      <Typography variant="h5">
        <b>
          如何取得{" "}
          {type === "discord" ? "Discord webhook url" : "Line notify token"} ?
        </b>
      </Typography>

      {type === "discord" ? (
        // discord webhook tutorial

        <div>
          <Typography variant="h6" className={classes.step}>
            1. 點選 "文字頻道" 旁的 "編輯頻道" 按鈕
          </Typography>
          <img
            src="https://i.imgur.com/Owc3iPH.png"
            alt=""
            className={classes.image}
          />
          <Typography variant="h6" className={classes.step}>
            2. 進入 "整合" 頁面
          </Typography>
          <img
            src="https://i.imgur.com/lkhlYcB.png"
            alt=""
            className={classes.image}
          />
          <Typography variant="h6" className={classes.step}>
            ３. 選擇 "建立Webhook"
          </Typography>
          *如果已經有該頻道已經有Webhook，請選擇 "查看Webhook" -{"> "}
          "新Webhook"
          <img
            src="https://i.imgur.com/c7DHmRr.png"
            alt=""
            className={classes.image}
          />
          <Typography variant="h6" className={classes.step}>
            4. 點選 "複製Webhook網址"
          </Typography>
          <img
            src="https://i.imgur.com/1mKbwQL.png"
            alt=""
            className={classes.image}
          />
          <Typography variant="h6" className={classes.step}>
            5. 繼續完成上方的表格就大功告成了!
          </Typography>
          <br />
        </div>
      ) : (
        // line notify tutorial

        <div>
          <Typography variant="h6" className={classes.step}>
            (這部分只能在電腦設定) <br />
          </Typography>
          <Typography variant="h6" className={classes.step}>
            1. 前往並登入
            <Link
              href="https://notify-bot.line.me/my/"
              rel="noreferrer"
              color="secondary"
            >
              Line Notify 設定頁面
            </Link>
          </Typography>
          *首次登入會需要在Line輸入驗證碼
          <img
            src="https://i.imgur.com/5Wl97MC.png"
            alt=""
            className={classes.image}
          />
          <Typography variant="h6" className={classes.step}>
            2. 點選 "發行權杖"
          </Typography>
          <img
            src="https://i.imgur.com/CRRgOEL.png"
            alt=""
            className={classes.image}
          />
          <Typography variant="h6" className={classes.step}>
            3. 完成設定後點選 "發行"
          </Typography>
          <Typography>
            *權杖名稱建議填寫 <b>CLHS-nowotify</b>，方便日後辨識
          </Typography>
          <Typography component="p">
            <br />
            可以選擇 "透過1對1聊天接收LINE Notify的通知"
            <br />
            直接從 "Line Notify的帳號" 接收通知
          </Typography>
          <img
            src="https://i.imgur.com/UmLRfyi.png"
            alt=""
            className={classes.image}
          />
          <Typography component="p">
            <br />
            或是選擇一個群組來接收通知
          </Typography>
          <img
            src="https://i.imgur.com/Ydw6fac.png"
            alt=""
            className={classes.image}
          />
          <Typography variant="h6" className={classes.step}>
            4. 點選複製
          </Typography>
          <img
            src="https://i.imgur.com/7GGhfjm.png"
            alt=""
            className={classes.image}
          />
          <Typography variant="h6" className={classes.step}>
            5.
          </Typography>
          <Typography component="p">
            如果是選擇 "透過1對1聊天接收LINE Notify的通知"
            <br /> 到這邊就完成設定了
            <br />
            <br /> 如果是選擇 "使用群組接收通知"
            <br />
            則需要依照指示將 "LINE Notify" 帳號加入群組
          </Typography>
          <img
            src="https://i.imgur.com/CDYEWJ5.png"
            alt=""
            className={classes.image}
          />
        </div>
      )}
    </div>
  );
};
