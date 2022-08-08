import React, { useContext } from "react";
import Header from "../Layout/Header";
import AuthContext from "../store/auth-context";

const Listing = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} />
      <div style={{textAlign:'center'}}>
        <h2>Page for listing products</h2>
      </div>
    </React.Fragment>
  );
};

export default Listing;
