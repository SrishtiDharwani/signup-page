import React, { useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import Agreement from "./Agreement";
import Info from "./Info";
import TaxDetails from "./TaxDetails";
import Welcome from "./Welcome";
import Header from "../../Layout/Header";
import Listing from "../Listing";
import SignupImg from "../../assets/sign-up-form.png";

const Signup = () => {
  const [page, setPage] = useState(0);
  const [sellerData, setSellerData] = useState({
    step: 1,
    name: "",
    mobNo: "",
    bMail: "",
    businessName: "",
    check: false,
    storeName: "",
    category: "",
    address: "",
    gst: "",
    pan: "",
  });

  const Titles = [
    "Basic Information",
    "Welcome to SELL",
    "Seller Information",
    "Tax Details",
    "Welcome onboard!",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <Details sellerData={sellerData} setSellerData={setSellerData} />;
    } else if (page === 1) {
      return (
        <Agreement sellerData={sellerData} setSellerData={setSellerData} />
      );
    } else if (page === 2) {
      return <Info sellerData={sellerData} setSellerData={setSellerData} />;
    } else if (page === 3) {
      return (
        <TaxDetails sellerData={sellerData} setSellerData={setSellerData} />
      );
    } else {
      return <Welcome />;
    }
  };

  const listingHandler = () => {
    return <Listing />;
  };
  return (
    <React.Fragment>
      <Header />
      <div className="form">
        <div className="progressbar">
          <div
            style={{
              width:
                page === 0
                  ? "20%"
                  : page === 1
                  ? "40%"
                  : page === 2
                  ? "60%"
                  : page === 3
                  ? "80%"
                  : "100%",
            }}
          ></div>
        </div>
        <div className="form-container">
          <div className="headerr">
            <h1>{Titles[page]}</h1>
          </div>
          <div className="body">{pageDisplay()}</div>
          {page <= Titles.length - 2 ? (
            <div className="footer">
              <button
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              <button
                disabled={page === Titles.length - 1}
                onClick={() => {
                  if (page === Titles.length - 2) {
                    alert("Form Submitted!");
                    setPage((currPage) => currPage + 1);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === Titles.length - 2 ? "Submit" : "Next"}
              </button>
            </div>
          ) : (
            <div
              className="footer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={SignupImg}
                alt="signup"
                style={{ height: "285px", width: "285px" }}
              />
              <Link to='/listing'>
                <button onClick={listingHandler} style={{ fontSize: "20px" }}>
                  Start Listing
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
