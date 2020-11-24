import React, { useState, useContext, useEffect } from "react";
import authContext from "../context/authContext";
import backdrop from "../assets/backdrop.png";
import TransOver from "../assets/TransOver.png";
import whiteOver from "../assets/whiteOver.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SigninScreen = () => {
  let history = useHistory();
  const { state, signin } = useContext(authContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(state.authRedirect, state);

  useEffect(() => {
    if (state.isAuthenticated) {
      history.push("/overAdmin");
    }
  }, [state.isAuthenticated]);

  const visibleFn = () => {
    const blockAdmin = document.getElementById("blockAdmin");
    const blockRoot = document.getElementById("blockRoot");
    blockAdmin.classList.toggle("ownerLogin");
    blockRoot.classList.toggle("ownerLogin");
    console.log("clicked");
  };

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
          <div class="row " id="blockRoot">
            <div
              class="col col-7"
              style={{
                backgroundColor: "rgb(0,0,0,0.1)",
                height: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10%",
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
                onSubmit={(e) => {
                  e.preventDefault();
                  signin(username, password);
                }}
                style={{
                  paddingLeft: "12%",
                  paddingRight: "12%",
                  paddingBottom: "18%",
                }}
              >
                <p
                  style={{
                    fontWeight: "400",
                  }}
                >
                  <b style={{ color: "#FF580D" }}>ROOT USER</b>
                </p>
                {/* email */}
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="janejohn"
                    style={{
                      fontSize: "0.7rem",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                    }}
                  ></input>
                </div>
                {/* placeholder */}
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="************"
                    style={{
                      fontSize: "0.7rem",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
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
                    Sign In
                  </button>
                </div>
                <br />
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "200",
                  }}
                >
                  Not a Root User?{" "}
                  <Link>
                    {" "}
                    <b
                      style={{
                        fontWeight: "600",
                        color: "#1070CA",
                      }}
                      onClick={visibleFn}
                    >
                      IAM USER
                    </b>
                  </Link>
                </p>
              </form>
            </div>
          </div>

          {/* SECOND SIGN IN  */}
          <div class="row ownerLogin" id="blockAdmin">
            <div
              class="col col-7"
              style={{
                backgroundColor: "#ffffff",
                height: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10%",
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
                }}
              />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  signin(username, password);
                }}
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
                  <b style={{ color: "#FF580D" }}>IAM USER</b>
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "200",
                    color: "red",
                  }}
                >
                  Are you a Root User?{" "}
                  <Link>
                    {" "}
                    <b
                      style={{
                        fontWeight: "600",
                        color: "#1070CA",
                      }}
                      onClick={visibleFn}
                    >
                      SWITCH HERE
                    </b>
                  </Link>
                </p>

                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="janejohn"
                    style={{
                      fontSize: "0.7rem",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                    }}
                  ></input>
                </div>

                <div class="input-group input-group-sm mb-3">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="************"
                    style={{
                      fontSize: "0.7rem",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
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
                    Sign In
                  </button>
                </div>
                <br />
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "200",
                  }}
                >
                  Don't have an account?{" "}
                  <Link to="/Signup">
                    {" "}
                    <b
                      style={{
                        fontWeight: "600",
                        color: "#1070CA",
                      }}
                    >
                      Sign Up
                    </b>
                  </Link>
                </p>
              </form>
            </div>
          </div>

          {/* END */}
        </div>
      </div>
    </div>
  );
};

export default SigninScreen;
