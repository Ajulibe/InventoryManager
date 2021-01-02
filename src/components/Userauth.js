import React, { useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  border-color: red;
`;

const Userauth = () => {
  useEffect(() => {}, []);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <MoonLoader css={override} size={100} color={"#F14B22"} loading={true} />
    </div>
  );
};

export default Userauth;
