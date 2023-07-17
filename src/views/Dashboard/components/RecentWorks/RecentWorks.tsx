import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import {
  ChatApp,
  CovidNews,
  CovidTracker,
  OnlineCoures,
  Travel,
} from "@/assets";
import { Grid } from "@mui/material";
import WorkItem from "./Work/Work";

const works = [
  {
    title: "Covid Tracker Dashboard",
    image: CovidTracker,
    url: "",
  },
  {
    title: "Covid News",
    image: CovidNews,
    url: "",
  },
  {
    title: "Covid News",
    image: CovidNews,
    url: "",
  },
  {
    title: "E-Learning Platform",
    image: OnlineCoures,
    url: "",
  },
  {
    title: "Travel Website",
    image: Travel,
    url: "",
  },
  {
    title: "Chat App",
    image: ChatApp,
    url: "",
  },
];

const RecentWorks = () => {
  return (
    <SectionWrapper title="Recent Works">
      <Grid container spacing={3}>
        {works.map((work) => {
          const { title, image, url } = work;
          return (
            <Grid item xs={4}>
              <WorkItem title={title} image={image} url={url} />
            </Grid>
          );
        })}
      </Grid>
    </SectionWrapper>
  );
};

export default RecentWorks;
