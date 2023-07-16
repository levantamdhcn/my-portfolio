import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Box, Grid } from "@mui/material";
import ExperienceItem from "./ExperienceItem";

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

const Experience = () => {
  return (
    <SectionWrapper title="Experience">
      <Box>
        <Grid container>
          <Grid item xs={6}>
            {eduExperiences.map((ex) => {
              const { icon, time, title, description } = ex;
              return (
                <ExperienceItem
                  icon={icon}
                  time={time}
                  title={title}
                  description={description}
                />
              );
            })}
          </Grid>
          <Grid item xs={6}>
            {workExperiences.map((ex) => {
              const { icon, time, title, description } = ex;
              return (
                <ExperienceItem
                  icon={icon}
                  time={time}
                  title={title}
                  description={description}
                />
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default Experience;
