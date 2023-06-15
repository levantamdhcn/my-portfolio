import React from "react";
import { Box, Container } from "@mui/material";

export interface ISectionWrapperProps {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}

const SectionWrapper = ({ title, children }: ISectionWrapperProps) => {
  return (
    <Container component={"div"}>
      <Box>
        
      </Box>
    </Container>
  );
};

export default SectionWrapper;
