import React from "react";
import { Avatar, Box, ThemeOptions, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface ISkillItemProps {
  icons: string[];
  title: string;
  description: string;
}

const useStyles = makeStyles((theme: ThemeOptions) => ({
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "10px",
  },
  title: {
    color: theme.color.textDark,
  },
  description: {
    color: theme.color.lightComet,
  },
}));

const SkillItem = ({ icons, title, description }: ISkillItemProps) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.iconWrapper}>
        {icons.map((icon, idx) => (
          <Avatar
            variant="rounded"
            sx={{ marginLeft: `${idx === 0 ? 0 : "8px"}`, width: 30, height: 30 }}
            src={icon}
          />
        ))}
      </Box>
      <Typography fontWeight={600} className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.description}>{description}</Typography>
    </Box>
  );
};

export default SkillItem;
