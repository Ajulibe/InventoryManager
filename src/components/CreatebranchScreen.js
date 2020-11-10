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
import success from "../assets/success.svg";

const CreatebranchScreen = () => {
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
                <Link to="overview" className="linkTag">
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

                <Link to="assignroles" className="linkTag">
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

                <Link to="createbranch" className="linkTag">
                  <div
                    className="mt-4"
                    style={{
                      borderLeft: "2px solid #006CF1",
                      marginLeft: "-0.9rem",
                      paddingLeft: "0.6rem",
                    }}
                  >
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
                <Link to="/Signin" className="linkTag">
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

        <div class="col col-md-11" style={{ marginLeft: "5rem" }}>
          <div className="row">
            <div
              className="col col-9 mr-auto ml-auto"
              style={{ marginTop: "2%", textAlign: "center", color: "#707070" }}
            >
              <p>
                <b>Create a new Branch</b>
              </p>
            </div>
            <div
              className="col col-6 mr-auto ml-auto d-flex justify-content-between"
              style={{ marginTop: "2%", textAlign: "center" }}
            >
              <input
                type="text"
                placeholder="Company Name"
                style={{
                  border: "1px solid #E0E0E0",
                  fontSize: "0.7rem",
                  width: "13rem",
                  paddingLeft: "0.5rem",
                }}
              ></input>
              <input
                type="text"
                placeholder="Address"
                style={{
                  border: "1px solid #E0E0E0",
                  fontSize: "0.7rem",
                  width: "13rem",
                  paddingLeft: "0.5rem",
                }}
              ></input>
              <button
                data-toggle="modal"
                data-target="#exampleModalCenter"
                className="btn btn-sm"
                style={{
                  backgroundColor: "#D94F00",
                  color: "white",
                  fontSize: "0.7rem",
                  borderRadius: "3px",
                }}
              >
                Create Branch
              </button>
              {/* modal */}
              <div
                class="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div
                    class="modal-content"
                    style={{
                      position: "relative",
                      borderRadius: "2rem",
                      paddingTop: "3rem",
                    }}
                  >
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        border: "1px solid black",
                        padding: "0.3rem",
                        borderRadius: "15px",
                      }}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body">
                      <img
                        className="successImg"
                        src={success}
                        alt="sucessfullycreated"
                        style={{ width: "8rem" }}
                      />
                      <br />
                      <br />

                      <p>
                        <b>Congratulations</b>
                      </p>
                      <p style={{ fontWeight: "200", fontSize: "0.8rem" }}>
                        Adeola Odeku Branch had been created successfully
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col col-9 mr-auto ml-auto"
              style={{
                marginTop: "4%",
                // border: "1px solid red",
              }}
            >
              <div
                className="col col-12 table-responsive"
                style={{ height: "60vh", overflow: "scroll" }}
              >
                <table
                  class="table table-hover table-striped table-bordered text-center"
                  style={{ fontSize: "0.8rem" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Add</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Hubmart</td>
                      <td>Lekki</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-sm"
                          style={{
                            backgroundColor: "#D94F00",
                            color: "white",
                            fontSize: "0.7rem",
                            borderRadius: "3px",
                          }}
                        >
                          Add Inventory
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Hubmart</td>
                      <td>Mary Land</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-sm"
                          style={{
                            backgroundColor: "#D94F00",
                            color: "white",
                            fontSize: "0.7rem",
                            borderRadius: "3px",
                          }}
                        >
                          Add Inventory
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Hubmart</td>
                      <td>Yaba</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-sm"
                          style={{
                            backgroundColor: "#D94F00",
                            color: "white",
                            fontSize: "0.7rem",
                            borderRadius: "3px",
                          }}
                        >
                          Add Inventory
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Hubmart</td>
                      <td>Adeola Odeku</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-sm"
                          style={{
                            backgroundColor: "#D94F00",
                            color: "white",
                            fontSize: "0.7rem",
                            borderRadius: "3px",
                          }}
                        >
                          Add Inventory
                        </button>
                      </td>
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

export default CreatebranchScreen;
