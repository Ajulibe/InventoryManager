import React, { useState, useContext, useEffect } from "react";
import all from "../assets/all.png";
import exit from "../assets/exit.png";
import roles from "../assets/roles.png";
import branches from "../assets/branches.png";
import brancheswhite from "../assets/brancheswhite.png";
import roleswhite from "../assets/roleswhite.png";
import success from "../assets/success.svg";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Navbar from "./Bars/Navbar";
import Sidebar from "./Bars/Sidebar";
import { useHistory } from "react-router-dom";
import authContext from "../context/authContext";
import Sidenav from "./Modals/Sidenav";

const CreatebranchScreen = () => {
  let history = useHistory();
  const { state, createUserRoles, logOut } = useContext(authContext);

  useEffect(() => {
    // if (state.isAuthenticated === false || !localStorage.getItem("token")) {
    //   history.push("/");
    // } else {
    fetchbranches();
    // }
  }, []);

  //   const { state, signup, clearErrorMessage } = useContext(authContext);
  const [companyName, setcompanyName] = useState("");
  const [Address, setAddress] = useState("");

  const [show, setshow] = useState(false);

  const [Returnedbranch, setReturnedbranch] = useState("");

  const handleClose = () => {
    setshow(false);
  };

  const handleOpen = () => {
    setshow(true);
  };

  //SIDEBAR MODAL
  const [side, setSide] = useState(false);
  const sideClose = () => setSide(false);
  const sideShow = () => setSide(true);

  //CREATE BRANCHES
  const createBranches = async () => {
    if (companyName === "" || Address === "") {
      alert("Complete all fields");
      return;
    }
    const token = await localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://12.96.91.34.bc.googleusercontent.com/api/branches",
        {
          inventory: "introtech",
          id: Math.random().toString(36).slice(2),
          name: companyName,
          address: Address,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data.message);
      if (response.data.message === "success") {
        handleOpen();
        fetchbranches();
      }
    } catch {
      alert("An error Occurred!!!");
    }
  };

  //FETCH BRANCHES
  const fetchbranches = async () => {
    const token = await localStorage.getItem("token");
    // console.log(token);
    try {
      const response = await axios.get(
        "http://12.96.91.34.bc.googleusercontent.com/api/branches/introtech",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const branchesPresent = response.data.map((branch) => {
        return (
          <tr key={branch._id}>
            <td>{branch.name}</td>
            <td>{branch.address}</td>
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
        );
      });

      setReturnedbranch(branchesPresent);
    } catch {}
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
          class="col col-10 col-md-11 marginadjust "
          style={{ marginLeft: "5rem" }}
        >
          <div className="row">
            <div
              className="col col-9 mr-auto ml-auto"
              style={{ marginTop: "2%", textAlign: "center", color: "#707070" }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                }}
              >
                <b>Create a new Branch</b>
              </p>
            </div>
          </div>
          <div className="col col-10 mx-auto">
            <div
              className="row d-flex justify-content-center"
              style={{
                border: "1px solid rgb(112,112,112,0.2)",
                backgroundColor: "rgba(112,112,112,0.1)",
                borderRadius: "1rem",
              }}
            >
              <div className="col col-7 mt-2 col-md-4 mb-2" style={{}}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Company Name"
                  style={{
                    border: "1px solid #E0E0E0",
                    fontSize: "0.7rem",
                  }}
                  id="companyName"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setcompanyName(e.target.value)}
                />
              </div>
              <div className="col col-7 mb-2 mt-4 mt-md-2 col-md-4" style={{}}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                  style={{
                    border: "1px solid #E0E0E0",
                    fontSize: "0.7rem",
                  }}
                  id="Address"
                  name="Address"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div
                className="col col-7 mb-2  mt-4 mt-md-2 col-md-4 d-flex align-items-center justify-content-center"
                style={{}}
              >
                <button
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#D94F00",
                    color: "white",
                    fontSize: "0.7rem",
                    borderRadius: "3px",
                  }}
                  onClick={createBranches}
                >
                  Create Branch
                </button>
              </div>
            </div>
          </div>

          {/* modal */}
          <Modal show={show} onHide={handleClose} animation={true} style={{}}>
            <Modal.Header
              closeButton
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                borderBottom: "none",
              }}
            ></Modal.Header>

            <Modal.Body style={{}}>
              <div className="row">
                <div className="col col-12 d-flex justify-content-center">
                  <img
                    className="successImg"
                    src={success}
                    alt="sucessfullycreated"
                    style={{ width: "8rem" }}
                  />
                </div>

                <div className="col col-12 d-flex justify-content-center mt-3">
                  <p>
                    <b>Congratulations</b>
                  </p>
                </div>
                <div className="col col-12 d-flex justify-content-center">
                  <p style={{ fontWeight: "200", fontSize: "0.8rem" }}>
                    {Address} Branch had been created successfully
                  </p>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          <div className="row ">
            <div
              className="col col-12 col-md-10 mr-auto ml-auto mt-5"
              style={
                {
                  // border: "1px solid red",
                }
              }
            >
              <div
                className="col col-12 table-responsive"
                style={{ height: "20vh", overflow: "scroll" }}
              >
                <table
                  class="table table-hover  table-bordered text-center"
                  style={{
                    fontSize: "0.8rem",
                    border: "1px solid rgb(229,229,229)",
                  }}
                >
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Add</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Returnedbranch}
                    <tr>
                      <td>Demo--Figure</td>
                      <td>----</td>
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
                          Add <span className="removethis">Inventory</span>
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

export default CreatebranchScreen;
