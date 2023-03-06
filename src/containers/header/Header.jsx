import React from 'react';
import './header.css'
import Banner from "../../assets/Banner.png"

const Header = () => {
  return (
    <div className='sifir__header section__padding'>
      <div className='sifir__header-content'>
        <h1 className='sifir__header-content_text1'>Gerçek Projelerde</h1>
        <h1 className='sifir__header-content_text2'>Tecrübe Kazan</h1>
        <p className='sifir__header-content_text3'>Hayalindeki işe bir adım daha yaklaş!</p>
        <p className='sifir__header-content_text4'>"Sıfır Değil Eksi'' platformu tecrübe kazanmak isteyen, staj veya gönüllü çalışma arayanlar ile firmaları bir araya getiren tamamen ücretsiz platformdur"</p>
        <button type='button'>Şimdi Keşfet</button>
      </div>
      <div className='sifir__header-image'>
        <img src={Banner} alt="banner" />
      </div>
    </div>
  );
}

export default Header;
