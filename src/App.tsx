import React, { useState } from "react";
import styled from "styled-components";
import CircularTree from "./pages/CircularTree/CircularTree";
import HorizontalTree from "./pages/HorizontalTree/HorizontalTree";
import { Segmented } from "antd";
import "antd/dist/antd.css";
import {
  CartIcon,
  BrushIcon,
  BoxIcon,
  CNCIcon,
  EngineIcon,
  SparkIcon,
  WrenchesIcon,
} from "./icons";

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
          <div style={{ fontSize: "32px", lineHeight: "40px", color: "red" }}>
            <p>
              abc <CartIcon /> <BrushIcon /> <BoxIcon /> <CNCIcon />{" "}
              <EngineIcon /> <SparkIcon /> <WrenchesIcon />
            </p>
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
