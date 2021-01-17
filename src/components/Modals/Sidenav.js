import React from "react";
import Modal from "react-bootstrap/Modal";
import all from "../../assets/all.png";
import { Link } from "react-router-dom";

const Sidenav = (props) => {
  return (
    <Modal
      size="sm"
      show={props.show}
      onHide={props.onHide}
      animation={true}
      className="sidedis"
    >
      <Modal.Body
        style={{
          fontSize: "0.8rem",
          border: "0.5px solid rgb(21,20,35, 0.5)",
          borderRadius: "1rem",
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center" style={{}}>
            <div
              className="col col-8 d-flex justify-content-center flex-column"
              style={{}}
            >
              <div className="col col-12 text-center mt-4">
                <Link to="overAdmin" className="linkTag">
                  <img src={all} alt="all" style={{ width: "1.5rem" }} />
                  <b>
                    <p style={{ color: "#151423" }}>All Inventory</p>
                  </b>
                </Link>
              </div>
              <div className="col col-12 text-center mt-2">
                <Link to="assignroles" className="linkTag">
                  <img
                    src={props.roles}
                    alt="roleswhite"
                    style={{ width: "1.5rem" }}
                  />
                  <b>
                    <p style={{ color: "#151423" }}>Assign Roles</p>
                  </b>
                </Link>
              </div>
              <div className="col col-12 text-center mt-2">
                <Link to="createbranch" className="linkTag">
                  <img
                    src={props.branches}
                    alt="branches"
                    style={{ width: "1.5rem" }}
                  />
                  <b>
                    <p style={{ color: "#151423" }}>Create Branches</p>
                  </b>
                </Link>
              </div>
              <div className="col col-12 text-center mt-2 mb-4">
                <Link onClick={props.onClick} className="linkTag">
                  <img
                    src={props.exit}
                    alt="exit"
                    style={{ width: "1.5rem" }}
                  />
                  <b>
                    <p style={{ color: "#151423" }}>Log Out</p>
                  </b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Sidenav;
