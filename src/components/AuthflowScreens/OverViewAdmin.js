import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import empty from "../../assets/empty.svg";
import all from "../../assets/all.png";
import exit from "../../assets/exit.png";
import roles from "../../assets/roles.png";
import branches from "../../assets/branches.png";
import brancheswhite from "../../assets/brancheswhite.png";
import roleswhite from "../../assets/roleswhite.png";
import kadarko from "../../assets/Kadarko.svg";
import authContext from "../../context/authContext";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import SeeAll from "../Modals/SeeAll";
import Newproduct from "../Modals/Newproduct";
import Navbar from "../Bars/Navbar";
import SidebarAdmin from "../Bars/SidebarAdmin";
import Sidenav from "../Modals/Sidenav";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

const OverViewAdmin = () => {
  let history = useHistory();

  const { createproduct, logOut } = useContext(authContext);
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const imageRef = useRef("");

  const [id, setId] = useState(Math.random().toString(36).slice(2));
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState("");
  const [productAll, setProductAll] = useState("");
  const [change, setChange] = useState(false);
  const [error, setError] = useState(false);
  const [initial, setInitial] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [disabledBtn, setdisabledBtn] = useState(true);

  const [iniempty, setiniempty] = useState("none");

  const [selectedBranch, setselectedBranch] = useState("");

  //SIDEBAR MODAL
  const [side, setSide] = useState(false);
  const sideClose = () => setSide(false);
  const sideShow = () => setSide(true);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setId(Math.random().toString(36).slice(2));
    setName("");
    setCategory("");
    setPrice("");
    setShow(true);
    // const imageDiv = document.querySelector(".ImageSect");
    // //console.log(imageDiv);
  };

  // EDITING STATE
  const [editid, seteditId] = useState("");
  const [editname, seteditName] = useState("");
  const [editcategory, seteditCategory] = useState("");
  const [editprice, seteditPrice] = useState("");
  const [editshow, seteditShow] = useState(false);
  const [Returnedbranch, setReturnedbranch] = useState("");

  const edithandleClose = () => seteditShow(false);
  const edithandleShow = () => seteditShow(true);

  //SEARCH TABLE
  const [tableShow, settableShow] = useState("block");
  const [search, setsearch] = useState("");

  //LOADING STATE
  const [loading, setloading] = useState(false);

  // SEE ALL
  const [seeallshow, setseeallShow] = useState(false);

  const seeallhandleClose = () => setseeallShow(false);
  const seeallhandleShow = () => setseeallShow(true);

  // const Logout = () => {
  //   localStorage.removeItem("token");
  //   history.push("/");
  // };

  const newProduct = (e) => {
    e.preventDefault();
    imagereturn();
    handleClose();
  };

  //IMAGE UPLOAD
  const imageUpload = (e) => {
    const imageDiv = imageRef.current;
    // console.log(imageDiv);
    imageDiv.src = URL.createObjectURL(e.target.files[0]);
  };

  const cloudinaryUpload = async () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    setSubmitting(true);
    formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "knypfbbh");
    try {
      // replace cloudname with your Cloudinary cloud_name
      const response = await axios.post(
        "https://api.Cloudinary.com/v1_1/ajulibe/image/upload",
        formData
      );
      console.log(response.data);
      setImageUrl(response.data.secure_url);
      alert("Image Submitted");
      setSubmitting(false);
      // setImageUrl(response.data.public_id);
      setImageAlt(`An image of ${response.data.original_filename}`);
      setdisabledBtn(false);
    } catch (e) {
      console.log(e);
    }
  };

  //WAIT FOR IMAGE URL AND RETURN PRODUCT
  const imagereturn = async () => {
    await createproduct(id, name, category, price, imageUrl, selectedBranch);
    setImageUrl("");
    setImageAlt("");
    fetchproducts();
    setdisabledBtn(true);
  };

  useEffect(() => {
    // if (state.isAuthenticated === false) {
    //   history.push("/");
    // } else {
    //   fetchproducts();
    //   fetchbranches();
    // }
  }, [change]);

  const selectBFn = (e) => {
    console.log("clicked");
    setselectedBranch(e.target.value);
    console.log(selectedBranch);
  };

  const fetchproducts = async () => {
    const token = await localStorage.getItem("token");

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
              className="align-middle"
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CloudinaryContext cloudName="ajulibe">
                  <Image
                    publicId={product.image}
                    loading="lazy"
                    width="100%"
                    height="100%"
                    secure="true"
                    alt="product-image"
                  >
                    {/* <Transformation quality="50" /> */}
                  </Image>
                </CloudinaryContext>
              </div>
            </td>
            <td className="align-middle">{product.name}</td>
            <td className="align-middle">{product.category}</td>
            <td className="align-middle">{product._id}</td>
            <td className="align-middle">{product.price}</td>
            <td className="align-middle">
              <button
                className="btn"
                onClick={() => {
                  editProduct(product._id);
                }}
              >
                {" "}
                <i
                  class="fa fa-pencil"
                  aria-hidden="true"
                  style={{ color: "#877BFF" }}
                ></i>
              </button>
            </td>
            <td className="align-middle">
              <button
                className="btn"
                onClick={() => {
                  deleteProduct(product._id);
                }}
              >
                <i
                  class="fa fa-trash-o"
                  aria-hidden="true"
                  style={{ color: "red" }}
                ></i>
              </button>
            </td>
          </tr>
        );
      });

      setProduct(productTable);
      setProductAll(productTable);
      setInitial(false);
      setiniempty("block");
    } catch {
      setProduct("");
      setProductAll("");
      setInitial(false);
      setiniempty("block");
    }
  };

  //FETCH BRANCHES
  // const fetchbranches = async () => {
  //   const token = await localStorage.getItem("token");
  //   // console.log(token);
  //   try {
  //     const response = await axios.get(
  //       "http://12.96.91.34.bc.googleusercontent.com/api/branches/introtech",

  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     console.log(response.data);

  //     const branchesPresent = response.data.map((branch) => {
  //       return (
  //         <>
  //           <option value={branch.name}>{branch.name}</option>
  //         </>
  //       );
  //     });

  //     setReturnedbranch(branchesPresent);
  //   } catch {}
  // };

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
    } catch {
      alert("an error occurred");
    }
  };

  //REFRESH TOKEN
  // const refreshToken = async () => {
  //   const token = await localStorage.getItem("token");

  //   try {
  //     const response = await axios.get(
  //       "http://12.96.91.34.bc.googleusercontent.com/api/refreshtoken",

  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(response.data);
  //   } catch {
  //     alert("an error occurred");
  //   }
  // };

  //DELETE PRODUCTS FOR EDITING
  const deleteProduct = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (!result) {
      return;
    } else {
      const token = await localStorage.getItem("token");
      // console.log(token);
      // console.log(id);
      try {
        const response = await axios.post(
          "http://12.96.91.34.bc.googleusercontent.com/api/products/delete",
          {
            inventory: "introtech",
            items: [id],
          },

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(response.data.message);
        if (response.data.message === "success") {
          fetchproducts();
        } else {
          alert("An error occurred");
        }
      } catch {
        alert("an error occurred");
      }
    }
  };

  const namedFn = (e) => {
    setName(e.target.value);
  };

  const catFn = (e) => {
    setCategory(e.target.value);
  };
  const priceFn = (e) => {
    setPrice(e.target.value);
  };

  //INPUT SEARCH
  const searchFn = async () => {
    settableShow("none");
    setloading(true);

    const token = await localStorage.getItem("token");
    // console.log(search);

    try {
      const { data: products } = await axios.get(
        `http://12.96.91.34.bc.googleusercontent.com/api/products?inventory=introtech&name=${search}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //i am using array and object destructuring above
      //({data} = response is the same as response.data}
      //[a] = [1,2,3] is the same as array[0]. they will give the same answer
      //[a,b,c] =[1,2,3] will give 1,2,3, respectively
      //[a,...b] = [1,2,3] will give 1, and console.log of b will give 2,3
      //so {data: [product]  is the same response.data[0]
      // console.log(products);
      setloading(false);

      if (products[0].name) {
        setError(false);
        const searchedProduct = products.map((product) => {
          return (
            <tr key={product._id}>
              <td
                className="align-middle"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div style={{ width: "3rem", height: "3rem" }}>
                  {/* <img
                    src={product.image}
                    alt="product-image"
                    style={{
                      height: "100%",
                      maxWidth: "100%",
                      objectFit: "cover",
                    }}
                  /> */}
                  <CloudinaryContext cloudName="ajulibe">
                    <Image
                      publicId={product.image}
                      loading="lazy"
                      width="100%"
                      height="100%"
                      secure="true"
                      alt="product-image"
                    >
                      <Transformation quality="50" />
                    </Image>
                  </CloudinaryContext>
                </div>
              </td>
              <td className="align-middle">{product.name}</td>
              <td className="align-middle">{product.category}</td>
              <td className="align-middle">{product._id}</td>
              <td className="align-middle">{product.price}</td>
              <td className="align-middle">
                <button
                  className="btn"
                  onClick={() => {
                    editProduct(product._id);
                  }}
                >
                  {" "}
                  <i
                    class="fa fa-pencil"
                    aria-hidden="true"
                    style={{ color: "#877BFF" }}
                  ></i>
                </button>
              </td>
              <td className="align-middle">
                <button
                  className="btn"
                  onClick={() => {
                    deleteProduct(product._id);
                  }}
                >
                  <i
                    class="fa fa-trash-o"
                    aria-hidden="true"
                    style={{ color: "red" }}
                  ></i>
                </button>
              </td>
            </tr>
          );
        });
        setProductAll(searchedProduct);
        settableShow("block");
      } else {
        setloading(false);
        alert("Item not in Inventory");
      }
    } catch (e) {
      setloading(false);
      setError(true);
    }
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
    } catch {
      alert("an error occurred");
    }
  };

  const blurFn = () => {
    setloading(false);
    settableShow("block");
    setError(false);
  };

  const focusFn = () => {
    settableShow("none");
  };

  const clickme = () => {
    setError(false);
    searchFn();
  };

  const changeSearch = (e) => {
    setsearch(e.target.value);
  };

  const filteredSearch = (e) => {
    e.preventDefault();
    setError(false);
    searchFn();
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
        <SidebarAdmin
          all={all}
          roleswhite={roleswhite}
          brancheswhite={brancheswhite}
          Logout={logOut}
          exit={exit}
        />

        <div
          class="col col-10 col-md-11 marginadjust"
          style={{ marginLeft: "5rem" }}
        >
          <div className="row">
            <div className="col col-12" style={{}}>
              <div
                className="row mb-4 d-flex justify-content-center"
                style={{}}
              >
                <div
                  className="col col-6 mb-2 d-flex justify-content-center align-items-center"
                  style={{
                    marginTop: "0.5rem",
                    height: "2rem",
                    width: "2rem",
                    // border: "1px solid red",
                  }}
                >
                  <img
                    className="logost"
                    src={kadarko}
                    alt="Comapany-Logo"
                    style={{
                      height: "2rem",
                      width: "2rem",
                    }}
                  />
                </div>
                <div className="col col-12 d-flex justify-content-center ">
                  <p style={{ fontSize: "0.7rem" }}>
                    <b className="inventall">Inventory Of all Branches</b>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col col-12 col-md-10 mr-auto ml-auto dash "
              style={{
                backgroundColor: "#151423",
                height: "20vh",
                borderRadius: "13px",
                // position: "fixed",
                marginTop: "-2rem",
              }}
            >
              <div className="col col-12 d-flex justify-content-between">
                <div
                  className="col  col-7 mt-3 total"
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
                  className="col col-2 mt-3 d-flex justify-content-end align-items-center seeallbig"
                  style={{}}
                >
                  <Link
                    onClick={() => {
                      seeallhandleShow();
                    }}
                  >
                    <p
                      className=""
                      style={{
                        fontSize: "0.6rem",
                      }}
                    >
                      <b className="cAll">See All</b>
                    </p>
                  </Link>
                </div>
              </div>
              <div
                className="col col-12 d-flex justify-content-between mt-4 mainContent"
                style={{ position: "relative" }}
              >
                <div
                  className="col col-12  d-flex justify-content-between"
                  style={{ color: "white" }}
                >
                  {/* FIRST DIV */}
                  <div style={{ lineHeight: "0.4rem" }}>
                    <p
                      style={{ color: "#44434F", fontSize: "0.8rem" }}
                      className="resizeName"
                    >
                      <b
                        style={{
                          height: "0.8rem",
                          width: "0.8rem",
                          color: "#4CD964",
                        }}
                      >
                        o
                      </b>{" "}
                      &nbsp; Laptops
                    </p>
                    <p
                      className=""
                      style={{
                        color: "#f14b22",
                        fontSize: "0.9rem",
                      }}
                    >
                      <b className="resizeNum">326</b>
                    </p>
                  </div>
                  {/* SECOND DIV */}
                  <div style={{ lineHeight: "0.4rem" }} className="removeDiv">
                    <p
                      style={{
                        color: "#44434F",
                        fontSize: "0.8rem",
                      }}
                      className="resizeName"
                    >
                      <b
                        style={{
                          height: "0.8rem",
                          width: "0.8rem",
                          color: "#007AFF",
                        }}
                      >
                        o
                      </b>{" "}
                      &nbsp; Mouse
                    </p>{" "}
                    <p
                      className=""
                      style={{
                        color: "#f14b22",
                        fontSize: "0.9rem",
                      }}
                    >
                      <b>581</b>
                    </p>
                  </div>
                  {/* THIRD DIV */}
                  <div style={{ lineHeight: "0.4rem" }}>
                    <p
                      style={{
                        color: "#44434F",
                        fontSize: "0.8rem",
                      }}
                      className="resizeName"
                    >
                      <b
                        style={{
                          height: "0.8rem",
                          width: "0.8rem",
                          color: "#FF00C7",
                        }}
                      >
                        o
                      </b>{" "}
                      &nbsp; Desktop
                    </p>{" "}
                    <p
                      className=""
                      style={{
                        color: "#f14b22",
                        fontSize: "0.9rem",
                      }}
                    >
                      <b className="resizeNum">129</b>
                    </p>
                  </div>
                  {/* FOURTH DIV */}
                  <div style={{ lineHeight: "0.4rem" }} className="removeDiv">
                    {" "}
                    <p
                      style={{
                        color: "#44434F",
                        fontSize: "0.8rem",
                      }}
                      className="resizeName"
                    >
                      <b
                        style={{
                          height: "0.8rem",
                          width: "0.8rem",
                          color: "#FFCC00",
                        }}
                      >
                        o
                      </b>{" "}
                      &nbsp; Keyboard
                    </p>{" "}
                    <p
                      className=""
                      style={{
                        color: "#f14b22",
                        fontSize: "0.9rem",
                      }}
                    >
                      <b>403</b>
                    </p>
                  </div>
                  {/* FIFTH DIV */}
                  <div style={{ lineHeight: "0.4rem" }}>
                    {" "}
                    <p
                      style={{
                        color: "#44434F",
                        fontSize: "0.8rem",
                      }}
                      className="resizeName"
                    >
                      <b
                        style={{
                          height: "0.8rem",
                          width: "0.8rem",
                          color: "#D141EF",
                        }}
                        className="resizeName"
                      >
                        o
                      </b>{" "}
                      &nbsp; Printers
                    </p>{" "}
                    <p
                      className=""
                      style={{
                        color: "#f14b22",
                        fontSize: "0.9rem",
                      }}
                    >
                      <b className="resizeNum">138</b>
                    </p>
                  </div>
                </div>

                <div
                  className="row"
                  style={{
                    position: "relative",
                    paddingLeft: "0",
                  }}
                >
                  <div className="col col-12 col-md-12" style={{}}>
                    <Link
                      style={{ display: "none" }}
                      onClick={() => {
                        seeallhandleShow();
                      }}
                      className="seeallsmall"
                    >
                      <p
                        className=""
                        style={{
                          fontSize: "0.6rem",
                        }}
                      >
                        <b className="cAll">See All</b>
                      </p>
                    </Link>
                    {/* modal */}
                    <SeeAll
                      seeallshow={seeallshow}
                      seeallhandleClose={seeallhandleClose}
                      product={product}
                      empty={empty}
                      error={error}
                      tableShow={tableShow}
                      productAll={productAll}
                      loading={loading}
                      override={override}
                      setsearch={setsearch}
                      search={search}
                      blurFn={blurFn}
                      focusFn={focusFn}
                      searchFn={searchFn}
                      clickme={clickme}
                      changeSearch={changeSearch}
                      filteredSearch={filteredSearch}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col col-12 col-md-10 col-lg-9 mr-auto ml-auto"
              style={{
                marginTop: "1%",
                position: "relative",
              }}
            >
              <Newproduct
                show={show}
                handleClose={handleClose}
                imageRef={imageRef}
                imageUrl={imageUrl}
                imageAlt={imageAlt}
                newProduct={newProduct}
                imageUpload={imageUpload}
                id={id}
                name={name}
                namedFn={namedFn}
                category={category}
                catFn={catFn}
                price={price}
                priceFn={priceFn}
                cloudinaryUpload={cloudinaryUpload}
                submitting={submitting}
                disabledBtn={disabledBtn}
                Returnedbranch={Returnedbranch}
                selectedBranch={selectedBranch}
                selectBFn={selectBFn}
              />
              <Sidenav
                show={side}
                onHide={sideClose}
                roles={roles}
                branches={branches}
                onClick={logOut}
                exit={exit}
              />

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
                              disabled
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
              <div className="row">
                <div className="col col-12 d-flex justify-content-between mb-2">
                  <div
                    className="col col-12 col-md-6 text-md-left  addAnew"
                    style={{}}
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      <i class="fa fa-plus add" aria-hidden="true"></i> &nbsp;{" "}
                      <Link>
                        <b onClick={handleShow} className="newEntry">
                          Add a New Entry
                        </b>
                      </Link>{" "}
                    </p>
                  </div>
                  <div className="col col-md-6 text-right recentlyadded">
                    <p
                      style={{ fontSize: "0.7rem", fontWeight: "200" }}
                      className="recAdded"
                    >
                      Recently added{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="sweet-loading">
                <MoonLoader
                  css={override}
                  size={40}
                  color={"#F14B22"}
                  loading={initial}
                />
              </div>

              {product === "" ? (
                <div class="col col-md-11" style={{ display: `${iniempty}` }}>
                  <div className="row">
                    <div
                      className="col-6 mr-auto ml-auto"
                      style={{ marginTop: "4%" }}
                    >
                      <div className="col-12 text-center">
                        <img
                          className="noProducts"
                          src={empty}
                          alt="nodata"
                          style={{ width: "5rem" }}
                        />
                      </div>

                      <div className="col-12 text-center mt-4">
                        <p style={{ fontSize: "0.8rem" }} className="noPtext">
                          You Have No Products Available!!!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="col col-12 table-responsive"
                  style={{
                    height: "40vh",
                    overflow: "scroll",
                    display: `${iniempty}`,
                  }}
                >
                  <table
                    class="table table-hover  text-center"
                    style={{
                      fontSize: "0.8rem",
                      border: "1px solid rgb(229,229,229)",
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
                    <tbody> {product}</tbody>
                  </table>
                </div>
              )}
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

export default OverViewAdmin;
