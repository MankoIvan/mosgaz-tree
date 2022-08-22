import React, { useState } from 'react';
import { CustomNodeElementProps } from 'react-d3-tree/lib/types/common';
import { Box, Typography, Stepper, Step, StepLabel, LinearProgress } from '@mui/material';

type TForeignObjectProps = {
  width: number,
  height: number,
  x: number,
  y: number
}

const TreeNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps
}: CustomNodeElementProps & { foreignObjectProps: TForeignObjectProps }) => {
  const isRootNode = nodeDatum.__rd3t.depth === 0;
  const isBranchNode = !!nodeDatum.children?.length && !isRootNode;
  const isLeafNode = !nodeDatum.children?.length && !isRootNode;
  //console.log(nodeDatum);   

  const progress: number =  100 * nodeDatum.attributes!.operations.filter((item: any) => item.done).length / nodeDatum.attributes!.operations.length



  return (
    <g onClick={toggleNode} strokeWidth={0}>
      {isRootNode && (
        <>
          <circle r={18} fill="#adadad" />
          <circle r={16} fill="#fff" />
          <circle r={14} fill="#adadad" />
        </>
      )}
      {isLeafNode && (
        <>
          <circle r={18} fill="#578aef" />
          <circle r={16} fill="#fff" />
          <circle r={14} fill="#578aef" />
        </>
      )}
      {isBranchNode && (
        <>
          <rect
            x="-18"
            y="-18"
            width="36"
            height="36"
            fill="#adadad"
            transform="rotate(45)"
            rx="4"
          />
          <rect
            x="-16"
            y="-16"
            width="32"
            height="32"
            fill="#fff"
            transform="rotate(45)"
            rx="4"
          />
          <rect
            x="-14"
            y="-14"
            width="28"
            height="28"
            fill="#adadad"
            transform="rotate(45)"
            rx="4"
          />
        </>
      )}
      <foreignObject {...foreignObjectProps}>
        <Box sx={{
          width: '100%',
          borderRadius: '0 0 10px 10px',
          overflow: 'hidden',
          boxShadow: '0 5px 5px 0 #D7DBDD'
        }}>
          <Box sx={{
            width: '100%',
            backgroundColor: isLeafNode ? '#578aef' : '#adadad',
            padding: '10px'
          }}>
            <Typography align='center'>
              {nodeDatum.attributes!.product_name}
            </Typography>
          </Box>
          <Box sx={{
            width: '100%',
            backgroundColor: '#F2F3F4',
          }}>

            <LinearProgress value={progress} variant={"determinate"}/>
            <Typography align='center'>
              {Math.round(progress)}%
            </Typography>

            {/* <Stepper>
              {nodeDatum.attributes!.operations.map((item: {
                operation: string,
                area: string,
                done: boolean
              }, index: number) => {
                return (
                  <Step completed={item.done} key={index}>
                    <StepLabel />
                  </Step>
                )
              })}
            </Stepper> */}
          </Box>
        </Box>
      </foreignObject>
    </g >
  );
}

export default TreeNode