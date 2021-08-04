import React from "react";
import { FormAction } from "../hooks/useHandleForm";

type FormContextType = {
  setToggleMakeNowotify: React.Dispatch<React.SetStateAction<boolean>>;
  formDispatch: React.Dispatch<FormAction>;
};

export const FormContext = React.createContext({} as FormContextType);
