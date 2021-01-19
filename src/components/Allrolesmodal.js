import React from "react";
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

const Allrolesmodal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} animation={true}>
      <Modal.Header closeButton style={{}}>
        <Modal.Title
          style={{
            fontSize: "1rem",
            textAlign: "center",
            margin: "auto",
          }}
        ></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "0.8rem",
          }}
        >
          <b>ASSIGNED ROLES</b>
        </p>
        <div class="table-responsive">
          <table
            className="table table-bordered"
            style={{ fontSize: "0.8rem", textAlign: "center" }}
          >
            <thead style={{ border: "1px solid #dee2e6" }}>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Permissions</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "0.7rem", border: "1px solid #dee2e6" }}>
              {props.users}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={props.handleClose}
          type="button"
          class="btn"
          style={{
            backgroundColor: "#D94F00",
            color: "white",
            fontSize: "0.7rem",
            // borderRadius: "0px",
          }}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Allrolesmodal;
