import React, { Fragment } from "react";

export default function PreviewSlide(props) {
  const { data, active, selectActive } = props;

  return (
    <Fragment>
      {data.map((el) => (
        <div
          key={el.id}
          style={{ display: "flex", flexDirection: "column" }}
          onClick={() => selectActive(el.id)}
        >
          <div className={active === el.id ? "active-slide" : "slide"}>
            <img src={el.image} width="100%" height="100%" />
          </div>
          <p
            className="text-start"
            style={{
              fontSize: "13px",
              marginTop: "10px",
            }}
          ><strong>{el.year}</strong>
          </p>
        </div>
      ))}
    </Fragment>
  );
}
