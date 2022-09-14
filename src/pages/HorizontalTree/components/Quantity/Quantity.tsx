
import { IconButton } from '@mui/material'
import React from 'react'

const Quantity = ({quantity}: {quantity: number}) => {
  return (
    <IconButton color='primary'>
      {quantity}шт.
    </IconButton>
  )
}

export default Quantity