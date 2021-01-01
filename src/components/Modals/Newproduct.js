import React from "react";
import Modal from "react-bootstrap/Modal";

const Newproduct = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} animation={true}>
      <Modal.Header
        closeButton
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          borderBottom: "none",
        }}
      >
        <Modal.Title
          style={{
            fontSize: "1rem",
            position: "absolute",
          }}
        >
          ADD A NEW PRODUCT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ fontSize: "0.8rem" }}>
        <div className="container">
          <div className="">
            <div className="col col-12">
              <div className="row justify-content-center mb-5">
                <div
                  className="col col-3 align-items-center"
                  style={{
                    border: "1px solid #e9ecef",
                    height: "7rem",
                    textAlign: "center",
                    fontSize: "0.6rem",
                    padding: "0",
                  }}
                >
                  <img
                    className="ImageSect"
                    ref={props.imageRef}
                    src={props.imageUrl}
                    alt={props.imageAlt}
                    style={{
                      maxWidth: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <form onSubmit={props.newProduct}>
                <div className="form-group">
                  <input
                    type="file"
                    style={{ display: "block" }}
                    onChange={props.imageUpload}
                  />
                  {/* <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                        onChange={imageUpload}
                      />
                      <label class="custom-file-label" for="customFile">
                        Choose file
                      </label>
                    </div> */}
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    class="btn"
                    onClick={props.cloudinaryUpload}
                    style={{
                      backgroundColor: "#D94F00",
                      color: "white",
                      fontSize: "0.7rem",
                      // borderRadius: "0px",
                    }}
                  >
                    {props.submitting === true
                      ? "Please Wait..."
                      : "Submit Image"}
                  </button>
                </div>

                <div class="form-group">
                  <label htmlFor="ItemIDSet">Item ID:</label>
                  <input
                    disabled
                    required
                    type="text"
                    class="form-control form-control-sm"
                    id="ItemIDSet"
                    aria-describedby="emailHelp"
                    name="id"
                    value={props.id}
                    // onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="nameSet">Name:</label>
                  <input
                    required
                    type="text"
                    class="form-control form-control-sm"
                    id="nameSet"
                    aria-describedby="emailHelp"
                    name="name"
                    value={props.name}
                    onChange={props.namedFn}
                  />
                </div>
                <div class="form-group">
                  <label for="categorySet">Category:</label>
                  <input
                    required
                    type="text"
                    class="form-control form-control-sm"
                    id="categorySet"
                    aria-describedby="emailHelp"
                    name="category"
                    value={props.category}
                    onChange={props.catFn}
                  />
                </div>
                <div class="form-group">
                  <label for="priceSet">Price:</label>
                  <input
                    required
                    type="number"
                    class="form-control form-control-sm"
                    id="priceSet"
                    aria-describedby="emailHelp"
                    name="price"
                    value={props.price}
                    placeholder="N0.00"
                    onChange={props.priceFn}
                  />
                </div>
                <div class="form-group">
                  <label class="mr-sm-2" for="inlineFormCustomSelect">
                    Select Branch:{" "}
                  </label>
                  <select
                    required
                    value={props.selectedBranch}
                    onChange={props.selectBFn}
                    class="custom-select mr-sm-2 retrunedBranch"
                    id="inlineFormCustomSelect"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <option>select....</option>
                    {props.Returnedbranch}
                  </select>
                </div>
                <div
                  class="form-group"
                  style={{ color: "red", fontSize: "0.7rem" }}
                >
                  {props.disabledBtn === true ? (
                    <b>* Please Submit the Image</b>
                  ) : null}
                </div>

                <button
                  disabled={props.disabledBtn}
                  type="submit"
                  class="btn"
                  style={{
                    backgroundColor: "#D94F00",
                    color: "white",
                    fontSize: "0.7rem",
                    // borderRadius: "0px",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Newproduct;
