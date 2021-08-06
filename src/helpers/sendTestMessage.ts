export const sendTestMessage = (type: "discord" | "line", data: string) => {
  if (type === "discord") {
    const content = {
      embeds: [
        {
          title: "測試訊息",
          description: "感謝你使用CLHS nowotify :)",
          url: "https://github.com/BWsix/CLHS-nowotify",
          color: 14177041,
          author: {
            name: "CLHS nowotify",
          },
        },
      ],
    };

    fetch(data, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    });
  }
};
