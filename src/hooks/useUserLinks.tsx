import { useState, useEffect } from "react";
import { db } from "../App";

export type LinkType = {
  id: string;
  type: "discord" | "line";
  data: string;
  name: string;
  uid: string;
};

export const useUserLinks = (uid: string) => {
  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    return db
      .collection("links")
      .where("uid", "==", uid)
      .onSnapshot((docs) => {
        const tmp_links: LinkType[] = [];

        docs.forEach((doc) => {
          tmp_links.push({ ...(doc.data() as LinkType), id: doc.id });
        });

        setLinks(tmp_links);
      });
  }, []);

  return links;
};
