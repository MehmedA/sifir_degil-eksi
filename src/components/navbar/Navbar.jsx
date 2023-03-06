import React from 'react';
import "./navbar.css";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='sifir__navbar'>
      <div className='sifir__navbar-links'>
        <div className='sifir__navbar-links_logo'>
          <img src={logo} alt="logo" className='logo' />
        </div>
        <div className='sifir__navbar-links_container'>
          <p><a href="#İlanlar">İlanlar</a></p>
          <p><a href="#İçerikler">İçerikler</a></p>
          <p><a href="#Kariyer">Kariyer</a></p>
        </div>
      </div>
      <div className='sifir__navbar-sign'>
        <button type='button' className='login-btn'>Giriş Yap</button>
        <button type='button' className='register-btn'>Üye Ol</button>
      </div>
    </div>
  );
}

export default Navbar;
