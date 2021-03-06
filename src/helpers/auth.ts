import firebase from "firebase/app";
import "firebase/auth";

import { auth } from "../App";

export const signIn = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithRedirect(provider);
};

export const signOut = async () => {
  await auth.signOut();
  window.location.reload();
};
