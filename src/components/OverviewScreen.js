import React, { useState, useContext, useEffect, useRef } from "react";
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
import authContext from "../context/authContext";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Alert } from "bootstrap";

const OverviewScreen = () => {
  let history = useHistory();
  const { createproduct } = useContext(authContext);
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const imageRef = useRef(null);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState("");
  const [change, setChange] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // EDITING STATE
  const [editid, seteditId] = useState("");
  const [editname, seteditName] = useState("");
  const [editcategory, seteditCategory] = useState("");
  const [editprice, seteditPrice] = useState("");
  const [editshow, seteditShow] = useState(false);

  const edithandleClose = () => seteditShow(false);
  const edithandleShow = () => seteditShow(true);

  // SEE ALL
  const [seeallshow, setseeallShow] = useState(false);

  const seeallhandleClose = () => setseeallShow(false);
  const seeallhandleShow = () => setseeallShow(true);

  //IMAGE UPLOAD
  const imageUpload = (e) => {
    const imageDiv = imageRef.current;
    console.log(imageDiv);
    imageDiv.src = URL.createObjectURL(e.target.files[0]);

    console.log(imageDiv.src);

    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "knypfbbh");
    const options = {
      method: "POST",
      body: formData,
    };

    // replace cloudname with your Cloudinary cloud_name
    return fetch(
      "https://api.Cloudinary.com/v1_1/ajulibe/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setImageUrl(res.secure_url);
        setImageAlt(`An image of ${res.original_filename}`);
      })
      .catch((err) => console.log(err));
  };

  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/Signin");
  };

  useEffect(() => {
    fetchproducts();
  }, [change]);

  const fetchproducts = async () => {
    const token = await localStorage.getItem("token");
    // console.log(token);
    try {
      const response = await axios.get(
        "http://12.96.91.34.bc.googleusercontent.com/api/products/introtech",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);

      const productTable = response.data.map((product) => {
        return (
          <tr key={product._id}>
            <td
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ width: "3rem", height: "3rem" }}>
                <img
                  src={product.image}
                  alt="product-image"
                  style={{
                    height: "100%",
                    maxWidth: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product._id}</td>
            <td>{product.price}</td>
            <td>
              <button
                className="btn"
                onClick={() => {
                  editProduct(product._id);
                }}
              >
                {" "}
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </td>
            <td>
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </td>
          </tr>
        );
      });

      setProduct(productTable);
    } catch {}
  };

  //GET PRODUCTS FOR EDITING
  const editProduct = async (id) => {
    seeallhandleClose();
    const token = await localStorage.getItem("token");
    // console.log(token);
    // console.log(id);
    try {
      const response = await axios.get(
        `http://12.96.91.34.bc.googleusercontent.com/api/products/introtech/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      seteditId(response.data[0]._id);
      seteditName(response.data[0].name);
      seteditCategory(response.data[0].category);
      seteditPrice(response.data[0].price);

      edithandleShow();
    } catch {}
  };

  //SUBMIT UPDATED PRODUCTS
  const updateProduct = async () => {
    const token = await localStorage.getItem("token");
    // console.log(token);
    // console.log(id);
    try {
      const response = await axios.put(
        "http://12.96.91.34.bc.googleusercontent.com/api/products",
        {
          id: editid,
          name: editname,
          category: editcategory,
          price: editprice,
          inventory: "introtech",
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.message === "success") {
        alert("success");
        fetchproducts();
      } else {
        alert("Unsuccesfful!!!");
      }
    } catch {}
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

          <div
            class="input-group input-group-sm "
            style={{
              width: "11rem",
              marginRight: "11rem",
              position: "relative",
            }}
          >
            <i
              class="fa fa-search"
              style={{
                position: "absolute",
                zIndex: "1000",
                right: "6%",
                top: "20%",
                width: "1rem",
                color: "#C5D6EA",
              }}
            ></i>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search Inventory"
              style={{
                fontSize: "0.7rem",
                paddingTop: "0.6rem",
                paddingBottom: "0.6rem",
                backgroundColor: "#44434F",
                border: "none",
              }}
            ></input>
          </div>
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
                  <div
                    className="mt-2 text-center"
                    style={{
                      borderLeft: "2px solid #006CF1",
                      marginLeft: "-0.9rem",
                      paddingLeft: "0.6rem",
                    }}
                  >
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
                  <div className="mt-4">
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
                <Link className="linkTag" onClick={Logout}>
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
              className="col col-4 mr-auto ml-auto text-center mb-5"
              style={{
                marginTop: "0.5rem",
                height: "2rem",
                width: "2rem",
              }}
            >
              <img
                src={kadarko}
                alt="Comapany-Logo"
                style={{ height: "100%", marginBottom: "1%" }}
              />
              <p style={{ fontSize: "0.7rem" }}>
                <b>INVENTORY OF ALL BRANCHES</b>
              </p>
            </div>
            <div
              className="col col-10 mr-auto ml-auto"
              style={{
                backgroundColor: "#151423",
                height: "20vh",
                borderRadius: "13px",
                // position: "fixed",
                marginTop: "-1rem",
              }}
            >
              <div className="col col-12 d-flex justify-content-between">
                <div
                  className="col col-3 mt-3"
                  style={{
                    // border: "1px solid red",
                    position: "relative",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: "300",
                    }}
                  >
                    Total items in Inventory
                  </p>
                  <p
                    style={{
                      color: "#198AEE",
                      fontSize: "1.2rem",
                      position: "absolute",
                      top: "60%",
                    }}
                  >
                    <b> 1,508 </b>

                    <span
                      style={{
                        color: "white",
                        fontSize: "0.7rem",
                        fontWeight: "300",
                      }}
                    >
                      items
                    </span>
                  </p>
                </div>
                <div
                  className="col col-2 mt-3 d-flex justify-content-center align-items-center"
                  style={{
                    border: "1px solid #198AEE",
                    backgroundColor: "white",
                    color: "#198AEE",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                  }}
                >
                  Get Summary
                </div>
              </div>
              <div
                className="col col-12 d-flex justify-content-between mt-4"
                style={{ position: "relative" }}
              >
                <div className="col col-2 d-flex">
                  <div
                    className=" col col-1"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div
                      className="rounded-circle"
                      style={{
                        height: "0.8rem",
                        width: "0.8rem",
                        top: "0.5rem",
                        position: "absolute",
                        backgroundColor: "#4CD964",
                      }}
                    ></div>
                  </div>
                  <div className="col col-11">
                    <p style={{ color: "#44434F", fontSize: "0.8rem" }}>
                      Laptops
                    </p>
                    <p
                      style={{
                        color: "#f14b22",
                        fontSize: "0.9rem",
                        position: "absolute",
                        top: "50%",
                      }}
                    >
                      <b>326</b>
                    </p>
                  </div>
                </div>
                <div className="col col-2" style={{}}>
                  <div className="row d-flex">
                    <div
                      className="col col-1"
                      style={{
                        position: "relative",
                      }}
                    >
                      <div
                        className="rounded-circle"
                        style={{
                          height: "0.8rem",
                          width: "0.8rem",
                          top: "0.5rem",
                          position: "absolute",
                          backgroundColor: "#007AFF",
                          marginRight: "1rem",
                        }}
                      ></div>
                    </div>
                    <div className="col col-11" style={{ textAlign: "center" }}>
                      <p
                        style={{
                          color: "#44434F",
                          fontSize: "0.8rem",
                        }}
                      >
                        Mouse
                      </p>{" "}
                      <p
                        style={{
                          color: "#f14b22",
                          fontSize: "0.9rem",
                          position: "absolute",
                          top: "50%",
                          left: "36%",
                        }}
                      >
                        <b>581</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-2" style={{}}>
                  <div className="row d-flex">
                    <div
                      className="col col-1"
                      style={{
                        position: "relative",
                      }}
                    >
                      <div
                        className="rounded-circle"
                        style={{
                          height: "0.8rem",
                          width: "0.8rem",
                          top: "0.5rem",
                          position: "absolute",
                          backgroundColor: "#FF00C7",
                          marginRight: "1rem",
                        }}
                      ></div>
                    </div>
                    <div className="col col-11" style={{ textAlign: "center" }}>
                      <p
                        style={{
                          color: "#44434F",
                          fontSize: "0.8rem",
                        }}
                      >
                        Desktop
                      </p>{" "}
                      <p
                        style={{
                          color: "#f14b22",
                          fontSize: "0.9rem",
                          position: "absolute",
                          top: "50%",
                          left: "33%",
                        }}
                      >
                        <b>129</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-2" style={{}}>
                  <div className="row d-flex">
                    <div
                      className="col col-1"
                      style={{
                        position: "relative",
                      }}
                    >
                      <div
                        className="rounded-circle"
                        style={{
                          height: "0.8rem",
                          width: "0.8rem",
                          top: "0.5rem",
                          position: "absolute",
                          backgroundColor: "#FFCC00",
                          marginRight: "1rem",
                        }}
                      ></div>
                    </div>
                    <div className="col col-11" style={{ textAlign: "center" }}>
                      <p
                        style={{
                          color: "#44434F",
                          fontSize: "0.8rem",
                        }}
                      >
                        Keyboard
                      </p>{" "}
                      <p
                        style={{
                          color: "#f14b22",
                          fontSize: "0.9rem",
                          position: "absolute",
                          top: "50%",
                          left: "30%",
                        }}
                      >
                        <b>403</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col col-2 d-flex justify-content-between lastOne"
                  style={{
                    position: "relative",
                    paddingLeft: "0",
                  }}
                >
                  <div className="col col-8">
                    <div className="row d-flex">
                      <div
                        className="col col-1"
                        style={{
                          position: "relative",
                        }}
                      >
                        <div
                          className="rounded-circle"
                          style={{
                            height: "0.8rem",
                            width: "0.8rem",
                            top: "0.5rem",
                            position: "absolute",
                            backgroundColor: "#D141EF",
                            left: "-0.1rem",
                          }}
                        ></div>
                      </div>
                      <div
                        className="col col-11"
                        style={{ textAlign: "right" }}
                      >
                        <p
                          style={{
                            color: "#44434F",
                            fontSize: "0.8rem",
                          }}
                        >
                          Printers
                        </p>{" "}
                        <p
                          style={{
                            color: "#f14b22",
                            fontSize: "0.9rem",
                            position: "absolute",
                            top: "50%",
                            left: "30%",
                          }}
                        >
                          <b>138</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-4 d-flex align-self-end">
                    <Link
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={() => {
                        seeallhandleShow();
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.6rem",
                          position: "absolute",

                          right: "3px",
                          top: "-1rem",
                        }}
                      >
                        <b>See All</b>
                      </p>
                    </Link>
                    {/* modal */}
                    <Modal
                      size="lg"
                      show={seeallshow}
                      onHide={seeallhandleClose}
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
                        {product === "" ? (
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
                                    src={empty}
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
                                  // border: "1px solid red",
                                  marginBottom: "3rem",
                                }}
                              >
                                <div
                                  className="col col-4"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {/* <p style={{ textAlign: "center" }}>
                                    <b>ALL ITEMS</b>
                                  </p> */}
                                </div>
                                <div className="col col-5">
                                  <i
                                    class="fa fa-search"
                                    style={{
                                      position: "absolute",
                                      zIndex: "1000",
                                      right: "10%",
                                      top: "20%",
                                      width: "1rem",
                                      color: "rgb(21,20,35, 0.6)",
                                    }}
                                  ></i>
                                  <input
                                    style={{ fontSize: "0.8rem" }}
                                    type="text"
                                    placeholder="Search for product.."
                                    class="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="col col-12 table-responsive"
                              style={{}}
                            >
                              <table
                                class="table table-hover table-striped table-bordered text-center"
                                style={{ fontSize: "0.8rem" }}
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
                                <tbody> {product}</tbody>
                              </table>
                            </div>
                          </>
                        )}
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col col-9 mr-auto ml-auto"
              style={{
                marginTop: "1%",
                // border: "1px solid red",
              }}
            >
              {/* new modal */}
              <Modal show={show} onHide={handleClose} animation={true}>
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
                            {/* <p style={{ marginTop: "50%" }}>
                              No Uploaded Image
                            </p> */}

                            <img
                              ref={imageRef}
                              src={imageUrl}
                              alt={imageAlt}
                              style={{
                                maxWidth: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            createproduct(id, name, category, price, imageUrl);
                            handleClose();
                            setChange(true);
                          }}
                        >
                          <div className="form-group">
                            <input
                              type="file"
                              style={{ display: "block" }}
                              onChange={imageUpload}
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

                          <div class="form-group">
                            <label htmlFor="ItemIDSet">Item ID:</label>
                            <input
                              required
                              type="text"
                              class="form-control form-control-sm"
                              id="ItemIDSet"
                              aria-describedby="emailHelp"
                              name="id"
                              value={id}
                              onChange={(e) => setId(e.target.value)}
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
                              value={name}
                              onChange={(e) => setName(e.target.value)}
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
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                            />
                          </div>
                          <div class="form-group">
                            <label for="priceSet">Price:</label>
                            <input
                              required
                              type="text"
                              class="form-control form-control-sm"
                              id="priceSet"
                              aria-describedby="emailHelp"
                              name="price"
                              value={price}
                              placeholder="N0.00"
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>

                          <button
                            type="submit"
                            class="btn"
                            style={{
                              backgroundColor: "#D94F00",
                              color: "white",
                              fontSize: "0.7rem",
                              borderRadius: "0px",
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
              {/* end modal */}
              {/* MODAL FOR EDITING */}
              <Modal
                show={editshow}
                onHide={edithandleClose}
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
                >
                  <Modal.Title
                    style={{
                      fontSize: "1rem",
                      position: "absolute",
                    }}
                  >
                    EDIT THIS PRODUCT
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontSize: "0.8rem" }}>
                  <div className="container">
                    <div className="">
                      <div className="col col-12">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            updateProduct();
                            edithandleClose();
                            setChange(true);
                          }}
                        >
                          <div class="form-group">
                            <label htmlFor="ItemIDSet">Item ID:</label>
                            <input
                              required
                              type="text"
                              class="form-control form-control-sm"
                              id="ItemIDSet"
                              aria-describedby="emailHelp"
                              name="editid"
                              value={editid}
                              onChange={(e) => seteditId(e.target.value)}
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
                              name="editname"
                              value={editname}
                              onChange={(e) => seteditName(e.target.value)}
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
                              name="editcategory"
                              value={editcategory}
                              onChange={(e) => seteditCategory(e.target.value)}
                            />
                          </div>
                          <div class="form-group">
                            <label for="priceSet">Price:</label>
                            <input
                              required
                              type="text"
                              class="form-control form-control-sm"
                              id="priceSet"
                              aria-describedby="emailHelp"
                              name="editprice"
                              value={editprice}
                              placeholder="N0.00"
                              onChange={(e) => seteditPrice(e.target.value)}
                            />
                          </div>

                          <button
                            type="submit"
                            class="btn"
                            style={{
                              backgroundColor: "#D94F00",
                              color: "white",
                              fontSize: "0.7rem",
                              borderRadius: "0px",
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
              {/* END OF MODAL FOR EDITING */}

              <div className="col col-12 d-flex justify-content-between">
                <div className="col col-6 text-left">
                  <Link>
                    <p style={{ fontSize: "0.8rem" }}>
                      <i class="fa fa-plus add" aria-hidden="true"></i> &nbsp;{" "}
                      <b onClick={handleShow}>Add New Entry</b>
                    </p>
                  </Link>{" "}
                </div>
                <div className="col col-6 text-right">
                  <p style={{ fontSize: "0.7rem", fontWeight: "200" }}>
                    Recently added{" "}
                  </p>
                </div>
              </div>

              {product === "" ? (
                <div class="col col-md-11">
                  <div className="row">
                    <div
                      className="col-6 mr-auto ml-auto"
                      style={{ marginTop: "4%" }}
                    >
                      <div className="col-12 text-center">
                        <img
                          src={empty}
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
                  className="col col-12 table-responsive"
                  style={{ height: "40vh", overflow: "scroll" }}
                >
                  <table
                    class="table table-hover table-striped table-bordered text-center"
                    style={{ fontSize: "0.8rem" }}
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
                    <tbody> {product}</tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;
