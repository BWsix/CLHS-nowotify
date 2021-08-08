# CLHS nowotify - server

使用 Discord / Line 及時接收壢中官網公告

**前往[設定頁面][clhs_nowotify]**  
**前往[CLHS nowotify - server][repo_server]**

## 目錄

- [運作原理](#theory)
- [特色](#features)
- [安裝教學](#tutorial)
- [特別感謝](#credit)

## 運作原理<a id="theory"></a>

CLHS nowotify 使用 python 伺服器監聽壢中官網  
在發現公告內容有更新時，使用 `discord webhook` / `line notify` 將最新公告推送給用戶

因為經費有限，伺服器只在每日早上 7 點到晚上 7 點運作 (歡迎贊助 👍)

### 架構圖

> ![](https://i.imgur.com/JJxBPTl.png)  
> **client** : react app deployed on Github pages  
> **server** : python server hosted on Heroku

## 特色<a id="features"></a>

### 快速、簡單的安裝

可以在[設定頁面][clhs_nowotify]依照教學登錄資訊(discord / line)後啟用

> 因為 line notify 只能從電腦版網站做設定，如果要使用 line 接收通知請記得使用電腦安裝

### 客製化設定

目前可以設定的項目有 :

- 公告的來源(首頁 / 新生專區)
- 只接收釘選公告(有紅色 `HOT!` 標籤的)
- 是否過濾特定公告(有關公務人員 / 標案等)

## 安裝教學<a id="tutorial"></a>

(安裝教學也可以在[設定頁面][clhs_nowotify]看到)

**因為 line notify 只能從電腦版網站做設定，如果要使用 line 接收通知請記得使用電腦安裝**

1. 前往並使用 google 帳號登入[CLHS nowotify 設定頁面][clhs_nowotify]

   ![](https://i.imgur.com/ALTdgas.png)

2. 點選 `新增 nowotify`

   ![](https://i.imgur.com/b2ZD4rL.png)

3. 填寫表格

   ![](https://i.imgur.com/ILDPqsf.png)

<details><summary>如何取得Discord webhook url</summary>

1. 點選 `文字頻道` 旁的 `編輯頻道` 按鈕

   ![](https://i.imgur.com/Owc3iPH.png)

2. 進入 `整合` 頁面

   ![](https://i.imgur.com/lkhlYcB.png)

3. 選擇 `建立 Webhook`  
   \*如果已經有該頻道已經有 Webhook，請選擇 `查看 Webhook` -> `新 Webhook`

   ![](https://i.imgur.com/c7DHmRr.png)

4. 點選 `複製 Webhook 網址`

   ![](https://i.imgur.com/1mKbwQL.png)

5. 繼續完成上方的表格就完成設定了!

</details>

<details><summary>如何取得Line notify token</summary>

1. 前往 Line Notify 設定頁面並登入 **(這部分只能在電腦設定)**  
   https://notify-bot.line.me/my/  
   \*首次登入會需要在 Line 輸入驗證碼

   ![](https://i.imgur.com/5Wl97MC.png)

2. 點選 `發行權杖`

   ![](https://i.imgur.com/CRRgOEL.png)

3. 完成設定後點選 `發行`  
   \*權杖名稱建議填寫 **CLHS-nowotify**，方便日後辨識

   - 可以選擇 "透過 1 對 1 聊天接收 LINE Notify 的通知"，直接從 "Line Notify 的帳號" 接收通知  
     ![](https://i.imgur.com/UmLRfyi.png)

   - 或是選擇一個群組來接收通知  
     ![](https://i.imgur.com/Ydw6fac.png)

4. 點選複製

   ![](https://i.imgur.com/7GGhfjm.png)

5. 最後一步

   - 如果是選擇 "透過 1 對 1 聊天接收 LINE Notify 的通知"，到這邊就完成設定了

   - 如果是選擇 "使用群組接收通知"，則需要依照指示將 "LINE Notify" 帳號加入群組
     ![](https://i.imgur.com/CDYEWJ5.png)

</details>

## 特別感謝<a id="credit"></a>

[@storiesbang][@storiesbang]: 系統測試和提供更新方向

以及所有 CLHS nowotify 的用戶，謝謝你們的支持

[clhs_nowotify]: https://bwsix.github.io/CLHS-nowotify/
[repo_server]: https://github.com/BWsix/CLHS-nowotify-server
[@storiesbang]: https://github.com/storiesbang
