import { db } from "../App";
import { NowotifyType } from "../hooks/useNowotifys";

export const remove = (id: string) => {
  db.collection("links").doc(id).delete();
};

export const submit = (data: NowotifyType) => {
  const { id, ...data_except_id } = data;
  if (!id.length) {
    db.collection("links").add(data_except_id);
  } else {
    db.collection("links").doc(id).update(data_except_id);
  }
};
