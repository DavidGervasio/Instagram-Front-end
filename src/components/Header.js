import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
// import { Container } from './styles';
import logo from '../assets/logo.svg';
import cam from '../assets/camera.svg';


export default function Header() {
  return (
  <header id = "main-header">
  <div className = " header-content">
    <Link to="/">
    <img src={logo} alt="insta"/>
    </Link>
    <Link to="/new">
    <img src={cam} alt="send publication"/>
    </Link>
  </div>
  </header>
  );
}
