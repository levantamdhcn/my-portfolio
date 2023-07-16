import React from 'react'
import { ThumbUpOffAlt, LocalCafeOutlined, PeopleOutline } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import SectionWrapper from '../../../../components/SectionWrapper';

const facts = [
  {
    icon: <ThumbUpOffAlt sx={{ color: '#DEDEEA', width: 48, height: 49 }} />,
    number: 198,
    title: 'Projects completed'
  },
  {
    icon: <LocalCafeOutlined sx={{ color: '#DEDEEA', width: 48, height: 49 }} />,
    number: 5670,
    title: 'Cup of coffee'
  },
  {
    icon: <PeopleOutline sx={{ color: '#DEDEEA', width: 48, height: 49 }} />,
    number: 427,
    title: 'Satisfied clients'
  }
]

const useStyles = makeStyles((theme) => ({
  factItem: {
    display: 'flex',
  },
  factRight: {
    marginLeft: 24,
  }
}))

const Fact = () => {
  const classes = useStyles();
  
  return (
    <SectionWrapper>
      <Box>
        <Grid container alignItems={'center'} justifyContent={'space-between'}>
          {facts.map((fact) => (
            <Grid item xs={4} className={classes.factItem}>
              <div>
                {fact.icon}
              </div>
              <div className={classes.factRight}>
                <Typography fontSize={30} fontWeight={700} color={'#454360'}>
                  {fact.number}
                </Typography>
                <Typography color={'#5E5C7F'}>
                  {fact.title}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
}

export default Fact