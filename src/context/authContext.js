import React, { useReducer } from "react";
import trackerApi from "../api/tracker";

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
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "createUserRoles":
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

  //VIEW ROLES
  // const viewRoles = async () => {
  //   try {
  //     const response = await trackerApi.post("/users/"
  //      );

  //     await localStorage.setItem("token", response.data.accessToken);
  //     dispatch({ type: "signin", payload: response.data });
  //     console.log(response.data);
  //   } catch (err) {
  //     dispatch({
  //       type: "add_error",
  //       payload: "Something went wrong with sign in",
  //     });

  //     console.log(err);
  //   }
  // };

  //VIEW ROLES
  const createproduct = async (id, name, category, price) => {
    const token = await localStorage.getItem("token");
    console.log(token);
    try {
      const response = await trackerApi.post("/products", {
        inventory: "introTech",
        items: [
          {
            id: id,
            name: name,
            category: category,
            branch: "odeku",
            price: price,
            image: "2244wdef.jpeg",
          },
        ],
      });

      // dispatch({ type: "signin", payload: response.data });
      console.log(response.data);
    } catch (err) {
      // dispatch({
      //   type: "add_error",
      //   payload: "Something went wrong with sign in",
      // });

      console.log(err);
    }
  };

  //BOUND ACTIONS
  const boundActions = {
    signin,
    createUserRoles,
    createproduct,
  };

  return (
    <authContext.Provider value={{ state, ...boundActions }}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
