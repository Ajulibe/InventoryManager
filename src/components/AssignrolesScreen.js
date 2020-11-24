import React, { useState, useContext, useEffect } from "react";
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
import authContext from "../context/authContext";

const AssignrolesScreen = () => {
  const { state, createUserRoles } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // SUPER ADMIN
  const [superadmin, setSuperadmin] = useState(false);
  const [superall, setSuperall] = useState(false);
  const [supercreate, setSupercreate] = useState(false);
  const [superdelete, setSuperdelete] = useState(false);
  const [superupdate, setSuperupdate] = useState(false);
  const [superassign, setSuperassign] = useState(false);
  const [supercreatebranch, setSupercreatebranch] = useState(false);
  const [superdeletebranch, setSuperdeletebranch] = useState(false);

  // ADMIN STATES
  const [admin, setAdmin] = useState(false);
  const [allAd, setAllad] = useState(false);
  const [createAd, setCreatead] = useState(false);
  const [deleteAd, setDeletead] = useState(false);
  const [updateAd, setUpdatead] = useState(false);
  const [assignAd, setAssignad] = useState(false);
  const [createbranchAd, setCreatebranchad] = useState(false);
  const [deletebranchAd, setDeletebranchad] = useState(false);

  // TELLER
  const [teller, setTeller] = useState(false);
  const [allteller, setAllteller] = useState(false);
  const [createteller, setCreateteller] = useState(false);
  const [deleteteller, setDeleteteller] = useState(false);
  const [updateteller, setUpdateteller] = useState(false);

  useEffect(() => {
    console.log(superadmin);
  });

  const createUser = () => {
    if (email === "" || password === "") {
      window.alert("Email or Password is empty");
      return;
    }

    // const name = "users";
    // const role = "custom";
    // const redirectUri = "/";

    // if (superadmin === true) {
    //   const options = {
    //     createInventory: true,
    //     deleteInventory: superdelete,
    //     updateInventory: superupdate,
    //     assignRoles: superassign,
    //     createBranches: supercreatebranch,
    //     deleteBranches: superdeletebranch,
    //   };

    //   function trueOptions(option) {
    //     return option === true;
    //   }
    //   const filterOut = () => {
    //     console.log(options.filter(trueOptions));
    //   };

    //   filterOut();
    //   const newArr = {};
    //   for (let key in options) {
    //     if (options.key === true) {
    //       console.log(options.key);
    //     }
    //   }
    // }

    // if (admin === true) {
    // }
    // if (teller === true) {
    // }

    // createUserRoles(email, password, name, role, redirectUri);
  };

  const SelectallSuper = () => {
    setSupercreate(!superall);
    setSuperdelete(!superall);
    setSuperupdate(!superall);
    setSuperassign(!superall);
    setSupercreatebranch(!superall);
    setSuperdeletebranch(!superall);
    setSuperall(!superall);
  };

  const Supercreatefn = () => {
    if (superall === true) {
      setSuperall(false);
      setSuperdelete(false);
      setSuperupdate(false);
      setSuperassign(false);
      setSupercreatebranch(false);
      setSuperdeletebranch(false);
      setSupercreate(true);
    } else {
      setSupercreate(!supercreate);
    }
  };

  const Superdeletefn = () => {
    if (superall === true) {
      setSuperall(false);
      setSuperupdate(false);
      setSuperassign(false);
      setSupercreatebranch(false);
      setSuperdeletebranch(false);
      setSupercreate(false);
      setSuperdelete(true);
    } else {
      setSuperdelete(!superdelete);
    }
  };

  const Superupdatefn = () => {
    if (superall === true) {
      setSuperall(false);
      setSuperassign(false);
      setSupercreatebranch(false);
      setSuperdeletebranch(false);
      setSupercreate(false);
      setSuperdelete(false);
      setSuperupdate(true);
    } else {
      setSuperupdate(!superupdate);
    }
  };

  const Superassignfn = () => {
    if (superall === true) {
      setSuperall(false);
      setSupercreatebranch(false);
      setSuperdeletebranch(false);
      setSupercreate(false);
      setSuperdelete(false);
      setSuperupdate(false);
      setSuperassign(true);
    } else {
      setSuperassign(!superassign);
    }
  };

  const Supercreatebranchfn = () => {
    if (superall === true) {
      setSuperall(false);
      setSuperdeletebranch(false);
      setSupercreate(false);
      setSuperdelete(false);
      setSuperupdate(false);
      setSuperassign(false);
      setSupercreatebranch(true);
    } else {
      setSupercreatebranch(!supercreatebranch);
    }
  };

  const Superdeletebranchfn = () => {
    if (superall === true) {
      setSuperall(false);
      setSupercreate(false);
      setSuperdelete(false);
      setSuperupdate(false);
      setSuperassign(false);
      setSupercreatebranch(false);
      setSuperdeletebranch(true);
    } else {
      setSuperdeletebranch(!superdeletebranch);
    }
  };

  // ADMIN FUNCTIONS
  const SelectallAd = () => {
    setCreatead(!allAd);
    setDeletead(!allAd);
    setUpdatead(!allAd);
    setAssignad(!allAd);
    setCreatebranchad(!allAd);
    setDeletebranchad(!allAd);
    setAllad(!allAd);
  };

  const createfnAd = () => {
    if (allAd === true) {
      setAllad(false);
      setDeletead(false);
      setUpdatead(false);
      setAssignad(false);
      setCreatebranchad(false);
      setDeletebranchad(false);
      setCreatead(true);
    } else {
      setCreatead(!createAd);
    }
  };

  const deletefnAd = () => {
    if (allAd === true) {
      setAllad(false);
      setCreatead(false);
      setUpdatead(false);
      setAssignad(false);
      setCreatebranchad(false);
      setDeletebranchad(false);
      setDeletead(true);
    } else {
      setDeletead(!deleteAd);
    }
  };

  const updatefnAd = () => {
    if (allAd === true) {
      setAllad(false);
      setCreatead(false);
      setAssignad(false);
      setCreatebranchad(false);
      setDeletebranchad(false);
      setDeletead(false);
      setUpdatead(true);
    } else {
      setUpdatead(!updateAd);
    }
  };

  const assignfnAd = () => {
    if (allAd === true) {
      setAllad(false);
      setCreatead(false);
      setCreatebranchad(false);
      setDeletebranchad(false);
      setDeletead(false);
      setUpdatead(false);
      setAssignad(true);
    } else {
      setAssignad(!assignAd);
    }
  };

  const createbranchfnAd = () => {
    if (allAd === true) {
      setAllad(false);
      setCreatead(false);
      setDeletebranchad(false);
      setDeletead(false);
      setUpdatead(false);
      setAssignad(false);
      setCreatebranchad(true);
    } else {
      setCreatebranchad(!createbranchAd);
    }
  };

  const deletebranchfnAd = () => {
    if (allAd === true) {
      setAllad(false);
      setCreatead(false);
      setDeletead(false);
      setUpdatead(false);
      setAssignad(false);
      setCreatebranchad(false);
      setDeletebranchad(true);
    } else {
      setDeletebranchad(!deletebranchAd);
    }
  };

  const Selectallteller = () => {
    setAllteller(!allteller);
    setDeleteteller(!allteller);
    setUpdateteller(!allteller);
    setCreateteller(!allteller);
  };

  const createtellerfn = () => {
    if (allteller === true) {
      setAllteller(false);
      setDeleteteller(false);
      setUpdateteller(false);
      setCreateteller(true);
    } else {
      setCreateteller(!createteller);
    }
  };

  const deletetellerfn = () => {
    if (allteller === true) {
      setAllteller(false);
      setCreateteller(false);
      setUpdateteller(false);
      setDeleteteller(true);
    } else {
      setDeleteteller(!deleteteller);
    }
  };
  const updatetellerfn = () => {
    if (allteller === true) {
      setAllteller(false);
      setCreateteller(false);
      setDeleteteller(false);
      setUpdateteller(true);
    } else {
      setUpdateteller(!updateteller);
    }
  };

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
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="JaneJohn@email.com"
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
                          value="superadmin"
                          onChange={(e) => {
                            setSuperadmin(!superadmin);
                            setTeller(false);
                            setAdmin(false);
                          }}
                          checked={superadmin}
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
                              value="superall"
                              onChange={SelectallSuper}
                              checked={superall}
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
                              value="supercreate"
                              onChange={Supercreatefn}
                              checked={supercreate}
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
                              value="superdelete"
                              onChange={Superdeletefn}
                              checked={superdelete}
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
                              value="superupdate"
                              onChange={Superupdatefn}
                              checked={superupdate}
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
                              value="superassign"
                              onChange={Superassignfn}
                              checked={superassign}
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
                              value="supecreatebranch"
                              onChange={Supercreatebranchfn}
                              checked={supercreatebranch}
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
                              value="superdeletebranch"
                              onChange={Superdeletebranchfn}
                              checked={superdeletebranch}
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
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
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
                          value="admin"
                          onChange={(e) => {
                            setAdmin(!admin);
                            setSuperadmin(false);
                            setTeller(false);
                          }}
                          checked={admin}
                        ></input>
                        <span className="under">Admin</span>

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
                              value="SelectAll"
                              onChange={SelectallAd}
                              checked={allAd}
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
                              value="createAd"
                              onChange={createfnAd}
                              checked={createAd}
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
                              value="deleteAd"
                              onChange={deletefnAd}
                              checked={deleteAd}
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
                              value="updateAd"
                              onChange={updatefnAd}
                              checked={updateAd}
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
                              value="assignAd"
                              onChange={assignfnAd}
                              checked={assignAd}
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
                              value="createbranchAd"
                              onChange={createbranchfnAd}
                              checked={createbranchAd}
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
                              value="deletebranchAd"
                              onChange={deletebranchfnAd}
                              checked={deletebranchAd}
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
                      onClick={createUser}
                      // data-toggle="modal"
                      // data-target="#exampleModalCenter"
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
                    {/* modal */}
                    <div
                      class="modal fade"
                      id="exampleModalCenter"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div
                          class="modal-content"
                          style={{
                            // border: "1px solid red",
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
                            <p
                              style={{ fontWeight: "200", fontSize: "0.8rem" }}
                            >
                              Jane John is now a Super Admin
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                              value="teller"
                              onChange={(e) => {
                                setTeller(!teller);
                                setSuperadmin(false);
                                setAdmin(false);
                              }}
                              checked={teller}
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
                                  value="tellerall"
                                  onChange={Selectallteller}
                                  checked={allteller}
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
                                  value="tellercreate"
                                  onChange={createtellerfn}
                                  checked={createteller}
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
                                  value="tellerdelete"
                                  onChange={deletetellerfn}
                                  checked={deleteteller}
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
                                  value="tellerupdate"
                                  onChange={updatetellerfn}
                                  checked={updateteller}
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
