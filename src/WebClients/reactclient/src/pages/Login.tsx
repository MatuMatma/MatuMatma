import React from 'react'
import { Helmet } from '../components'

import '../styles/login.css';

const Login: React.FC = () => {
  return (
    <Helmet title="Login">
    <div className='login'>Login</div>
    </Helmet>
  )
}

export default Login