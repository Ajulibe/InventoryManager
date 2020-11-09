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

const AssignrolesScreen = () => {
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
                  <div
                    className="mt-4"
                    style={{
                      borderLeft: "2px solid #006CF1",
                      marginLeft: "-0.9rem",
                      paddingLeft: "0.6rem",
                    }}
                  >
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
                <b>Assign Roles to Team members</b>
              </p>
            </div>
            <div
              className="col col-9 mr-auto ml-auto d-flex justify-content-between"
              style={{ marginTop: "2%", textAlign: "center" }}
            >
              {/* <div className="row"></div> */}
              {/* SUPERRRR */}
              <div className="col col-3">
                <input
                  type="text"
                  placeholder="Jane John"
                  style={{
                    border: "1px solid #E0E0E0",
                    fontSize: "0.7rem",
                    width: "13rem",
                    padding: "0.2rem",
                  }}
                ></input>
                <div className="row mt-4">
                  <div className="col col-12">
                    <div
                      class="form-check text-left"
                      style={{ position: "relative" }}
                    >
                      <label
                        class="form-check-label"
                        for="checkbox1"
                        style={{ fontSize: "0.8rem", textAlign: "left" }}
                      >
                        <input
                          class="form-check-input superadmin"
                          type="checkbox"
                          name="exampleRadios"
                          id="checkbox1"
                          value="option1"
                        ></input>
                        <span className="under">Super Admin</span>

                        <br />
                        <br />
                        <div
                          class="addguy"
                          style={{
                            width: "13rem",
                            padding: "0.7rem",
                            // border: "1px solid red",
                            position: "absolute",
                            borderRadius: "3px",
                            left: "-0.7rem",
                            boxShadow: "0 0 1rem rgb(0,0,0,0.1)",
                          }}
                        >
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.9rem",
                              }}
                            >
                              Select All
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Create Inventory
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Delete Inventory
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Update Inventory
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Assign Roles
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Create Branches
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Delete Branches
                            </label>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* ADDDMMMIIINNNN */}
              <div className="col col-3">
                {" "}
                <input
                  type="text"
                  placeholder="************"
                  style={{
                    border: "1px solid #E0E0E0",
                    fontSize: "0.7rem",
                    width: "13rem",
                    padding: "0.2rem",
                  }}
                ></input>
                <div className="row mt-4">
                  <div className="col col-12">
                    <div
                      class="form-check text-left"
                      style={{ position: "relative" }}
                    >
                      <label
                        class="form-check-label"
                        for="checkbox1"
                        style={{ fontSize: "0.8rem", textAlign: "left" }}
                      >
                        <input
                          class="form-check-input superadmin"
                          type="checkbox"
                          name="exampleRadios"
                          id="checkbox1"
                          value="option1"
                        ></input>
                        <span className="under">Admin</span>

                        <br />
                        <br />
                        <div
                          class="addguy"
                          style={{
                            width: "13rem",
                            padding: "0.7rem",
                            // border: "1px solid red",
                            position: "absolute",
                            borderRadius: "3px",
                            left: "-0.7rem",
                            boxShadow: "0 0 1rem rgb(0,0,0,0.1)",
                          }}
                        >
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.9rem",
                              }}
                            >
                              Select All
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Create Inventory
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Delete Inventory
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Update Inventory
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Assign Roles
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Create Branches
                            </label>
                          </div>
                          <br />
                          <div class="form-check ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                              style={{
                                fontSize: "0.7rem",
                              }}
                            >
                              Delete Branches
                            </label>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-6 d-flex" style={{ textAlign: "center" }}>
                <div className="row" style={{ width: "100%" }}>
                  <div className="col col-6" style={{ position: "relative" }}>
                    <button
                      className="btn btn-sm btn-block "
                      style={{
                        backgroundColor: "#D94F00",
                        color: "white",
                        fontSize: "0.7rem",
                        borderRadius: "3px",
                      }}
                    >
                      Create Role
                    </button>
                    {/* checkbox */}
                    <div className="row mt-4">
                      <div
                        className="col col-12"
                        style={{ position: "absolute", left: "2rem" }}
                      >
                        <div
                          class="form-check text-left"
                          style={{ position: "relative" }}
                        >
                          <label
                            class="form-check-label"
                            for="checkbox1"
                            style={{ fontSize: "0.8rem", textAlign: "left" }}
                          >
                            <input
                              class="form-check-input superadmin"
                              type="checkbox"
                              name="exampleRadios"
                              id="checkbox1"
                              value="option1"
                            ></input>
                            <span className="under">Teller</span>

                            <br />
                            <br />
                            <div
                              class="addguy"
                              style={{
                                width: "13rem",
                                padding: "0.7rem",

                                position: "absolute",
                                borderRadius: "3px",
                                left: "-0.7rem",
                                boxShadow: "0 0 1rem rgb(0,0,0,0.1)",
                              }}
                            >
                              <div class="form-check ">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="inlineCheckbox1"
                                  style={{
                                    fontSize: "0.9rem",
                                  }}
                                >
                                  Select All
                                </label>
                              </div>
                              <br />
                              <div class="form-check ">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="inlineCheckbox1"
                                  style={{
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  Create Inventory
                                </label>
                              </div>
                              <br />
                              <div class="form-check ">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="inlineCheckbox1"
                                  style={{
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  Delete Inventory
                                </label>
                              </div>
                              <br />
                              <div class="form-check ">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="inlineCheckbox1"
                                  style={{
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  Update Inventory
                                </label>
                              </div>
                              <br />
                              <div class="form-check ">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="inlineCheckbox1"
                                  style={{
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  Assign Roles
                                </label>
                              </div>
                              <br />
                              <div class="form-check ">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="inlineCheckbox1"
                                  style={{
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  Create Branches
                                </label>
                              </div>
                              <br />
                              <div class="form-check ">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="inlineCheckbox1"
                                  style={{
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  Delete Branches
                                </label>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-6">
                    <button
                      className="btn btn-sm btn-block"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #D94F00",
                        color: "#D94F00",
                        fontSize: "0.7rem",
                        borderRadius: "3px",
                      }}
                    >
                      All Roles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignrolesScreen;
