import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import Modal from "react-bootstrap/Modal";

const SeeAll = (props) => {
  return (
    <Modal
      size="lg"
      show={props.seeallshow}
      onHide={props.seeallhandleClose}
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
        {props.product === "" ? (
          <div class="col col-md-12">
            <div className="row">
              <div
                className="col-6 mr-auto ml-auto mb-5"
                style={{
                  marginTop: "4%",
                }}
              >
                <div className="col-12 text-center">
                  <img
                    src={props.empty}
                    alt="nodata"
                    style={{ width: "5rem" }}
                  />
                </div>

                <div className="col-12 text-center mt-4">
                  <p style={{ fontSize: "0.8rem" }}>
                    You Have No Products Available!!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="row d-flex justify-content-center">
              <div
                className="col col-10"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  marginBottom: "3rem",
                }}
              >
                <div
                  className="col col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                ></div>
                <div className="col col-12 col-md-5 ">
                  <i
                    class="fa fa-search "
                    style={{
                      position: "absolute",
                      zIndex: "1000",
                      right: "10%",
                      top: "20%",
                      width: "1rem",
                      color: "rgb(21,20,35,0.6)",
                    }}
                    onClick={props.clickme}
                  ></i>
                  <form onSubmit={props.filteredSearch}>
                    <input
                      autocomplete="off"
                      required
                      onFocus={props.focusFn}
                      onBlur={props.blurFn}
                      style={{ fontSize: "0.8rem" }}
                      type="text"
                      placeholder="Search for product by name.."
                      class="form-control searchIcon"
                      name="search"
                      value={props.search}
                      onChange={props.changeSearch}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="sweet-loading">
              <MoonLoader
                css={props.override}
                size={65}
                color={"#F14B22"}
                loading={props.loading}
              />
            </div>
            {props.error ? (
              <div class="col col-md-12">
                <div className="row">
                  <div
                    className="col-6 mr-auto ml-auto mb-5"
                    style={{
                      marginTop: "4%",
                    }}
                  >
                    <div className="col-12 text-center">
                      <img
                        src={props.empty}
                        alt="nodata"
                        style={{ width: "5rem" }}
                      />
                    </div>

                    <div className="col-12 text-center mt-4">
                      <p style={{ fontSize: "0.8rem" }}>
                        You Have No Products Available!!!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="col col-12 table-responsive disGuy"
                style={{
                  display: `${props.tableShow}`,
                  height: "65vh",
                  overflow: "scroll",
                }}
              >
                <table
                  class="table table-hover text-center"
                  style={{
                    fontSize: "0.8rem",
                    border: "2px solid rgb(229,229,229)",
                  }}
                >
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">ID</th>
                      <th scope="col">Price</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody className=""> {props.productAll}</tbody>
                </table>
              </div>
            )}
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SeeAll;
