import './Header.css';
import kasa_logo_red_desktop from './../../assets/medias/kasa_logo_red_211.png';
import kasa_logo_red_mobile from './../../assets/medias/kasa_logo_red_145.png';
import { Link } from 'react-router-dom';

function Header() {
  const logoSrcSet = `${kasa_logo_red_mobile} 145w, ${kasa_logo_red_desktop} 211w`;
  return (
    <header className='mainHeader'>
      <Link to="/home" className="siteLogo">
        <img  srcSet={logoSrcSet}
              sizes="(max-width: 800px) 145px, 211px"
              src={kasa_logo_red_desktop}
              alt="Logo Kasa"
              title="Chez vous, partout et ailleurs" />
      </Link>
      <ul>
        <li>
          <Link to='/About'>à propos</Link>
        </li>
        <li>
          <Link to='/home' className='underline'>accueil</Link>
        </li>
      </ul>
      <div className='illustration' text='Chez vous, partout et ailleurs'>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </header>
  );
}

export default Header;