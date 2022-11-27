import React, { useState } from "react";
import styled from "styled-components";
import CircularTree from "./pages/CircularTree/CircularTree";
import HorizontalTree from "./pages/HorizontalTree/HorizontalTree";
import { Button, Modal, Segmented, Switch, Typography } from "antd";
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
import { QuestionCircleOutlined } from "@ant-design/icons";
import Legend from "./pages/HorizontalTree/components/Legend/Legend";

const Menu = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`;
const Row = styled.div`
  display: flex;
  gap: 5px;
`;

function App() {
  const [page, setPage] = useState<string | number>("Tree");
  const [orientation, setOrientation] = useState(true);

  const getContent = () => {
    switch (page) {
      case "Tree":
        return <HorizontalTree orientation={orientation} />;
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
          options={["Tree", "Circular", "Icons"]}
          value={page}
          onChange={setPage}
        />
        {page === "Tree" && (
          <>
            <Row>
              <Typography.Text>Orientation</Typography.Text>
              <Switch checked={orientation} onChange={setOrientation} />
            </Row>
            <Legend />
          </>
        )}
      </Menu>
      {getContent()}
    </>
  );
}

export default App;
