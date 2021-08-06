import { useState, useEffect } from "react";
import { db } from "../App";

export type NowotifyType = {
  id: string;
  type: "discord" | "line";
  data: string;
  name: string;
  uid: string;
  only_pinned: boolean;
  blocked_keyword_ids: number[];
  group: string[];
};

export const useNowotifys = (uid: string) => {
  const [nowotifys, setNowotify] = useState<NowotifyType[]>([]);
  const [isLoadingNowotifys, setIsLoading] = useState(true);

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
        setIsLoading(false);
      });
  }, []);

  return { nowotifys, isLoadingNowotifys };
};
