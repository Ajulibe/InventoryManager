import React, { useEffect, useContext } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/core";
import authContext from "../context/authContext";

const override = css`
  display: block;
  border-color: red;
`;

const Userauth = () => {
  const { state } = useContext(authContext);
  console.log(state);
  useEffect(() => {}, []);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <MoonLoader css={override} size={40} color={"#F14B22"} loading={true} />
    </div>
  );
};

export default Userauth;
