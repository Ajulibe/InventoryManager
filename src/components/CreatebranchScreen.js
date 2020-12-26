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
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const CreatebranchScreen = () => {
  //   const { state, signup, clearErrorMessage } = useContext(authContext);
  const [companyName, setcompanyName] = useState("");
  const [Address, setAddress] = useState("");

  const [show, setshow] = useState(false);

  const handleClose = () => {
    setshow(false);
  };

  const handleOpen = () => {
    setshow(true);
  };

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
      }
    } catch {
      alert("An error Occurred!!!");
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
                id="companyName"
                name="companyName"
                value={companyName}
                onChange={(e) => setcompanyName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                style={{
                  border: "1px solid #E0E0E0",
                  fontSize: "0.7rem",
                  width: "13rem",
                  paddingLeft: "0.5rem",
                }}
                id="Address"
                name="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
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

              {/* modal */}
              <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                style={{}}
              >
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
