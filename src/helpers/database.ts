import { db } from "../App";

export const remove = (id: string) => {
  db.collection("links").doc(id).delete();
};

export const submit = ({
  name,
  data,
  type,
  uid,
  id,
}: {
  name: string;
  type: "discord" | "line";
  data: string;
  uid: string;
  id: string;
}) => {
  if (!id.length) {
    db.collection("links").add({
      name,
      type,
      data,
      uid,
    });
  } else {
    db.collection("links").doc(id).update({
      name,
      type,
      data,
      uid,
    });
  }
};
