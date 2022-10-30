import React, { useState } from "react";
import styled from "styled-components";
import CircularTree from "./pages/CircularTree/CircularTree";
import HorizontalTree from "./pages/HorizontalTree/HorizontalTree";
import { Segmented } from "antd";
import "antd/dist/antd.css";

import { icons } from "./icons";

const Menu = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
`;

function App() {
  const [page, setPage] = useState<string | number>("Horizontal");

  const getContent = () => {
    switch (page) {
      case "Horizontal":
        return <HorizontalTree />;
      case "Circular":
        return <CircularTree />;
      case "Icons":
        return (
          <div
            style={{
              display: "flex",
              gap: "10px",
              padding: "10px",
            }}
          >
            {Object.entries(icons).map(([name, src]) => {
              return (
                <img
                  src={src}
                  alt={name}
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "1px solid red",
                  }}
                />
              );
            })}
          </div>
        );
      default:
        return "wrong page";
    }
  };

  return (
    <>
      <Menu>
        <Segmented
          options={["Horizontal", "Circular", "Icons"]}
          value={page}
          onChange={setPage}
        />
      </Menu>
      {getContent()}
    </>
  );
}

export default App;
