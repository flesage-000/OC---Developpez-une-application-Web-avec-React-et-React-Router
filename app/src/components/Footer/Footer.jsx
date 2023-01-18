import React from 'react';

import './Footer.css';
import kasa_logo_white from '../../assets/medias/kasa_logo_white.png';

function Footer() {
  return (
    <footer className='mainFooter'>
      <img  src={kasa_logo_white}
            height="40px" width="122px"
            alt="Logo Kasa"
            title="Chez vous, partout et ailleurs" />
      <p>
        &copy; Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;