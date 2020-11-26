import React from "react";

const Allrolesmodal = () => {
  return (
    <div
      className="container"
      style={{
        border: "1px solid red",
        position: "relative",
        marginLeft: "-25%",
      }}
    >
      <div className="row">
        <div
          className="col col-10 table-responsive"
          style={{
            height: "70vh",
            zIndex: "30000",
            border: "1px solid red",
            width: "80vw",
          }}
        >
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allrolesmodal;
