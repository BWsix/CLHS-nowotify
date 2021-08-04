import { db } from "../App";

export const remove = (id: string) => {
  db.collection("links").doc(id).delete();
};

export const submit = ({
  name,
  data,
  type,
  only_pinned,
  uid,
  id,
}: {
  name: string;
  type: "discord" | "line";
  data: string;
  only_pinned: boolean;
  uid: string;
  id: string;
}) => {
  if (!id.length) {
    db.collection("links").add({
      name,
      type,
      data,
      only_pinned,
      uid,
    });
  } else {
    db.collection("links").doc(id).update({
      name,
      type,
      data,
      only_pinned,
      uid,
    });
  }
};
