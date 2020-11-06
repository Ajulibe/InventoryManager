import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import empty from "../assets/empty.svg";
import all from "../assets/all.png";
import alldark from "../assets/alldark.png";
import exit from "../assets/exit.png";
import roles from "../assets/roles.png";
import branches from "../assets/branches.png";
import brancheswhite from "../assets/brancheswhite.png";
import roleswhite from "../assets/roleswhite.png";
import kadarko from "../assets/Kadarko.svg";

const SigninScreen = () => {
  //   const { state, signup, clearErrorMessage } = useContext(authContext);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  return (
    <div class="container-fluid">
      <div class="row">
        <div
          class="col col-12 d-flex justify-content-between align-items-center"
          style={{ background: "#151423", width: "100vw", height: "9vh" }}
        >
          <p
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

          <div
            class="input-group input-group-sm "
            style={{
              width: "11rem",
              marginRight: "11rem",
              position: "relative",
            }}
          >
            <i
              class="fa fa-search"
              style={{
                position: "absolute",
                zIndex: "1000",
                right: "6%",
                top: "20%",
                width: "1rem",
                color: "#C5D6EA",
              }}
            ></i>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search Inventory"
              style={{
                fontSize: "0.7rem",
                paddingTop: "0.6rem",
                paddingBottom: "0.6rem",
                backgroundColor: "#44434F",
                border: "none",
              }}
            ></input>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col col-md-1 slider"
          style={{
            height: "80vh",
            marginTop: "40px",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            position: "fixed",
          }}
        >
          {/* inside box */}
          <div
            class="row"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <div
              class="col col-md-10 text-center"
              style={{
                background: "#151423",
                height: "100%",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                fontSize: "0.6rem",
                color: "white",
                // border: "1px solid blue",
                paddingRight: "15px",
              }}
            >
              {/* first icons */}
              <div
                class="text-center d-flex align-content-between flex-column"
                style={{
                  //   border: "1px solid red",
                  height: "15rem",
                  marginTop: "1rem",
                }}
              >
                <Link className="linkTag">
                  <div className="mt-2 text-center">
                    <img
                      src={all}
                      alt="all"
                      class="image"
                      style={{ width: "1.5rem" }}
                    />
                    <p class="">All Inventory</p>
                  </div>
                </Link>

                <Link className="linkTag">
                  <div className="mt-4">
                    <img
                      src={roleswhite}
                      alt="roleswhite"
                      class="image"
                      style={{ width: "1.5rem" }}
                    />
                    <p>Assign Roles</p>
                  </div>
                </Link>

                <Link className="linkTag">
                  <div className="mt-4">
                    <img
                      src={brancheswhite}
                      alt="branches"
                      class="image"
                      style={{ width: "1.5rem" }}
                    />
                    <p style={{ textAlign: "center" }}>Create Branches</p>
                  </div>
                </Link>
              </div>

              {/* second set */}
              <div style={{ marginTop: "8rem" }}>
                <Link className="linkTag">
                  {" "}
                  <div>
                    <img
                      src={exit}
                      alt="exit"
                      class="image"
                      style={{ width: "1.5rem" }}
                    />
                    <p>Log Out</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="col col-md-11">
          <div className="row">
            <div className="col-6 mr-auto ml-auto" style={{ marginTop: "10%" }}>
              <div className="col-12 text-center">
                <img src={empty} alt="nodata" style={{ width: "10rem" }} />
              </div>

              <div className="col-12 text-center mt-4">
                <p>
                  <b>
                    <h5>You Have No Inventory</h5>
                  </b>
                </p>
                <br />
                <p style={{ fontWeight: "200", color: "#CBCED2" }}>
                  <Link>
                    <i class="fa fa-plus add" aria-hidden="true"></i>
                  </Link>{" "}
                  &nbsp; Click Here to create an Inventory
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div class="col col-md-11" style={{ marginLeft: "5rem" }}>
          <div className="row">
            <div
              className="col col-4 mr-auto ml-auto text-center mb-5"
              style={{
                marginTop: "0.5rem",
                height: "3rem",
                width: "3rem",
              }}
            >
              <img
                src={kadarko}
                alt="Comapany-Logo"
                style={{ height: "100%", marginBottom: "2%" }}
              />
              <p style={{ fontSize: "1rem" }}>
                <b>INVENTORY OF ALL BRANCHES</b>
              </p>
            </div>
            <div
              className="col col-10 mr-auto ml-auto"
              style={{
                backgroundColor: "#151423",
                height: "20vh",
                borderRadius: "13px",
                // position: "fixed",
                // mrginTop: "5rem",
              }}
            >
              <div className="col col-12 d-flex justify-content-between">
                <div
                  className="col col-3 mt-3"
                  style={{
                    // border: "1px solid red",
                    position: "relative",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: "300",
                    }}
                  >
                    Total items in Inventory
                  </p>
                  <p
                    style={{
                      color: "#198AEE",
                      fontSize: "1.2rem",
                      position: "absolute",
                      top: "60%",
                    }}
                  >
                    <b> 1,508 </b>

                    <span
                      style={{
                        color: "white",
                        fontSize: "0.7rem",
                        fontWeight: "300",
                      }}
                    >
                      items
                    </span>
                  </p>
                </div>
                <div
                  className="col col-2 mt-3 d-flex justify-content-center align-items-center"
                  style={{
                    border: "1px solid #198AEE",
                    backgroundColor: "white",
                    color: "#198AEE",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                  }}
                >
                  Get Summary
                </div>
              </div>
              <div
                className="col col-12 d-flex justify-content-between mt-4"
                style={{ position: "relative" }}
              >
                <div className="col col-2 d-flex">
                  <div
                    className=" col col-1"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div
                      className="rounded-circle"
                      style={{
                        height: "0.8rem",
                        width: "0.8rem",
                        top: "0.5rem",
                        position: "absolute",
                        backgroundColor: "#4CD964",
                      }}
                    ></div>
                  </div>
                  <div className="col col-11">
                    <p style={{ color: "#44434F", fontSize: "0.8rem" }}>
                      Laptops
                    </p>
                    <p
                      style={{
                        color: "#f14b22",
                        fontSize: "0.9rem",
                        position: "absolute",
                        top: "50%",
                      }}
                    >
                      <b>326</b>
                    </p>
                  </div>
                </div>
                <div className="col col-2">
                  <div
                    className=" col col-1"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div
                      className="rounded-circle"
                      style={{
                        height: "0.8rem",
                        width: "0.8rem",
                        top: "0.5rem",
                        position: "absolute",
                        backgroundColor: "#4CD964",
                      }}
                    ></div>
                  </div>
                  <div className="col col-11">
                    <p style={{ color: "#44434F", fontSize: "0.8rem" }}>
                      Mouse
                    </p>{" "}
                    <p
                      style={{
                        color: "#f14b22",
                        fontSize: "0.9rem",
                        position: "absolute",
                        top: "50%",
                      }}
                    >
                      <b>581</b>
                    </p>
                  </div>
                </div>
                <div className="col col-2">
                  <p style={{ color: "#44434F", fontSize: "0.8rem" }}>
                    Desktop
                  </p>
                  <p
                    style={{
                      color: "#f14b22",
                      fontSize: "0.9rem",
                      position: "absolute",
                      top: "50%",
                    }}
                  >
                    <b>129</b>
                  </p>
                </div>
                <div className="col col-2">
                  <p style={{ color: "#44434F", fontSize: "0.8rem" }}>
                    Keyboard
                  </p>
                  <p
                    style={{
                      color: "#f14b22",
                      fontSize: "0.9rem",
                      position: "absolute",
                      top: "50%",
                    }}
                  >
                    <b>403</b>
                  </p>
                </div>
                <div
                  className="col col-2 d-flex justify-content-between"
                  style={{ position: "relative" }}
                >
                  <div className="col col-6">
                    {" "}
                    <p style={{ color: "#44434F", fontSize: "0.8rem" }}>
                      Printers
                    </p>
                    <p
                      style={{
                        color: "#f14b22",
                        fontSize: "0.9rem",
                        position: "absolute",
                        top: "50%",
                      }}
                    >
                      <b>138</b>
                    </p>
                  </div>
                  <div className="col col-6 d-flex align-self-end">
                    <Link>
                      <p
                        style={{
                          fontSize: "0.6rem",
                          position: "absolute",
                          //   border: "1px solid red",
                          right: "3px",
                          top: "-1rem",
                        }}
                      >
                        <b>See All</b>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col col-9 mr-auto ml-auto"
              style={{
                marginTop: "1%",
                // border: "1px solid red",
              }}
            >
              <div className="col col-4 newEntry">
                <Link>
                  <p style={{ fontSize: "0.8rem" }}>
                    <i class="fa fa-plus add" aria-hidden="true"></i> &nbsp;{" "}
                    <b>Add New Entry</b>
                  </p>
                </Link>{" "}
              </div>
              <div className="col col-12 d-flex justify-content-between">
                <div className="col col-6 text-left">
                  <p style={{ fontSize: "0.8rem", fontWeight: "200" }}>
                    Recently added (25 items){" "}
                  </p>
                </div>
                <div className="col col-6 text-right">
                  <Link>
                    <p style={{ fontSize: "0.8rem", fontWeight: "200" }}>
                      View all Recent Items
                    </p>
                  </Link>
                </div>
              </div>
              <div
                className="col col-12 table-responsive"
                style={{ height: "40vh", overflow: "scroll" }}
              >
                <table
                  class="table table-hover table-bordered text-center"
                  style={{ fontSize: "0.8rem" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">Item ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Type</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>@fat</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninScreen;
