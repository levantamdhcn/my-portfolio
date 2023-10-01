import React from 'react'
// import SpaceElement from '../../components/SpaceElement'
import About from './components/About'
import Experience from './components/Experience'
// import Fact from './components/Fact'
import Overview from './components/Overview'
import RecentWorks from './components/RecentWorks'
import Skill from './components/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9ff' }}>
      <Overview />
      <About />
      {/* <SpaceElement height={50} /> */}
      {/* <Fact /> */}
      <Skill />
      <Experience />
      <RecentWorks />
      <Contact />
      <Footer />
    </div>
  )
}

export default Dashboard