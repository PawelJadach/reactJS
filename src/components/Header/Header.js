import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';

import Container from '../Container/Container';
import Search from '../Search/SearchContainer';

class Header extends Component {
  state = {};
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <i className='fab fa-adn'></i>
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>
                Home
              </NavLink>
              <NavLink exact to='/info' activeClassName='active'>
                Info
              </NavLink>
              <NavLink exact to='/faq' activeClassName='active'>
                FAQ
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
