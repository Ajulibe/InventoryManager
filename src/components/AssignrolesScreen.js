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
import { useHistory } from "react-router-dom";
import Allrolesmodal from "./Allrolesmodal";
import trackerApi from "../api/tracker";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "./Bars/Navbar";
import Sidebar from "./Bars/Sidebar";
import Congrats from "./Modals/Congrats";
import { setNestedObjectValues } from "formik";
import Sidenav from "./Modals/Sidenav";

const AssignrolesScreen = () => {
  let history = useHistory();
  const { state, createUserRoles, logOut, closeModal } = useContext(
    authContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState("");
  const [show, setShow] = useState(false);

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

  const [roleError, setroleError] = useState(true);

  useEffect(() => {
    console.log(state);
    // if (state.isAuthenticated === false || !localStorage.getItem("token")) {
    //   history.push("/");
    // } else {
    //   localStorage.setItem("inventory", state.data.inventory);
    //   localStorage.setItem("modalState", state.data.showModal);
    // }
  }, [state]);

  //SIDEBAR MODAL
  const [side, setSide] = useState(false);
  const sideClose = () => setSide(false);
  const sideShow = () => setSide(true);

  const handleClose = () => setShow(false);

  const viewRoles = async () => {
    try {
      const response = await trackerApi.get("/accounts/user/introtech");
      console.log(response.data);
      const usersdetails = response.data.map((user) => {
        return (
          <tr key={user.createdAt} style={{ border: "1px solid #dee2e6" }}>
            <td style={{ fontSize: "0.8rem", border: "1px solid #dee2e6" }}>
              {user.email}
            </td>
            <td style={{ fontSize: "0.8rem", border: "1px solid #dee2e6" }}>
              {user.permissions.map((value) => {
                return <p>{value}</p>;
              })}
            </td>
          </tr>
        );
      });

      setUsers(usersdetails);
      setShow(true);
    } catch (err) {}
  };

  const createUser = async () => {
    if (email === "" || password === "") {
      window.alert("Email or Password is empty");
      return;
    }

    const name = "users";
    const redirectUri = "www.google.com";
    const inventory = await localStorage.getItem("inventory");
    if (!inventory) {
      history.push("/Signin");
    }

    if (superadmin === true) {
      const role = "SuperAdmin";
      const options = [
        { name: "createInventory", status: supercreate },
        { name: "deleteInventory", status: superdelete },
        { name: "updateInventory", status: superupdate },
        { name: "assignRoles", status: superassign },
        { name: "createBranches", status: supercreatebranch },
        { name: "deleteBranches", status: superdeletebranch },
      ];

      // to filter out the false state values
      const filterOut = () => {
        setroleError(false);
        const filteredArray = options.filter((option) => {
          return option.status === true;
        });
        // console.log(filteredArray);

        // to convert the filtered array to a filtered object
        // const initialValue = {};
        const fillteredObject = filteredArray.reduce((obj, item) => {
          return {
            ...obj,
            [item.name]: item,
          };
        }, {});

        console.log(Object.keys(fillteredObject));
        const permissions = Object.keys(fillteredObject);

        createUserRoles(
          email,
          password,
          name,
          role,
          inventory,
          permissions,
          redirectUri
        );
        setroleError(true);
      };

      filterOut();
    }
    // ADMIN

    if (admin === true) {
      const role = "admin";
      const options = [
        { name: "createInventory", status: createAd },
        { name: "deleteInventory", status: deleteAd },
        { name: "updateInventory", status: updateAd },
        { name: "assignRoles", status: assignAd },
        { name: "createBranches", status: createbranchAd },
        { name: "deleteBranches", status: deletebranchAd },
      ];

      const filterOut = () => {
        setroleError(false);
        const filteredArray = options.filter((option) => {
          return option.status === true;
        });

        const fillteredObject = filteredArray.reduce((obj, item) => {
          return {
            ...obj,
            [item.name]: item,
          };
        }, {});

        console.log(Object.keys(fillteredObject));
        const permissions = Object.keys(fillteredObject);
        createUserRoles(
          email,
          password,
          name,
          role,
          inventory,
          permissions,
          redirectUri
        );
        setroleError(true);
      };

      filterOut();
    }

    //TELLER
    if (teller === true) {
      const role = "teller";
      const options = [
        { name: "createInventory", status: createteller },
        { name: "deleteInventory", status: deleteteller },
        { name: "updateInventory", status: updateteller },
      ];

      const filterOut = () => {
        setroleError(false);
        const filteredArray = options.filter((option) => {
          return option.status === true;
        });

        const fillteredObject = filteredArray.reduce((obj, item) => {
          return {
            ...obj,
            [item.name]: item,
          };
        }, {});

        console.log(Object.keys(fillteredObject));
        const permissions = Object.keys(fillteredObject);
        createUserRoles(
          email,
          password,
          name,
          role,
          inventory,
          permissions,
          redirectUri
        );
      };
      setroleError(true);

      filterOut();
    }
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

  const showModalClose = () => {
    closeModal();
  };

  return (
    <div
      class="container-fluid"
      style={{
        position: "relative",
      }}
    >
      <Navbar />
      <div class="row">
        <Sidebar
          all={all}
          roleswhite={roleswhite}
          brancheswhite={brancheswhite}
          Logout={logOut}
          exit={exit}
        />

        <div
          className="col col-10 col-md-11 marginadjust2"
          style={{ marginLeft: "5rem" }}
        >
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col col-9 text-center"
              style={{
                marginTop: "2%",
                textAlign: "center",
                // color: "#707070",
                fontSize: "0.8rem",
              }}
            >
              <p>
                <b>Assign Roles to Team members</b>
              </p>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col col-12" style={{}}>
              <div className="row d-flex justify-content-center mt-3">
                <div className="col col-12 col-md-6  mb-3 mb-md-0 " style={{}}>
                  <div className="row">
                    <div className="col col-6 text-center">
                      {" "}
                      <input
                        class="form-control form-control-sm"
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
                        }}
                      />
                    </div>
                    <div className="col col-6 text-center">
                      <input
                        class="form-control form-control-sm"
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
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col col-7 col-md-3 text-center mt-4 mt-md-0"
                  style={{}}
                >
                  <button
                    onClick={createUser}
                    className="btn btn-sm btn-block "
                    style={{
                      backgroundColor: "#D94F00",
                      color: "white",
                      fontSize: "0.7rem",
                    }}
                  >
                    Create Role
                  </button>
                </div>
                <div
                  className="col col-7 col-md-3 text-center mt-4 mt-md-0"
                  style={{}}
                >
                  <button
                    onClick={viewRoles}
                    className="btn btn-sm btn-block"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #D94F00",
                      color: "#D94F00",
                      fontSize: "0.7rem",
                    }}
                  >
                    All Roles
                  </button>
                </div>
              </div>
            </div>
          </div>

          {roleError && (
            <div className="row mt-4 d-flex justify-content-center ">
              <div className="col col-5 col-md-2  text-center">
                <p
                  className="roleasign roleasigndiv mb-2"
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    background: "rgb(255,31,79, 0.4)",
                    borderRadius: "0.7rem",
                  }}
                >
                  Roles must be Assigned
                </p>
              </div>
            </div>
          )}

          {/* CHECKBOXES */}
          <div className="row" style={{}}>
            <div className="col col-12" style={{}}>
              <div className="row d-flex justify-content-center">
                <div className="col col-12 col-md-8 mt-3 ">
                  <div
                    className="row "
                    style={{
                      border: "1px solid rgb(112,112,112,0.2)",
                      backgroundColor: "rgba(112,112,112,0.1)",
                      borderRadius: "1rem",
                    }}
                  >
                    <div className="col col-4 pt-3 text-center d-flex justify-content-center">
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
                          <span
                            className="under"
                            style={{ color: "#707070", fontSize: "0.7rem" }}
                          >
                            Super Admin
                          </span>

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
                    <div className="col col-4 pt-3 text-center d-flex justify-content-center">
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
                          <span
                            className="under"
                            style={{ color: "#707070", fontSize: "0.7rem" }}
                          >
                            Admin
                          </span>

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
                            <div class="form-check d-none ">
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
                            <div class="form-check d-none ">
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
                    <div className="col col-4 pt-3 text-center d-flex justify-content-center">
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
                          <span
                            className="under"
                            style={{ color: "#707070", fontSize: "0.7rem" }}
                          >
                            Teller
                          </span>

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
              </div>
            </div>
          </div>
          <Congrats
            success={success}
            email={email}
            showModalClose={showModalClose}
            modalState={state.showModal}
          />
        </div>
      </div>
      <button
        // onClick={refreshToken}
        onClick={sideShow}
        className="btn rounded-circle menuBtn"
        type="button"
        style={{
          border: "1px solid #151423",
          position: "absolute",
          right: "2.2rem",
          bottom: "-8rem",
          height: "3rem",
          width: "3rem",
          backgroundColor: "#151423",
          color: "white",
          fontSize: "0.8rem",
        }}
      >
        &#5730;
      </button>
      {/* MODALS */}
      <Allrolesmodal users={users} show={show} handleClose={handleClose} />
      <Sidenav
        show={side}
        onHide={sideClose}
        roles={roles}
        branches={branches}
        onClick={logOut}
        exit={exit}
      />
    </div>
  );
};

export default AssignrolesScreen;
