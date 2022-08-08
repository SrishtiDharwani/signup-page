import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Background from "../assets/packaging-for-delivery.png";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="flex-container">
        <div className="display-img">
          <img
            style={{ height: "500px", width: "700px" }}
            src={Background}
            alt="background"
          />
        </div>

        <div className="head">
          <p style={{ fontSize: "80px",fontWeight:'600'}}>
            Start selling with
            <br />
            WISH. <br />Today.
          </p>
          <Link to="/signup">
            <button className="button">Sign up/ Login</button>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontWeight: "200px",
              fontSize: "20px",
              marginLeft: "5px",
            }}
          >
            <p style={{ whiteSpace: "pre" }}>Existing user? </p>
            <Link style={{ textDecoration: "none", color: "red" }} to="/registration">
              Login here!
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
