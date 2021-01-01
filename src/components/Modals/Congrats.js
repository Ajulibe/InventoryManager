import React from "react";
import Modal from "react-bootstrap/Modal";

const Congrats = (props) => {
  return (
    <Modal
      //   show={true}
      //   onHide={props.seeallhandleClose}
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
              <b>Congratulations</b>
            </p>
            <p style={{ fontWeight: "200", fontSize: "0.8rem" }}>
              {props.email} is now a Super Admin
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Congrats;
