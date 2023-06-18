import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  )
}

export default MainLayout