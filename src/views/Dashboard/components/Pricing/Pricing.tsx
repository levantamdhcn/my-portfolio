import React from 'react'
import SectionWrapper from "@/components/SectionWrapper";
import { Grid } from '@mui/material';

const Pricing = () => {
  return (
    <SectionWrapper title="Recent Works">
      <Grid container spacing={3}>
        {/* {works.map((work) => {
          const { title, image, url } = work;
          return (
            <Grid item xs={4}>
              <WorkItem title={title} image={image} url={url} />
            </Grid>
          );
        })} */}
      </Grid>
    </SectionWrapper>
  )
}

export default Pricing