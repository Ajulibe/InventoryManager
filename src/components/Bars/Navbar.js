import React from "react";

const Navbar = () => {
  return (
    <div class="row">
      <div
        class="col col-12 d-flex justify-content-between align-items-center overvw"
        style={{
          background: "#151423",
          width: "100vw",
          height: "3rem",
          padding: "0",
        }}
      >
        <p
          className="overVw"
          style={{
            color: "white",
            fontSize: "1rem",
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        >
          <b>Overview</b>
          <sup>TM</sup>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
