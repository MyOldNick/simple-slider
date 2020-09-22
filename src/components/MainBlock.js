import React, { Fragment } from "react";

export default function MainBlock(props) {
  const { data, active } = props;

  return (
    <Fragment>
      <div style={{ marginTop: "120px" }} className="flex text-start">
        <div
          style={{
            border: "2px solid black",
            backgroundColor: "white",
            width: "250px",
            height: "250px",
          }}
        >
          <img src={data[active - 1].image} width="100%" height="100%" />
        </div>
        <div style={{ width: "35%", marginLeft: "20px", marginTop: "-30px" }}>
          <div className="flex space-between">
            <h1>{data[active - 1].year} рік</h1>
            <p style={{marginTop: '40px', color: 'gray'}}>{active} - 3</p>
          </div>
          {data[active - 1].title}
        </div>
      </div>
    </Fragment>
  );
}
