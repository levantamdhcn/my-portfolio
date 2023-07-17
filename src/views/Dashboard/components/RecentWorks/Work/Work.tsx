import React, { useState } from "react";
import { Avatar, Box, Card, ThemeOptions, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LaunchIcon from "@mui/icons-material/Launch";

export interface IWorkProps {
  image: string;
  title: string;
  url: string;
}

const useStyles = makeStyles((theme: ThemeOptions) => ({
  workContainer: {
    position: "relative",
    borderRadius: "20px !important",
    boxShadow: `${theme.shadow.main} !important`,
    maxWidth: "360px",
    cursor: "pointer",
  },
  thumb: {
    minWidth: "340px",
    minHeight: "275px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  detail: {
    color: theme.color.white,
    position: "absolute",
    backgroundColor: theme.color.blue,
    opacity: 0.9,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  title: {
    margin: "0 0 10px !important",
    padding: "0 20px",
    transform: "translateY(30px)",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: "20px",
    left: "20px",
    position: "absolute",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: theme.color.yellow,
    cursor: "pointer",
    '&:hover': {
      scale: 1.1,
      transition: "all 0.2s",
    }
  },
}));

const WorkItem = ({ image, title, url }: IWorkProps) => {
  const classes = useStyles();
  const [showDetail, setShowDetail] = useState(false);

  const handleShowDetail = (state: boolean) => {
    setShowDetail(state);
  };

  return (
    <Card
      className={classes.workContainer}
      onMouseOver={() => handleShowDetail(true)}
      onMouseOut={() => handleShowDetail(false)}
    >
      <Box className={classes.thumb}>
        <Avatar variant="square" src={image} sx={{ scale: 2 }} />
      </Box>
      <Box
        className={classes.detail}
        sx={{ backgroundColor: `${showDetail ? "#7a7ae7" : "transparent"}` }}
      >
        <Typography
          className={classes.title}
          fontWeight={700}
          fontSize={20}
          component={"h4"}
          position={"absolute"}
          top={60}
          sx={{
            opacity: `${showDetail ? "1" : "0"}`,
            transform: `${showDetail ? "translateY(0)" : "translateY(30px)"}`,
            transition: "all cubic-bezier(0.075, 0.82, 0.165, 1) 1s",
          }}
        >
          {title}
        </Typography>
        <div className={classes.icon} style={{ opacity: `${showDetail ? "1" : "0"}` }}>
          <LaunchIcon />
        </div>
      </Box>
    </Card>
  );
};

export default WorkItem;
