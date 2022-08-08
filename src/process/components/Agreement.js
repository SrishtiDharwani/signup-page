import React, { useState } from "react";
import "../../process/process.css";
import Div from "../../Layout/Div";

const Agreement = ({ sellerData, setSellerData }) => {

  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    if (event.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  return (
    <React.Fragment>
      <h2>Register and start selling!</h2>

      <div className="details-container">
        <div className="agreement">
          <p>Name of your Business</p>
          <input
            type="text"
            required
            placeholder="Business name"
            value={sellerData.businessName}
            onChange={(event) =>
              setSellerData({ ...sellerData, businessName: event.target.value })
            }
          />

          <div className="agree">
            <p>Seller agreement</p>
            <p style={{ fontWeight: "normal" }}>
              <input
                id="terms"
                type="checkbox"
                required
                onChange={handleChange}
              />
              I have <b>read and agree</b> to comply and/or be bound by the
              <b> terms and conditions of SELL</b>.
            </p>
          </div>
          {(sellerData.businessName.length === 0 || !checked) &&<Div />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Agreement;
