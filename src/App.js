import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/Authentication/SignIn";
import ForgotPass from "./components/Authentication/ForgotPass";
import SignUp from "./components/Authentication/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      {/* <Main/> */}
    </div>
  );
}

export default App;
