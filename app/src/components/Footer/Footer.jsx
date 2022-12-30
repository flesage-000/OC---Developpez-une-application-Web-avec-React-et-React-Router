import './Footer.css';

function Footer() {
  return (
    <footer className='mainFooter'>
      <img src={require('./medias/kasa_logo_white.png')} height='40px' width='122px' />
      <p>&copy; Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;