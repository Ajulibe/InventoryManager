import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import backdrop from "../assets/backdrop.png";
import TransOver from "../assets/TransOver.png";
import whiteOver from "../assets/whiteOver.png";

const SignupScreen = () => {
  //   const { state, signup, clearErrorMessage } = useContext(authContext);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  return (
    <div class="container-fluid">
      <div class="row">
        <div
          class="col col-md-6 col-12 "
          style={{
            background: `url(${backdrop})`,
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          <img
            src={TransOver}
            alt="overview"
            style={{
              width: "26%",
              height: "28%",
              marginLeft: "37%",
              marginTop: "10%",
            }}
          />
          <div className="row d-flex justify-content-center mt-5">
            <div className="col col-10 text-center" style={{ color: "white" }}>
              <p className="mt-5">
                <h5>
                  <b>Inventory Manager</b>
                </h5>
              </p>
              <div
                style={{
                  fontSize: "0.7rem",
                  marginTop: "10%",
                  fontWeight: "200",
                }}
              >
                <p>Real Time analytics of all you inventory</p>
                <p>Assign Roles to team members</p>
                <p>Create Branches</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col col-12 col-md-6"
          style={{ backgroundColor: "#FAF1EE", height: "100vh" }}
        >
          <div class="row ">
            <div
              class="col col-7"
              style={{
                backgroundColor: "#ffffff",
                height: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5%",
                borderRadius: "15px",
              }}
            >
              <img
                src={whiteOver}
                alt="overview"
                style={{
                  width: "22%",
                  height: "28%",
                  marginLeft: "37%",
                  marginTop: "3rem",
                  marginBottom: "4rem",
                  //   border: "1px solid black",
                }}
              />
              <form
                style={{
                  paddingLeft: "12%",
                  paddingRight: "12%",
                  paddingBottom: "10%",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                  }}
                >
                  Sign Up
                </p>
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="email"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Email address"
                    style={{
                      fontSize: "0.7rem",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                    }}
                  ></input>
                </div>
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Company Name"
                    style={{
                      fontSize: "0.7rem",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                    }}
                  ></input>
                </div>
                <div class="input-group input-group-sm mb-3 ">
                  <label
                    for="file-upload"
                    class="custom-file-upload"
                    style={{ position: "relative" }}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      class="form-control fileChoice"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Company Logo"
                      style={{
                        fontSize: "0.7rem",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                      }}
                    ></input>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#6D767E",
                        position: "absolute",
                        top: "0.25rem",
                        left: "0.5rem",
                      }}
                    >
                      Company Logo
                    </div>
                  </label>
                </div>

                <div
                  class="input-group input-group-sm mb-3 passwordGuy"
                  style={{ position: "relative" }}
                >
                  <input
                    type="password"
                    class="form-control passwordInput"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="************"
                    style={{
                      fontSize: "0.7rem",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                      borderRadius: "3px",
                    }}
                  ></input>
                  <div
                    className="passwordDiv"
                    style={{
                      position: "absolute",
                      top: "-20%",
                      left: "5%",
                      zIndex: "1000",
                      fontSize: "0.5rem",
                      color: "#1070CA",
                      backgroundColor: "white",
                      height: "0.8rem",
                      paddingLeft: "3px",
                      paddingRight: "3px",
                    }}
                  >
                    <p>
                      <b>Password</b>
                    </p>
                  </div>
                </div>

                {/* button */}
                <br />
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block"
                    style={{
                      fontSize: "0.7rem",
                      paddingTop: "0.4rem",
                      paddingBottom: "0.4rem",
                      borderRadius: "3px",
                      backgroundColor: "#1070CA",
                    }}
                  >
                    Sign Up
                  </button>
                </div>
                <br />
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "200",
                  }}
                >
                  Already have an account?{" "}
                  <Link to="/Signin">
                    {" "}
                    <b
                      style={{
                        fontWeight: "600",
                        color: "#1070CA",
                      }}
                    >
                      Sign In
                    </b>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
