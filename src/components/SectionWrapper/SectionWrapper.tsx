import React from "react";
import { Container, ThemeOptions, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { dotBg } from "@/assets";
import SpaceElement from "../SpaceElement";
import "./index.scss";

export interface ISectionWrapperProps {
  title?: string;
  children: string | JSX.Element | JSX.Element[];
}

const useStyles = makeStyles((theme: ThemeOptions) => ({
  title: {
    fontSize: "36px !important",
    marginLeft: "14px !important",
    position: "relative",
    fontWeight: "700 !important",
    color: theme.color.mainColor,
    "&::before": {
      content: '""',
      backgroundImage: `url(${dotBg})`,
      display: "block",
      height: "37px",
      left: "-14px",
      top: "-14px",
      position: "absolute",
      width: "37px",
    },
  },
  overviewWrapper: {
    padding: 20,
    boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
    transition:
      "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
    borderRadius: 20,
  },
  profileOverview: {},
}));

const SectionWrapper = ({ title, children }: ISectionWrapperProps) => {
  const classes = useStyles();

  return (
    <Container component={"div"}>
      {title && (
        <>
          <SpaceElement height={110} />
          <Typography variant="h2" component="h2" className={classes.title}>
            {title}
          </Typography>
          <SpaceElement height={60} />
        </>
      )}
      {children}
    </Container>
  );
};

export default SectionWrapper;
