import { ThemeOptions } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme: ThemeOptions) => ({
  container: {
    position: 'absolute',
    bottom: 40,
    cursor: 'pointer',
  },
  mouseWrapper: {
    boxShadow: 'none',
    textDecoration: 'none',
    color: theme.color.white,
    fontSize: '14px',
    fontWeight: 400,
    '&:hover': {
      color: theme.color.white,
    }
  },
  mouse: {
    border: 'solid 2px #FFF',
    borderRadius: '16px',
    display: 'block',
    margin: 'auto',
    marginTop: '10px',
    height: '26px',
    position: 'relative',
    width: '20px',
  },
  wheel: {
    background: theme.color.white,
    borderRadius: '100%',
    display: 'block',
    position: 'absolute',
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '4px',
    width: '4px',
    animation: 'ani-mouse 2s linear infinite',
  }
}));

const ScrollDown = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <a href="#about" className={classes.mouseWrapper}>
        <span>Scroll Down</span>
        <span className={classes.mouse}>
          <span className={classes.wheel}></span>
        </span>
      </a>
    </div>
  )
}

export default ScrollDown