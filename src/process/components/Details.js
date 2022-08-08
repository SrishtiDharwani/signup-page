import React from "react";
import PhoneInput from "react-phone-input-2";
import Div from "../../Layout/Div";
import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/material.css";
import "../../process/process.css";

const Details = ({ sellerData, setSellerData }) => {
  return (
    <div className="details-container">
      <h4 style={{textAlign:'left'}}>Welcome! Please complete the steps for merchant onboarding!</h4>
      <div>
        <p>Your name</p>
        <input
          type="text"
          placeholder="Name"
          required
          value={sellerData.name}
          onChange={(event) =>
            setSellerData({ ...sellerData, name: event.target.value })
          }
        />
        <p>Mobile number</p>
        <PhoneInput
          isValid={(value, country) => {
            if (value.match(/12345/)) {
              return "Invalid value: " + value + ", " + country.name;
            } else if (value.match(/1234/)) {
              return false;
            } else {
              return true;
            }
          }}
          country="in"
          disableDropdown="true"
          specialLabel=""
          required="true"
          value={sellerData.mobNo}
          onChange={(value, data, event, formattedValue) =>
            setSellerData({ ...sellerData, mobNo: event.target.value })
          }
        />
        <p>Your business email</p>
        <input
          type="text"
          placeholder="Business email (optional)"
          value={sellerData.bMail}
          onChange={(event) =>
            setSellerData({ ...sellerData, bMail: event.target.value })
          }
        />

        {(sellerData.name.length === 0 ||
          sellerData.mobNo.length < 10) && <Div />}
      </div>
    </div>
  );
};

export default Details;
