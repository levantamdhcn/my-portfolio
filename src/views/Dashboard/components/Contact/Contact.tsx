import React, { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Box, Grid, Link, ThemeOptions, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Map } from "@/assets";
import TextField from "@/components/TextField/TextField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import SpaceElement from "@/components/SpaceElement";

const useStyles = makeStyles((theme: ThemeOptions) => ({
  titleContainer: {
    backgroundImage: `url(${Map})`,
  },
  title: {
    color: theme.color.textDark,
    fontSize: `23px !important`,
    fontWeight: "600 !important",
  },
  text: {
    color: theme.color.lightComet,
    fontSize: "16px !important",
  },
  link: {
    textDecoration: "unset !important",
    color: `${theme.color.danger} !important`,
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const setField = (field: string, value?: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <SectionWrapper title={"Get In Touch"}>
      <Grid container>
        <Grid item xs={4}>
          <Box className={classes.titleContainer}>
            <Typography className={classes.title}>
              Let's talk about everything!
            </Typography>
            <Typography className={classes.text}>
              Don’t like forms? Send me an{" "}
              <Link className={classes.link} href="mailto:name@example.com">
                email
              </Link>
              . 👋
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  placeholder="Name"
                  value={data.name}
                  onChange={(e: any) => setField("name", e?.target?.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder="Email"
                  value={data.name}
                  onChange={(e: any) => setField("name", e?.target?.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Subject"
                  value={data.name}
                  onChange={(e: any) => setField("name", e?.target?.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextAreaField
                  placeholder="Message"
                  value={data.name}
                  onChange={(e: any) => setField("name", e?.target?.value)}
                  minRows={3}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <SpaceElement height={75} />
    </SectionWrapper>
  );
};

export default Contact;
