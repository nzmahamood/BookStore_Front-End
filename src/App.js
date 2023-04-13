import React, { useEffect, useRef, useState } from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import SignIn from "./components/Authentication/SignIn";
import ForgotPass from "./components/Authentication/ForgotPass";
import SignUp from "./components/Authentication/SignUp";
import MuiSignUp from "./components/Authentication/MuiSignUp";
import MuiSignIn from "./components/Authentication/MuiSignIn";
import { useSelector } from "react-redux";
import SnackBar from "./components/snackbar/SnackBar";
import PrivateRoute from "./utils/PrivateRoute";
import Account from "./components/Authentication/Account";
import Home from "./components/Home";
import FooterMobile from "./components/navigation/FooterMobile";
import AllNavbars from "./components/navigation/AllNavbars"
import Search from "./components/Search/Search";
import NotFound from "./components/NotFound";
import CardBook from "./components/Home/CardBook";
import MainContainer from "./components/BookCard/MainContainer";
import BookDetail from "./components/BookCard/BookDetails/BookDetail";
import BookDetailView from "./components/BookCard/DetailComponents/BookDetailView";
import BookList from "./components/BookCard/BookHome/BookList";
import AllBookLists from "./components/BookCard/BookHome/AllBookLists";
import BasketContainer from "./components/Basket/BasketContainer";
import MuiSnackBar from "./components/snackbar/MuiSnackBar";
import Checkout from "./components/Checkout/Checkout";
import ListBooks from "./components/Home/ListBooks";


function App() {
  const registrationStatus = useSelector(state => state.registration.success)
  const snackbar = useSelector((state) => state.snack)
  
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const pathnames = ["/sign-in", "/sign-up", "/forgot-password", "/", "/user/sign-up", "/user/sign-in"];
    setShowNav(!pathnames.includes(location.pathname));
  }, [location.pathname]);

  
  return (
    <div className="App">
      
      
      {showNav && <AllNavbars />}
      <div className="min-h-[50vh] relative">
        <Routes>
        
        
          <Route path="/" element={<Main/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user/sign-up" element={<MuiSignUp />} />
          <Route path="/user/sign-in" element={ <MuiSignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/books/:category" element={<ListBooks />} />
          <Route path="/card" element={<CardBook />} />
          <Route path="/container" element={<AllBookLists />} />
          <Route path="/book-details/:id" element={<BookDetail />} />
          <Route path="/book-detail/:id" element={<BookDetailView />} />
          <Route path="/basket" element={<BasketContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
        {showNav &&<FooterMobile />}
      
      {registrationStatus ? 
      <div className='flex flex-row justify-center items-center bottom-0'>
      <SnackBar message="Regisered Succesfully"/>
      </div>
       : null}
      <MuiSnackBar open={snackbar.open} message={snackbar.message} severity={snackbar.severity} />
       
    </div>
    
  );
}

export default App;
