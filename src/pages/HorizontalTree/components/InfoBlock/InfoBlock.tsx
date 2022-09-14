// @ts-nocheck
import { Box, LinearProgress, Typography } from '@mui/material'
import { grey, yellow, green } from '@mui/material/colors'
import React from 'react'
import { TreeNodeDatum } from 'react-d3-tree/lib/types/common';
import { TForeignObject } from '../../types';
import Details from '../Details/Details';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import Quantity from '../Quantity/Quantity';

type TNodeIcon = {
  infoBlockProps: TForeignObject;
  nodeDatum: TreeNodeDatum;
}

const InfoBlock = ({ infoBlockProps, nodeDatum }: TNodeIcon) => {

  const progress: number = 100 * nodeDatum.attributes!.operations.filter((item: any) => item.done).length / nodeDatum.attributes!.operations.length;

  const headerColor = (status: number) => {
    if (status === 0) return grey[500];
    if (status === 1) return `linear-gradient(0.5turn, ${yellow[500]}, ${grey[100]})`;
    if (status === 2) return `linear-gradient(0.5turn, ${green[500]}, ${grey[100]})`;
  }

  return (
    <foreignObject {...infoBlockProps} style={{cursor: 'grab'}}>
      <Box sx={{
        width: '100%',
        borderRadius: '0 0 10px 10px',
        overflow: 'hidden',
        boxShadow: `0 5px 5px 0 ${grey[500]}`
      }}>
        <Box sx={{
          width: '100%',
          background: headerColor(nodeDatum.attributes!.status),
          padding: '10px',
          boxSizing: 'border-box'
        }}>
          <Typography align='center'>
            {nodeDatum.attributes!.product_name}
          </Typography>
        </Box>
        <Box sx={{
          backgroundColor: grey[100]
        }}>
          <LinearProgress value={progress} variant={"determinate"} sx={{
            mt: 1
          }} />
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
            <ProgressIndicator
              nodeDatum={nodeDatum}
              progress={progress}
            />
            <Details
              nodeDatum={nodeDatum}
            />
            <Quantity quantity={nodeDatum.attributes!.quantity} />
          </Box>
        </Box>
      </Box>
    </foreignObject>
  )
}

export default InfoBlock