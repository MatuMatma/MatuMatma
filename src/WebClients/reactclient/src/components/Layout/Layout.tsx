import React from 'react'
import {Header, Footer, Routers} from '../../components'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
        <div>
          <Routers />
        </div>
      <Footer />
    </>
  )
  }
  
  export default Layout
  