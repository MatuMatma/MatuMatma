import React from 'react'
import './header.css'

import { Container, Row } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import pages from '../../assets/data/pages.json'
import logo from '../../assets/data/images/logo.png'


const Header: React.FC = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>MatuMatma</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className={"menu"}>
                {
                  pages.map((link, index) => (
                    <li className={"nav__item"} key={index}>
                      <NavLink to={link.path} className={(navClass) =>
                        navClass.isActive ? 'nav__active' : ''}>{link.name}</NavLink>
                    </li>
                  )
                  )
                }
              </ul>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header