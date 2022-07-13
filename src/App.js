import logo from "./logo.svg";
import "./App.css";
import {
  GoogleOAuthProvider,
  GoogleLogin,
} from "@react-oauth/google";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GoogleOAuthProvider clientId="1000457012883-502d9cvgo8sacn3pgp6q6chdpl83rsm7.apps.googleusercontent.com">
      <div className="App">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            setIsLoggedIn(true);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        {isLoggedIn && (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
