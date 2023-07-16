import React from 'react'
import { Avatar, Box, Container, ThemeOptions, Typography } from '@mui/material';
import { myAvatar } from '../../../../assets';
import { makeStyles } from '@mui/styles';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import ScrollDown from './ScrollDown';
import MainButton from '../../../../components/MainButton';

const socials = [
  {
    link: 'https://www.facebook.com/lvtannn',
    icon: <Facebook />,
  },
  {
    link: 'https://www.facebook.com/lvtannn',
    icon: <Instagram />,
  },
  {
    link: 'https://www.facebook.com/lvtannn',
    icon: <Twitter />,
  },
  {
    link: 'https://www.facebook.com/lvtannn',
    icon: <LinkedIn />,
  },
  {
    link: 'https://www.facebook.com/lvtannn',
    icon: <Twitter />,
  }
]

const useStyles = makeStyles((theme: ThemeOptions) => ({
  box: {
    backgroundColor: theme.color.mainColor,
    height: '100vh',
  },
  overviewContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    width: '100%',
    textAlign: 'center',
    color: theme.color.white,
    fontWeight: '600 !important',
    fontSize: '38px !important',
    marginBottom: '10px',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    color: theme.color.white,
    fontSize: 16,
    fontWeight: '400 !important',
    marginBottom: '20px',
  },
  socials: {
    width: '100%',
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginBottom: '25px',
  },
  socialItem: {
    '&:not(:last-child)': {
      marginRight: 24,
    },
  },
  socialLink: {
    color: theme.color.white,
    '&:hover': {
      color: theme.color.yellow,
    }
  },
  button: {
    borderRadius: '60px !important',
    backgroundColor: `${theme.color.danger} !important`,
    padding: '12px 32px !important',
    height: '42px',
    fontWeight: '700 !important',
    fontSize: '16px !important',
    '&:focus': {
      outline: 'none',
    }
  }
}));

const Overview = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container maxWidth="md" sx={{ height: "100%" }}>
        <div className={classes.overviewContainer}>
          <Avatar
            alt="Travis Howard"
            src={myAvatar}
            sx={{ width: 108, height: 108, marginBottom: "22px" }}
          />

          <Typography className={classes.name}>Le Van Tam</Typography>
          <Typography className={classes.title}>
            I’m a Front-end Developer
          </Typography>
          <ul className={classes.socials}>
            {socials.map((social) => (
              <li className={classes.socialItem}>
                <a href={social.link} className={classes.socialLink}>{social.icon}</a>
              </li>
            ))}
          </ul>

          <MainButton>
            Hire me
          </MainButton>
          {/* <Button variant="contained" className={classes.button} sx={{ textTransform: 'none !important'}}>Hire me</Button> */}
          
          <ScrollDown />
        </div>
      </Container>
    </Box>
  );
}

export default Overview