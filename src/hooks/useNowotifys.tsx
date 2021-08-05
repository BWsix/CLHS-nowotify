import { useState, useEffect } from "react";
import { db } from "../App";

//TODO store this info in a database or whatever place other than this...
export const KEYWORD_TABLE = [
  ["標案相關", "標售", "投標", "招標"],
  ["教師相關", "軍公教", "教育實習", "教師甄選", "公務人員", "報稅"],
];

export type NowotifyType = {
  id: string;
  type: "discord" | "line";
  data: string;
  name: string;
  uid: string;
  only_pinned: boolean;
  blocked_keyword_ids: number[];
};

export const useNowotifys = (uid: string) => {
  const [nowotify, setNowotify] = useState<NowotifyType[]>([]);

  useEffect(() => {
    return db
      .collection("links")
      .where("uid", "==", uid)
      .onSnapshot((docs) => {
        const tmp_links: NowotifyType[] = [];

        docs.forEach((doc) => {
          tmp_links.push({ ...(doc.data() as NowotifyType), id: doc.id });
        });

        setNowotify(tmp_links);
      });
  }, []);

  return nowotify;
};
