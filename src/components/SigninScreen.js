import React, { useState, useContext, useEffect } from "react";
import authContext from "../context/authContext";
import backdrop from "../assets/backdrop.png";
import TransOver from "../assets/TransOver.png";
import whiteOver from "../assets/whiteOver.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("*Company Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short"),
});

const initialValues = {
  password: "",
  username: "",
};
const secondValues = {
  password: "",
  username: "",
};

const SigninScreen = () => {
  let history = useHistory();
  const { state, signin } = useContext(authContext);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  console.log(state.authRedirect, state);

  useEffect(() => {
    if (state.isAuthenticated) {
      history.push("/overAdmin");
    }
  }, [state.isAuthenticated]);

  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 4) {
      errors.password = "*Password too short";
    }
    if (!values.username) {
      errors.username = "*Company Name is required";
    } else if (values.password.length < 4) {
      errors.password = "*Company Name too short";
    }
    return errors;
  };

  const visibleFn = () => {
    const blockAdmin = document.getElementById("blockAdmin");
    const blockRoot = document.getElementById("blockRoot");
    blockAdmin.classList.toggle("ownerLogin");
    blockRoot.classList.toggle("ownerLogin");
    console.log("clicked");
  };

  return (
    <div class="container-fluid">
      <div class="row">
        <div
          class="col col-lg-6 col-12 backOvr"
          style={{
            background: `url(${backdrop})`,
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          <img
            src={TransOver}
            alt="overview"
            style={{
              width: "26%",
              height: "28%",
              marginLeft: "37%",
              marginTop: "10%",
            }}
          />
          <div className="row d-flex justify-content-center mt-5">
            <div className="col col-10 text-center" style={{ color: "white" }}>
              <p className="mt-5">
                <h5>
                  <b>Inventory Manager</b>
                </h5>
              </p>
              <div
                style={{
                  fontSize: "0.7rem",
                  marginTop: "10%",
                  fontWeight: "200",
                }}
              >
                <p>Real Time analytics of all you inventory</p>
                <p>Assign Roles to team members</p>
                <p>Create Branches</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col col-12 col-xl-6 inForm"
          style={{ backgroundColor: "#FAF1EE", height: "100vh" }}
        >
          <div class="row ">
            <div
              class="col col-11 col-md-7 col-xl-7 loginForm"
              style={{
                backgroundColor: "rgb(0,0,0,0.1)",
                height: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "6%",
                borderRadius: "15px",
                // border: "1px solid rgb(128,128,128, 0.3)",
              }}
            >
              <img
                className="overImg"
                src={whiteOver}
                alt="overview"
                style={{
                  width: "22%",
                  height: "28%",
                  marginLeft: "37%",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  //   border: "1px solid black",
                }}
              />
              <Formik
                initialValues={initialValues}
                validate={validate}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  const username = values.username;
                  const password = values.password;
                  signin(username, password);
                }}
              >
                {(formik) => {
                  const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty,
                  } = formik;
                  return (
                    <form
                      style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingBottom: "18%",
                      }}
                      onSubmit={handleSubmit}
                    >
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "0.8rem",
                        }}
                      >
                        <b style={{ color: "#FF580D" }}>ROOT USER</b>
                      </p>
                      {/* email */}
                      <div class="input-group input-group-sm mb-3">
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          onBlur={handleBlur}
                          value={values.username}
                          onChange={handleChange}
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="janejohn"
                          style={{
                            fontSize: "0.7rem",
                            paddingTop: "0.6rem",
                            paddingBottom: "0.6rem",
                          }}
                          className={`form-control ${
                            errors.username && touched.username
                              ? "input-error"
                              : null
                          }`}
                        />

                        {errors.username && touched.username && (
                          <div
                            className="error col col-12"
                            style={{
                              color: "red",
                              fontSize: "0.5rem",
                              marginTop: "0.3rem",
                            }}
                          >
                            {errors.username}
                          </div>
                        )}
                      </div>
                      {/* placeholder */}
                      <div class="input-group input-group-sm mb-3">
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="************"
                          style={{
                            fontSize: "0.7rem",
                            paddingTop: "0.6rem",
                            paddingBottom: "0.6rem",
                          }}
                        />
                        {errors.password && touched.password && (
                          <div
                            className="error col col-12"
                            style={{
                              color: "red",
                              fontSize: "0.5rem",
                              marginTop: "0.3rem",
                            }}
                          >
                            {errors.password}
                          </div>
                        )}
                        <div
                          className="passwordDiv"
                          style={{
                            position: "absolute",
                            top: "-20%",
                            left: "5%",
                            zIndex: "1000",
                            fontSize: "0.5rem",
                            color: "#1070CA",
                            backgroundColor: "white",
                            height: "0.8rem",
                            paddingLeft: "3px",
                            paddingRight: "3px",
                          }}
                        >
                          <p>
                            <b>Password</b>
                          </p>
                        </div>
                      </div>

                      {/* button */}
                      <br />
                      <div class="form-group">
                        <button
                          type="submit"
                          style={{
                            fontSize: "0.7rem",
                            paddingTop: "0.4rem",
                            paddingBottom: "0.4rem",
                            borderRadius: "3px",
                            backgroundColor: "#1070CA",
                          }}
                          className={`btn btn-primary btn-block ${
                            dirty && isValid ? "" : "disabled-btn"
                          }`}
                          disabled={!(dirty && isValid)}
                        >
                          Sign In
                        </button>
                      </div>
                      <br />
                      <p
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "200",
                        }}
                      >
                        Not a Root User?{" "}
                        <Link>
                          {" "}
                          <b
                            style={{
                              fontWeight: "600",
                              color: "#1070CA",
                              // fontSize: "0.8rem",
                            }}
                            onClick={visibleFn}
                          >
                            IAM USER
                          </b>
                        </Link>
                      </p>
                      <p
                        className="bottommarg"
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "200",
                        }}
                      >
                        Don't have an account?{" "}
                        <Link to="/Signup">
                          {" "}
                          <b
                            style={{
                              fontWeight: "600",
                              color: "#1070CA",
                            }}
                          >
                            Sign Up
                          </b>
                        </Link>
                      </p>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>

          {/* SECOND SIGN IN  */}
          <div class="row ownerLogin" id="blockAdmin">
            <div
              class="col col-11 col-md-7 col-xl-7 signupForm"
              style={{
                backgroundColor: "#ffffff",
                height: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "6%",
                borderRadius: "15px",
                border: "1px solid rgb(128,128,128, 0.3)",
              }}
            >
              <img
                className="overImg"
                src={whiteOver}
                alt="overview"
                style={{
                  width: "22%",
                  height: "28%",
                  marginLeft: "37%",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                }}
              />
              <Formik
                initialValues={secondValues}
                validate={validate}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  const username = values.username;
                  const password = values.password;
                  signin(username, password);
                }}
              >
                {(formik) => {
                  const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty,
                  } = formik;
                  return (
                    <form
                      onSubmit={handleSubmit}
                      style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingBottom: "10%",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "400",
                        }}
                      >
                        <b style={{ color: "#FF580D", fontSize: "0.8rem" }}>
                          IAM USER
                        </b>
                      </p>
                      <p
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "200",
                          color: "red",
                        }}
                      >
                        Are you a Root User?{" "}
                        <Link>
                          {" "}
                          <b
                            style={{
                              fontWeight: "600",
                              color: "#1070CA",
                            }}
                            onClick={visibleFn}
                          >
                            SWITCH HERE
                          </b>
                        </Link>
                      </p>

                      <div class="input-group input-group-sm mb-3">
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          onBlur={handleBlur}
                          value={values.username}
                          onChange={handleChange}
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="janejohn"
                          style={{
                            fontSize: "0.7rem",
                            paddingTop: "0.6rem",
                            paddingBottom: "0.6rem",
                          }}
                          className={`form-control ${
                            errors.username && touched.username
                              ? "input-error"
                              : null
                          }`}
                        />
                        {errors.username && touched.username && (
                          <div
                            className="error col col-12"
                            style={{
                              color: "red",
                              fontSize: "0.5rem",
                              marginTop: "0.3rem",
                            }}
                          >
                            {errors.username}
                          </div>
                        )}
                      </div>

                      <div class="input-group input-group-sm mb-3">
                        <Field
                          type="password"
                          is="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="************"
                          style={{
                            fontSize: "0.7rem",
                            paddingTop: "0.6rem",
                            paddingBottom: "0.6rem",
                          }}
                        />
                        {errors.password && touched.password && (
                          <div
                            className="error col col-12"
                            style={{
                              color: "red",
                              fontSize: "0.5rem",
                              marginTop: "0.3rem",
                            }}
                          >
                            {errors.password}
                          </div>
                        )}
                        <div
                          className="passwordDiv"
                          style={{
                            position: "absolute",
                            top: "-20%",
                            left: "5%",
                            zIndex: "1000",
                            fontSize: "0.5rem",
                            color: "#1070CA",
                            backgroundColor: "white",
                            height: "0.8rem",
                            paddingLeft: "3px",
                            paddingRight: "3px",
                          }}
                        >
                          <p>
                            <b>Password</b>
                          </p>
                        </div>
                      </div>

                      <br />
                      <div class="form-group">
                        <button
                          type="submit"
                          style={{
                            fontSize: "0.7rem",
                            paddingTop: "0.4rem",
                            paddingBottom: "0.4rem",
                            borderRadius: "3px",
                            backgroundColor: "#1070CA",
                          }}
                          className={`btn btn-primary btn-block ${
                            dirty && isValid ? "" : "disabled-btn"
                          }`}
                          disabled={!(dirty && isValid)}
                        >
                          Sign In
                        </button>
                      </div>
                      <br />
                      <p
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "200",
                        }}
                      >
                        Don't have an account?{" "}
                        <Link to="/Signup">
                          {" "}
                          <b
                            style={{
                              fontWeight: "600",
                              color: "#1070CA",
                            }}
                          >
                            Sign Up
                          </b>
                        </Link>
                      </p>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>

          {/* END */}
        </div>
      </div>
    </div>
  );
};

export default SigninScreen;
