import React from 'react'
import { Typography } from '@mui/material';

export interface ISectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: ISectionTitleProps) => {
  return (
    <Typography variant='h2' component="h2">
      {title}
    </Typography>
  )
}

export default SectionTitle