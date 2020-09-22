import React, { useState } from "react";
import "./App.css";

//components
import PreviewSlide from "./components/PreviewSlide";
import NavButton from "./components/NavButton";
import MainBlock from "./components/MainBlock";
import Footer from "./components/Footer";

import { CONTENT } from "./content";

function App() {
  const [data, setData] = useState(CONTENT);

  const [active, setActive] = useState(1);

  const next = (count) => {
    if (count < 3) {
      setActive(count + 1);
    }
  };

  const prev = (count) => {
    if (count > 1 && count <= 3) {
      setActive(count - 1);
    }
  };

  const selectActive = (id) => {
    setActive(id);
  };
  return (
    <div className="App">
      <div style={{ marginLeft: "20%", marginTop: "200px" }} className="w-80">
        <div
          style={{ height: "80px" }}
          className="flex align-items-center space-between"
        >
          <PreviewSlide
            data={data}
            selectActive={selectActive}
            active={active}
          />
          <NavButton active={active} next={next} prev={prev} />
        </div>
        <hr
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "black",
            marginTop: "-53px",
          }}
        />
        <MainBlock data={data} active={active} />
        <Footer data={data} active={active} />
      </div>
    </div>
  );
}

export default App;
