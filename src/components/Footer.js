import React, { Fragment } from "react";

export default function Footer(props) {
    
  const { data, active } = props;

  return (
    <Fragment>
      <div style={{ marginTop: "50px" }} className="w-80 text-start">
        <div className='flex'>
          <h4>Цього року в Україні </h4>
          <img
            src="https://img.icons8.com/color/48/000000/ukraine.png"
            style={{
              width: "30px",
              height: "30px",
              marginTop: "19px",
              marginLeft: "10px",
            }}
          />
          <div style={{ width: "60%", marginTop: "25px" }}>
            <hr style={{ marginLeft: "10px" }} />
          </div>
        </div>
        <p className='w-80'>{data[active - 1].description}</p>
      </div>
    </Fragment>
  );
}
