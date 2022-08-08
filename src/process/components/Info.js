import React from "react";
import Div from "../../Layout/Div";

const Info = ({ sellerData, setSellerData }) => {
  return (
    <div className="details-container">
      <div>
        <p>Store name</p>
        <input
          type="text"
          placeholder="Name of your store"
          required
          value={sellerData.storeName}
          onChange={(event) =>
            setSellerData({ ...sellerData, storeName: event.target.value })
          }
        />
        <p>Select a category to sell in</p>
        <select
          id="category"
          value={sellerData.category}
          onChange={(event) =>
            setSellerData({ ...sellerData, category: event.target.value })
          }
        >
          <option
            value="none"
            selected
            disabled
            hidden
            style={{ color: "gray" }}
          >
            Select a category
          </option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          <option value="category4">Category 4</option>
          <option value="category5">Category 5</option>
        </select>
        <p>Your address</p>
        <textarea
          rows="4"
          cols="35"
          placeholder="Address"
          required
          wrap="soft"
          value={sellerData.address}
          onChange={(event) =>
            setSellerData({ ...sellerData, address: event.target.value })
          }
          style={{ resize: "none", fontSize: "15px" }}
        ></textarea>
        {(sellerData.storeName.length === 0 ||
          sellerData.category.length === 0 ||
          sellerData.address.length === 0) && <Div />}
      </div>
    </div>
  );
};

export default Info;
