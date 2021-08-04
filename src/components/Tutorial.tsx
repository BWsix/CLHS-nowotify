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
            1. 前往 Line Notify 設定頁面並登入
            <br />
            <Link>https://notify-bot.line.me/my/</Link>
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
          *權杖名稱建議填寫 <b>CLHS-nowotify</b>，方便日後辨識
          <img
            src="https://i.imgur.com/3Gd1Eer.png"
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
            5. 繼續完成上方的表格後，依照指示將 "LINE Notify"
            帳號加入群組就完成設定了!
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
