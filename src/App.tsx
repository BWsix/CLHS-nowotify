import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Feature, Navbar } from "./components";

import { Container } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  });
}

export const db = firebase.firestore();
export const auth = firebase.auth();

export const UserContext = React.createContext<firebase.User>(
  {} as firebase.User
);

const App: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  if (error) return <>error</>;
  if (loading) return <>loading</>;

  const theme = createTheme({
    palette: { type: "dark" },
  });
  return (
    <ThemeProvider theme={theme}>
      {user ? (
        <UserContext.Provider value={user}>
          <Container maxWidth="lg">
            <Navbar />
            <Feature />
            <Main />
          </Container>
        </UserContext.Provider>
      ) : (
        <Login />
      )}
    </ThemeProvider>
  );
};

export default App;
