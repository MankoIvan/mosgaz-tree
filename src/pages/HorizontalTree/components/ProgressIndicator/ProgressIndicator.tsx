import { Box, IconButton, Step, StepLabel, Stepper, styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material'
import React from 'react'
import { TreeNodeDatum } from 'react-d3-tree/lib/types/common';

type TProgressIndicator = {
  nodeDatum: TreeNodeDatum;
  progress: number
}

const ProgressIndicator = ({ nodeDatum, progress }: TProgressIndicator) => {

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));


  return (
    <LightTooltip
      arrow
      title={
        <Stepper orientation='vertical' connector={<></>}>
          {nodeDatum.attributes!.operations.map((item: {
            operation: string,
            area: string,
            oper_code: string,
            area_code: string,
            done: boolean
          }, index: number) => {
            return (
              <Tooltip
                placement='right'
                arrow
                followCursor
                title={
                  <Box>
                    {item.oper_code} - {item.operation}<br />
                    {item.area_code} - {item.area}
                  </Box>
                }>
                <Step completed={item.done} key={index} style={{
                }}>
                  <StepLabel>
                    {item.operation}
                  </StepLabel>
                </Step>
              </Tooltip>
            )
          })}
        </Stepper>
      }
    >
      <IconButton color='primary'>
        {Math.round(progress)}%
      </IconButton>
    </LightTooltip>
  )
}

export default ProgressIndicator;