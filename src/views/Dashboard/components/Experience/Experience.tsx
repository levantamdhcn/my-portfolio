import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Box, Grid, ThemeOptions } from "@mui/material";
import ExperienceItem from "./ExperienceItem";
import { makeStyles } from "@mui/styles";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from '@mui/icons-material/Work';

const eduExperiences = [
  {
    icon: "",
    time: {
      from: "2019",
      to: "Present",
    },
    title: "Academic Degree",
    description:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    icon: "",
    time: {
      from: "2017",
      to: "2013",
    },
    title: "Bachelor’s Degree",
    description:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    icon: "",
    time: {
      from: "2013",
      to: "2009",
    },
    title: "Honours Degree",
    description:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

const workExperiences = [
  {
    icon: "",
    time: {
      from: "2019",
      to: "Present",
    },
    title: "Web Designer",
    description:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    icon: "",
    time: {
      from: "2017",
      to: "2013",
    },
    title: "Front-End Developer",
    description:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    icon: "",
    time: {
      from: "2013",
      to: "2009",
    },
    title: "Back-End Developer",
    description:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

const useStyles = makeStyles((theme: ThemeOptions) => ({
  timelineWrapper: {
    position: 'relative',
    padding: 30,
    boxSizing: 'border-box',
    boxShadow: theme.shadow.main,
    backgroundColor: theme.color.white,
    borderRadius: 20,
  },
  line: {
    position: 'absolute',
    width: '1px',
    backgroundColor: theme.color.danger,
    top: '30px',
    bottom: '30px',
    left: '34px',
  }
}));

const Experience = () => {
  const classes = useStyles();

  return (
    <SectionWrapper title="Experience">
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Box className={classes.timelineWrapper}>
              {eduExperiences.map((ex) => {
                const { icon, time, title, description } = ex;
                return (
                  <ExperienceItem
                    icon={<SchoolIcon />}
                    time={time}
                    title={title}
                    description={description}
                  />
                );
              })}
              <span className={classes.line}></span>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.timelineWrapper}>
              {workExperiences.map((ex) => {
                const { icon, time, title, description } = ex;
                return (
                  <ExperienceItem
                    icon={<WorkIcon />}
                    time={time}
                    title={title}
                    description={description}
                  />
                );
              })}
              <span className={classes.line}></span>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default Experience;
