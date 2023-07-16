import { Box, Typography } from '@mui/material';
import React from 'react'

export interface IExperienceItemProps {
  time: {
    from: string,
    to: string,
  };
  title: string;
  description: string;
  icon: string;
}

const ExperienceItem = ({ time, title, description, icon }: IExperienceItemProps) => {
  return (
    <Box>
      <Box>
        <Typography>{time.from} - {time.to}</Typography>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  )
}

export default ExperienceItem