import React from "react";
import { Box, Container, ThemeOptions, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { dotBg } from "../../assets/images";

export interface ISectionWrapperProps {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}

const useStyles = makeStyles((theme: ThemeOptions) => ({
  title: {
    fontSize: '36px !important',
    marginLeft: '14px !important',
    position: 'relative',
    fontWeight: '700 !important',
    color: theme.color.mainColor,
    '&::before': {
      content: '""',
      backgroundImage: `url(${dotBg})`,
      display: 'block',
      height: '37px',
      left: '-14px',
      top: '-14px',
      position: 'absolute',
      width: '37px',
    }
  }
}));

const SectionWrapper = ({ title, children }: ISectionWrapperProps) => {
  const classes = useStyles();

  return (
    <Container component={"div"}>
      <Typography variant="h2" component="h2" className={classes.title}>
        {title}
      </Typography>
    </Container>
  );
};

export default SectionWrapper;
