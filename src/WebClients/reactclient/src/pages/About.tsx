import React from 'react'
import { Helmet } from '../components'

import '../styles/about.css';

const About: React.FC = () => {
  return (
    <Helmet title="About">
    <div className='about'>About</div>
    </Helmet>
  )
}

export default About