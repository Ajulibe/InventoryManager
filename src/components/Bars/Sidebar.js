import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div
      class="col col-1 col-md-1 slider"
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
            paddingRight: "3.3rem",
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
            <Link to="overAdmin" className="linkTag">
              <div
                className="mt-2 text-center"
                style={{
                  borderLeft: "2px solid #006CF1",
                  marginLeft: "-0.9rem",
                  paddingLeft: "0.6rem",
                }}
              >
                <img
                  src={props.all}
                  alt="all"
                  class="image"
                  style={{ width: "1.5rem" }}
                />
                <p style={{ textDecoration: "none" }}>All Inventory</p>
              </div>
            </Link>

            <Link
              to="assignroles"
              className="linkTag"
              style={{ textDecoration: "none" }}
            >
              <div className="mt-4">
                <img
                  src={props.roleswhite}
                  alt="roleswhite"
                  class="image"
                  style={{ width: "1.5rem" }}
                />
                <p style={{ textDecoration: "none" }}>Assign Roles</p>
              </div>
            </Link>

            <Link to="createbranch" className="linkTag">
              <div className="mt-4">
                <img
                  src={props.brancheswhite}
                  alt="branches"
                  class="image"
                  style={{ width: "1.5rem" }}
                />
                <p style={{ textAlign: "center", textDecoration: "none" }}>
                  Create Branches
                </p>
              </div>
            </Link>
          </div>

          {/* second set */}
          <div
            style={{
              marginTop: "8rem",
              textAlign: "center",
            }}
            onClick={props.Logout}
          >
            <span className="linkTag">
              {" "}
              <div>
                <img
                  src={props.exit}
                  alt="exit"
                  class="image"
                  style={{ width: "1.5rem" }}
                />
                <p style={{ textDecoration: "none" }}>Log Out</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
