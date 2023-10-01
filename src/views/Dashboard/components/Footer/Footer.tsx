import React from 'react'
import { Box, ThemeOptions, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: ThemeOptions) => ({
    footer: {
        backgroundColor: theme.color.mainColor,
        padding: '40px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#9c9ab3',
        fontSize: '14px !important'
    }
}));

const Footer = () => {
    const classes = useStyles();

  return (
    <Box className={classes.footer}>
        <Typography className={classes.text}>© {new Date().getFullYear()} Le Van Tam.</Typography>
    </Box>
  )
}

export default Footer