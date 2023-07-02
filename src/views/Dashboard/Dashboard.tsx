import React from 'react'
import About from './components/About'
import Overview from './components/Overview'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Overview />
      <About />
    </div>
  )
}

export default Dashboard