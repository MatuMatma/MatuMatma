import React from 'react'
import { Helmet } from '../components'

import '../styles/home.css';

const Home: React.FC = () => {
  return (
    <Helmet title="Home">
    <div className='home'>Home</div>
    </Helmet>
  )
}

export default Home