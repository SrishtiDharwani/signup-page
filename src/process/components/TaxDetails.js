import React from "react";
import Div from "../../Layout/Div";

const TaxDetails = ({ sellerData, setSellerData }) => {
  return (
    <div className="details-container">
      <h2>
        Just a few more details before you are done!
      </h2>
      <div>
        <p>GST Number</p>
        <input
          type="text"
          placeholder="15-digit GST Number"
          required
          value={sellerData.gst}
          onChange={(event) =>
            setSellerData({ ...sellerData, gst: event.target.value })
          }
        />
        <p>PAN Number</p>
        <input
          type="email"
          placeholder="10-digit Pan Number"
          requiredvalue={sellerData.pan}
          onChange={(event) =>
            setSellerData({ ...sellerData, pan: event.target.value })
          }
        />
        {(sellerData.gst.length < 15 || sellerData.pan.length < 10) && <Div />}
      </div>
    </div>
  );
};

export default TaxDetails;
