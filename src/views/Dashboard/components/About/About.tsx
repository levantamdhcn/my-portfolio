import { Avatar, Box, Button, Grid, ThemeOptions, Typography } from "@mui/material";
import React from "react";
import SectionWrapper from "../../../../components/SectionWrapper";
import { myAvatar } from "../../../../assets";
import { makeStyles } from "@mui/styles";
import MainButton from "../../../../components/MainButton";

const useStyles = makeStyles((theme: ThemeOptions) => ({
  overviewWrapper: {
    position: 'relative',
    padding: 20,
    boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
    transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
    borderRadius: 20,
    height: 214,
    boxSizing: 'border-box',
    '&::before': {
      content: '""',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderRight: '15px solid #FFF',
      position: 'absolute',
      left: '-15px',
      top: '20%',
    },
  },
  profileOverview: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  profileText: {
    color: theme.color.lightComet,
    marginBottom: '16px !important',
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <SectionWrapper title="About Me">
        <Grid container alignItems={"center"} justifyContent={'space-between'}>
          <Grid item xs={2}>
            <Avatar
              alt="Travis Howard"
              src={myAvatar}
              sx={{ width: 150, height: 150, marginBottom: "22px" }}
            />
          </Grid>
          <Grid item xs={9}>
            <Box className={classes.overviewWrapper}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className={classes.profileOverview}>
                    <Typography className={classes.profileText}>
                      I am Tam, web developer from Ha Noi, Viet Nam.
                      I am a Full Stack Web Developer who has a passion with learning and development in the field of Information.
                      With over a year experience of develop website, I'm confident that I can meet your requirement and find best solution for your concern.
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MainButton sx={{ maxWidth: '180px' }}>
                        Download CV
                      </MainButton>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  );
};

export default About;
