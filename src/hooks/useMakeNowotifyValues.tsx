import { useState } from "react";

export const useMakeNowotifyValues = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState<"discord" | "line">("discord");
  const [data, setData] = useState("");
  const [id, setId] = useState("");

  const setAllValues = (
    name: string,
    type: "discord" | "line",
    data: string,
    id: string
  ) => {
    setName(name);
    setType(type);
    setData(data);
    setId(id);
  };

  const clearAllValues = () => {
    setName("");
    setType("discord");
    setData("");
    setId("");
  };

  return { name, type, data, id, setAllValues, clearAllValues };
};
