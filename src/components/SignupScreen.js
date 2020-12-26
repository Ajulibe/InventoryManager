import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import backdrop from "../assets/backdrop.png";
import TransOver from "../assets/TransOver.png";
import whiteOver from "../assets/whiteOver.png";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  companyName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("*Company Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short"),
});

const initialValues = {
  email: "",
  password: "",
  companyName: "",
};

const SignupScreen = () => {
  //   const { state, signup, clearErrorMessage } = useContext(authContext);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "*Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "*Invalid Email";
    }
    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 4) {
      errors.password = "*Password too short";
    }
    if (!values.companyName) {
      errors.companyName = "*Company Name is required";
    } else if (values.password.length < 4) {
      errors.password = "*Company Name too short";
    }
    return errors;
  };

  return (
    <div class="container-fluid">
      <div class="row">
        <div
          class="col col-lg-6 col-12 backOvr "
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
          class="col col-12 col-xl-6 inForm2"
          style={{ backgroundColor: "#FAF1EE", height: "100vh" }}
        >
          <div class="row ">
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
                  marginBottom: "1rem",
                  // border: "1px solid black",
                }}
              />
              <Formik
                initialValues={initialValues}
                validate={validate}
                validationSchema={SignupSchema}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  console.log(values);
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
                    <Form
                      style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingBottom: "10%",
                      }}
                      onSubmit={handleSubmit}
                    >
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "0.8rem",
                          color: "#1070CA",
                        }}
                      >
                        <b> Sign Up</b>
                      </p>
                      <div class="input-group input-group-sm mb-3">
                        <Field
                          type="email"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="Email address"
                          style={{
                            fontSize: "0.7rem",
                            paddingTop: "0.6rem",
                            paddingBottom: "0.6rem",
                          }}
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`form-control ${
                            errors.email && touched.email ? "input-error" : null
                          }`}
                        />
                        {errors.email && touched.email && (
                          <div
                            className="error col col-12"
                            style={{
                              color: "red",
                              fontSize: "0.5rem",
                              marginTop: "0.3rem",
                            }}
                          >
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div class="input-group input-group-sm mb-3">
                        <Field
                          type="text"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="Company Name"
                          style={{
                            fontSize: "0.7rem",
                            paddingTop: "0.6rem",
                            paddingBottom: "0.6rem",
                          }}
                          name="companyName"
                          id="companyName"
                          value={values.companyName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`form-control ${
                            errors.companyName && touched.companyName
                              ? "input-error"
                              : null
                          }`}
                        />

                        {errors.companyName && touched.companyName && (
                          <div
                            className="error col col-12"
                            style={{
                              color: "red",
                              fontSize: "0.5rem",
                              marginTop: "0.3rem",
                            }}
                          >
                            {errors.companyName}
                          </div>
                        )}
                      </div>
                      <div class="input-group input-group-sm mb-3 ">
                        <label
                          for="file-upload"
                          class="custom-file-upload"
                          style={{ position: "relative" }}
                        >
                          <input
                            id="file-upload"
                            type="file"
                            class="form-control fileChoice"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="Company Logo"
                            style={{
                              fontSize: "0.7rem",
                              paddingTop: "0.6rem",
                              paddingBottom: "0.6rem",
                            }}
                          ></input>
                          <div
                            style={{
                              fontSize: "0.7rem",
                              color: "#6D767E",
                              position: "absolute",
                              top: "0.25rem",
                              left: "0.5rem",
                            }}
                          >
                            Attach Company Logo
                          </div>
                        </label>
                      </div>

                      <div
                        class="input-group input-group-sm mb-3 passwordGuy"
                        style={{ position: "relative" }}
                      >
                        <Field
                          type="password"
                          class=""
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="************"
                          style={{
                            fontSize: "0.7rem",
                            paddingTop: "0.6rem",
                            paddingBottom: "0.6rem",
                            borderRadius: "3px",
                          }}
                          name="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`form-control passwordInput ${
                            errors.password && touched.password
                              ? "input-error"
                              : null
                          }`}
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
                          class=""
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
                          Sign Up
                        </button>
                      </div>
                      <br />
                      <p
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "200",
                        }}
                      >
                        Already have an account?{" "}
                        <Link to="/Signin">
                          {" "}
                          <b
                            style={{
                              fontWeight: "600",
                              color: "#1070CA",
                            }}
                          >
                            Login
                          </b>
                        </Link>
                      </p>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
