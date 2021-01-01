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
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Navbar from "./Bars/Navbar";
import Sidebar from "./Bars/Sidebar";
import { useHistory } from "react-router-dom";

const CreatebranchScreen = () => {
  let history = useHistory();

  useEffect(() => {
    fetchbranches();
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

  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/");
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
          Logout={Logout}
          exit={exit}
        />

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
    </div>
  );
};

export default CreatebranchScreen;
