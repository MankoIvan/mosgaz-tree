import React, { useEffect, useState } from "react";
//import CircularTree from "./pages/CircularTree/CircularTree";
import HorizontalTree from "./pages/HorizontalTree/HorizontalTree";
import { Segmented, Spin, Switch, Typography } from "antd";
import "antd/dist/antd.css";
import Legend from "./pages/HorizontalTree/components/Legend/Legend";
import LineTree from "./pages/LineTree/LineTree";
import { TData } from "./types";
import { fetchDataFromLocal } from "./api";
import { FrownOutlined } from "@ant-design/icons";
import { LoaderWrapper, Menu, Row } from "./styles";
import { TDataforTree } from "./pages/HorizontalTree/types";

function App() {
  const [page, setPage] = useState<string | number>("Lines");
  const [orientation, setOrientation] = useState(true);
  const [highlightWIP, setHighlightWIP] = useState(false);

  const [treeData, setTreeData] = useState<TData>();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFalied, setLoadingFalied] = useState(false);
  const [isDataMocked, setIsDataMocked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    fetch(
      `https://1cmpg.mospromgaz.ru/mpg_unf/hs/production/gettree?id=${params.get(
        "id"
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic RXhjaGFuZ2VfUHJvZDpFeDEzX1ByIWQ=",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTreeData(data);
        setLoadingFalied(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setLoadingFalied(true);
      });
  }, []);

  useEffect(() => {
    loadingFalied &&
      fetchDataFromLocal()
        .then((data) => {
          setTreeData(data);
          setLoadingFalied(false);
          setIsLoading(false);
          setIsDataMocked(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setLoadingFalied(true);
        });
  }, [loadingFalied]);

  const getContent = () => {
    switch (page) {
      case "Classic":
        return (
          <HorizontalTree
            orientation={orientation}
            treeData={treeData as TDataforTree}
          />
        );
      //      case "Circular":
      //        return <CircularTree />;
      case "Lines":
        return <LineTree treeData={treeData} highlightWIP={highlightWIP} />;
      default:
        return "wrong page";
    }
  };

  return isLoading ? (
    <LoaderWrapper>
      <Spin size="large" tip="Loading..." />
    </LoaderWrapper>
  ) : loadingFalied ? (
    <LoaderWrapper>
      <Typography.Title level={3}>
        <FrownOutlined /> Loading failed
      </Typography.Title>
      <Typography.Text>Please check the console output</Typography.Text>
    </LoaderWrapper>
  ) : (
    <>
      <Menu>
        <Segmented
          options={["Classic", "Lines"]}
          value={page}
          onChange={setPage}
        />
        {page === "Classic" && (
          <>
            <Row>
              <Typography.Text>Orientation</Typography.Text>
              <Switch checked={orientation} onChange={setOrientation} />
            </Row>
          </>
        )}
        {page === "Lines" && (
          <>
            <Row>
              <Typography.Text>Highlight WIP</Typography.Text>
              <Switch checked={highlightWIP} onChange={setHighlightWIP} />
            </Row>
          </>
        )}
        {isDataMocked && (
          <Typography.Text strong>ALL DATA IS MOCKED</Typography.Text>
        )}
        <Legend />
      </Menu>
      {getContent()}
    </>
  );
}

export default App;
