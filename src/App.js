import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Contents from "./components/Contents";
import Chat from "./components/Chat";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqmECHWajIV_a_bHKdL9LhA8ZextUo3q0",
  authDomain: "my-chat-app-9b085.firebaseapp.com",
  projectId: "my-chat-app-9b085",
  storageBucket: "my-chat-app-9b085.appspot.com",
  messagingSenderId: "1010777727255",
  appId: "1:1010777727255:web:f8f2f4ea94594932c4d752",
  measurementId: "G-QN6PZGLZQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="contents-wrapper">
          <Routes>
            <Route path={`/`} element={<Chat />} />
            <Route path={`Mycontents`} element={<Contents />} />
          </Routes>
        </div>
        <StyledEngineProvider injectFirst></StyledEngineProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
