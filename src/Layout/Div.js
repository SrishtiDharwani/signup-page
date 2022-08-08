import React from "react";

const Div = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse",flex: "20%", }}>
      <div
        style={{
         
          height: "50px",
          width: "160px",
          position: "absolute",
          flex: "20%",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "white",
            height: "60px",
            width: "160px",
            marginLeft: "auto",
            zIndex: "2",
            padding: "10px 5px",
            margin: "20px 0",
            margin: "4px",
            position: "absolute",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Div;
