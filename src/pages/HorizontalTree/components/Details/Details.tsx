import {
  Box,
  Divider,
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { TreeNodeDatum } from "react-d3-tree/lib/types/common";
import InfoIcon from "@mui/icons-material/Info";
import { Descriptions, Modal } from "antd";

const Details = ({ nodeDatum }: { nodeDatum: TreeNodeDatum }) => {
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const detailsData = [
    {
      key: "Номер изделия",
      value: nodeDatum.attributes!.product_number,
    },
    {
      key: "Статус готовности",
      value:
        nodeDatum.attributes!.status === 0
          ? "Нет задания"
          : nodeDatum.attributes!.status === 1
          ? "В работе"
          : "Готово",
    },
    {
      key: "Текущая ревизия изделия",
      value: nodeDatum.attributes!.product_revision,
    },
    {
      key: "Ревизия изделия в работе",
      value: nodeDatum.attributes!.task_revision,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <LightTooltip
        arrow
        title={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {detailsData.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                      }}
                    >
                      {item.key}
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                      }}
                    >
                      {item.value}
                    </Box>
                  </Box>
                  {index !== detailsData.length - 1 && <Divider />}
                </Fragment>
              );
            })}
          </Box>
        }
      >
        <IconButton
          color="primary"
          sx={{
            position: "static",
          }}
          onClick={showModal}
        >
          <InfoIcon />
        </IconButton>
      </LightTooltip>
      <Modal
        title={nodeDatum.name}
        open={isModalOpen}
        //onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <Descriptions bordered layout="vertical">
          {detailsData.map((item) => (
            <>
              <Descriptions.Item label={item.key}>
                {item.value}
              </Descriptions.Item>
            </>
          ))}
        </Descriptions>
      </Modal>
    </>
  );
};

export default Details;
