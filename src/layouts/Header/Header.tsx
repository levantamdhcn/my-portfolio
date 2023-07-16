import { Box, Container, ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const navs = [
  {
    label: 'Home',
    id: 'home',
  },
  {
    label: 'About',
    id: 'about',
  },
  {
    label: 'Services',
    id: 'services',
  },
  {
    label: 'Experience',
    id: 'experience',
  },
  {
    label: 'Works',
    id: 'works',
  },
  {
    label: 'Blog',
    id: 'blog',
  },
  {
    label: 'Contacts',
    id: 'contacts',
  }
]

const useStyles = makeStyles((theme: ThemeOptions) => ({
  box: {
    zIndex: 99,
    position: 'fixed',
    width: '100%',
    backgroundColor: theme.color.mainColor,
    padding: "20px 0",
    "&. MuiBox-root": {
      backgroundColor: theme.color.mainColor,
    },
    borderBottom: 'solid 1px rgba(255, 255, 255, 0.1)',
  },
  header: {
    color: theme.color.white,
  },
  navContainer: {
    display: 'flex',
    flexBasis: 'auto',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navWrapper: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
  },
  navItem: {
    fontSize: 16,
    fontWeight: 600,
    '&:not(:last-child)': {
      paddingRight: 48,
    }
  },
  navText: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.color.yellow,
    },
    color: theme.color.white,
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container maxWidth="md" className={classes.header}>
        <nav className={classes.navContainer}>
          <a href="">
            <img
              src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/logo-2.svg"
              alt="logo"
            />
          </a>

          <div>
            <ul className={classes.navWrapper}>
              {navs.map((nav) => (
                <li key={nav.id} className={classes.navItem}>
                  <a className={classes.navText}>{nav.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </Box>
  );
};

export default Header;
