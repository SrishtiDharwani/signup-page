import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Layout/Home";
import Signup from "./process/components/Signup";
import SignupLogin from "./process/components/SignupLogin";
import Listing from "./process/Listing";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupLogin />} />
      <Route path="/registration" element={authCtx.isLoggedIn?<Signup />:<SignupLogin />} />
      <Route path="/listing" element={authCtx.isLoggedIn?<Listing />:<Home />} />
    </Routes>
  );
};

export default App;
