import { useReducer, useContext } from "react";
import { UserContext } from "../App";
import { NowotifyType } from "./useNowotifys";

export type FormAction =
  | { type: "init" }
  | { type: "update"; data: NowotifyType };

const reducer = (state: NowotifyType, action: FormAction): NowotifyType => {
  const initState: NowotifyType = {
    ...state,
    id: "",
    type: "discord",
    data: "",
    name: "",
    only_pinned: false,
    blocked_keyword_ids: [0, 1],
    group: ["main"],
  };

  switch (action.type) {
    case "init":
      return initState;

    case "update":
      return {
        ...state,
        ...action.data,
      };

    default:
      return initState;
  }
};

export const useHandleForm = () => {
  const user = useContext(UserContext);

  const [formState, formDispatch] = useReducer(reducer, {
    id: "",
    type: "discord",
    data: "",
    name: "",
    uid: user.uid,
    only_pinned: false,
    blocked_keyword_ids: [0, 1],
    group: ["main"],
  });

  return { formState, formDispatch };
};
