import React from "react";

const SidebarTeller = (props) => {
  return (
    <div
      class="col col-1 col-md-1 slider"
      style={{
        height: "6rem",
        marginTop: "22rem",
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
            <div
              style={{
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

          {/* second set */}
        </div>
      </div>
    </div>
  );
};

export default SidebarTeller;
