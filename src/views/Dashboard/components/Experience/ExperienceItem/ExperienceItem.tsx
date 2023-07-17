import React from "react";
import ReactDOMServer from "react-dom/server";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface IExperienceItemProps {
  time: {
    from: string;
    to: string;
  };
  title: string;
  description: string;
  icon: any;
}

const useStyles = makeStyles((theme) => ({
  timelineContainer: {
    paddingLeft: 50,
    marginBottom: 50,
  },
  icon: {
    position: "absolute",
  },
  content: {
    position: "relative",
  },
}));

const ExperienceItem = ({
  time,
  title,
  description,
  icon,
}: IExperienceItemProps) => {
  const classes = useStyles();
  const [muiIconContent, setMuiIconContent] = React.useState<any>();

  React.useEffect(() => {
    const iconSvg = ReactDOMServer.renderToStaticMarkup(icon);
    const svgIconWithXlmns = iconSvg.replace(
      "<svg ",
      '<svg xmlns="http://www.w3.org/2000/svg" '
    );
    const resultUrl = "url('data:image/svg+xml," + svgIconWithXlmns + "')";
    setMuiIconContent(resultUrl);
    console.log('muiIconContent', muiIconContent);
  }, [icon]);

  return (
    <Box className={classes.timelineContainer}>
      <Box className={classes.content} sx={{
        '&::after': {
          content: muiIconContent,
          background: '#ffffff',
          fontSize: '24px',
          color: '#FF4C60',
          position: 'absolute',
          left: '-58px',
          top: 0,
          zIndex: 1,
          width: 24
        }
      }}>
        <Typography color={"#8B88B1"} fontSize={14}>
          {time.from} - {time.to}
        </Typography>
        <Typography
          component={"h3"}
          fontSize={20}
          margin={"10px 0"}
          fontWeight={700}
          color={"#454360"}
        >
          {title}
        </Typography>
        <Typography color={"#5E5C7F"}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default ExperienceItem;
