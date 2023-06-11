import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../../logo.svg';
import Footer from '../Layout/Footer';

const Home = () => {
  return (
    <div>
      <Link to="/">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </Link>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to="/gallery">Gallery</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
      <Footer/>
    </div>
  );
};
  
export default Home;