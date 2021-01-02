import React, { useReducer } from "react";
import trackerApi from "../api/tracker";
import axios from "axios";

//CREATE CONTEXT
const authContext = React.createContext();

//REDUCERS
//authentication reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: "",
        data: action.payload,
      };
    case "signinStaff":
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: "",
        data: action.payload,
      };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "createUserRoles":
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
        showModal: true,
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
      };
    case "closeModal":
      return {
        ...state,
        isAuthenticated: true,
        showModal: false,
      };
    case "viewroles":
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
      };
    default:
      return state;
  }
};

///CREATE PROVIDER
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    data: null,
    errorMessage: "",
    isAuthenticated: false,
    showModal: false,
  });

  //ACTIONS
  //SIGNIN
  const signin = async (username, password) => {
    try {
      const response = await trackerApi.post("/accounts/ownerauthentication", {
        username,
        password,
      });
      await localStorage.setItem("token", response.data.accessToken);
      dispatch({ type: "signin", payload: response.data });
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });

      console.log(err);
    }
  };

  //SIGN STAFF
  const signinStaff = async (username, password) => {
    console.log(username + password);
    try {
      const response = await trackerApi.post("/accounts/staffauthentication", {
        email: username,
        password: password,
        inventory: "introtech",
      });
      await localStorage.setItem("token", response.data.accessToken);
      dispatch({ type: "signinStaff", payload: response.data });
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });

      console.log(err);
    }
  };

  //   CREATE USERS
  const createUserRoles = async (
    email,
    password,
    name,
    role,
    inventory,
    permissions,
    redirectUri
  ) => {
    try {
      console.log(
        email,
        password,
        name,
        role,
        inventory,
        permissions,
        redirectUri
      );
      const response = await trackerApi.post("/accounts/user", {
        email: email,
        password: password,
        name: name,
        role: role,
        inventory: inventory,
        permissions: permissions,
        redirectUri: redirectUri,
      });

      dispatch({ type: "createUserRoles", payload: response.data });
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });

      console.log(err);
    }
  };

  //   LOGOUT
  const logOut = async () => {
    localStorage.clear();
    dispatch({ type: "logout" });
  };

  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };

  //CREATE PRODUCT
  const createproduct = async (
    id,
    name,
    category,
    price,
    imageUrl,
    selectedBranch
  ) => {
    const token = await localStorage.getItem("token");
    // console.log(token);
    console.log(selectedBranch);
    try {
      const response = await axios.post(
        "http://12.96.91.34.bc.googleusercontent.com/api/products",
        {
          inventory: "introTech",
          items: [
            {
              id: id,
              name: name,
              category: category,
              branch: selectedBranch,
              price: price,
              image: `${
                imageUrl === "" ? (imageUrl = "empty") : (imageUrl = imageUrl)
              }`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //BOUND ACTIONS
  const boundActions = {
    signin,
    createUserRoles,
    createproduct,
    logOut,
    closeModal,
    signinStaff,
  };

  return (
    <authContext.Provider value={{ state, ...boundActions }}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
