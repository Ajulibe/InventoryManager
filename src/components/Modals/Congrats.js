import React from "react";
import Modal from "react-bootstrap/Modal";

const Congrats = (props) => {
  return (
    <Modal
      show={props.modalState}
      onHide={props.showModalClose}
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
        <div className="row d-flex justify-content-center">
          <div className="col col-10 text-center">
            <img
              className="successImg"
              src={props.success}
              alt="sucessfullycreated"
              style={{ width: "8rem" }}
            />
            <br />
            <br />

            <p>
              <b style={{ fontSize: "0.8rem" }}>Congratulations</b>
            </p>
            <p
              style={{
                fontWeight: "200",
                fontSize: "0.7rem",
              }}
            >
              A confirmation email has been sent to &nbsp;{" "}
              <b style={{ color: "#D94F00", fontSize: "0.8rem" }}>
                {" "}
                {props.email}
              </b>{" "}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Congrats;
