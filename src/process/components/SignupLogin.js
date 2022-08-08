import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import AuthContext from "../../store/auth-context";
import "../../process/process.css";

const Basic = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const key = process.env.REACT_APP_FIREBASE_API;
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        console.log("reg");
        navigate("/registration", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="form">
        <div className="progressbar"></div>
        <div className="form-container">
          <div style={{display:'grid',placeItems:'center',paddingBottom:'60px'}}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          </div>
          <form onSubmit={submitHandler}>
            <div className="body">
              <div className="details-container">
                <div>
                  <p>Email</p>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={emailInputRef}
                  />

                  <p>Password</p>
                  <input
                    type="password"
                    placeholder="6-digit password (minimum)"
                    required
                    ref={passwordInputRef}
                  />
                </div>
              </div>
              <div className="bottom">
                {!isLoading && (
                  <button className="button-control" type="submit">
                    {isLogin ? "Login" : "Create Account"}
                  </button>
                )}
                {isLoading && <p>Sending request...</p>}
                <button
                  className="toggle"
                  type="button"
                  onClick={switchAuthModeHandler}
                >
                  {isLogin
                    ? "Create new account"
                    : "Login with existing account"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Basic;
