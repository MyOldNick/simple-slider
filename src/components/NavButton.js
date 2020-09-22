import React, { Fragment } from "react";

export default function NavButton(props) {
    
  const { active, next, prev } = props

  return (
    <Fragment>
      <div
        style={{
          marginRight: "17%",
          marginTop: "-25px",
          width: "104px",
        }}
        className='flex'
      >
        <div
          onClick={() => prev(active)}
          className={active === 1 ? "not-active-button" : "button"}
        >
          <div
            style={{ fontSize: "50px", marginTop: "-17px" }}
            className="unselectable"
          >
            &#8249;
          </div>
        </div>
        <div
          onClick={() => next(active)}
          className={active === 3 ? "not-active-button" : "button"}
          style={active < 3 ? { marginLeft: "-2px" } : { borderLeft: "none" }}
        >
          <div
            style={{ fontSize: "50px", marginTop: "-17px" }}
            className="unselectable"
          >
            &#8250;
          </div>
        </div>
      </div>
    </Fragment>
  );
}
