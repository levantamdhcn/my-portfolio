import React from 'react'
import { Angular, JavaScript, TypeScript, React as ReactIcon, NodeJS, Github, Gitlab, HTML, CSS, SASS, LESS, LeafLet, OpenLayers } from '@/assets'
import SectionWrapper from '@/components/SectionWrapper'
import { Grid } from '@mui/material'
import SkillItem from './SkillItem'

const skills = [
  {
    icons: [
      JavaScript,
      TypeScript
    ],
    title: 'JavaScript & TypeScript',
    description: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.'
  },
  {
    icons: [
      Angular,
      ReactIcon
    ],
    title: 'Angular & React',
    description: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.'
  },
  {
    icons: [
      NodeJS
    ],
    title: 'Node.js',
    description: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.'
  },
  {
    icons: [
      Github,
      Gitlab
    ],
    title: 'Github & Gitlab',
    description: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.'
  },
  {
    icons: [
      HTML,
      CSS
    ],
    title: 'HTML & CSS',
    description: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.'
  },
  {
    icons: [
      SASS,
      LESS
    ],
    title: 'Sass & LESS',
    description: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.'
  },
  {
    icons: [
      LeafLet,
      OpenLayers
    ],
    title: 'Leaflet & OpenLayers',
    description: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.'
  }
]

const Skill = () => {
  return (
    <SectionWrapper title={"Skills & Technologies"}>
      <Grid container spacing={4}>
        {skills.map((skill) => (
          <Grid item xs={4}>
            <SkillItem
              icons={skill.icons}
              title={skill.title}
              description={skill.description}
            />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

export default Skill