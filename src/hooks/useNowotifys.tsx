import { useState, useEffect } from "react";
import { db } from "../App";

export type NowotifyType = {
  id: string;
  type: "discord" | "line";
  data: string;
  name: string;
  uid: string;
  only_pinned: boolean;
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
