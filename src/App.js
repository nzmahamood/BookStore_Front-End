import React, { useEffect, useRef } from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/Authentication/SignIn";
import ForgotPass from "./components/Authentication/ForgotPass";
import SignUp from "./components/Authentication/SignUp";
import { useSelector } from "react-redux";
import SnackBar from "./components/snackbar/SnackBar";


function App() {
  const registrationStatus = useSelector(state => state.registration.success)
  
  

  
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
      {registrationStatus ? 
      <div className='flex flex-row justify-center items-center bottom-0'>
      <SnackBar message="Regisered Succesfully"/>
    </div>
       : null}
    </div>
  );
}

export default App;
