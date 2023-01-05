import { Link, NavLink } from 'react-router-dom';

import './Header.css';
import kasa_logo_red_desktop from './../../assets/medias/kasa_logo_red_211.png';
import kasa_logo_red_mobile from './../../assets/medias/kasa_logo_red_145.png';

function Header() {
  const logoSrcSet = `${kasa_logo_red_mobile} 145w, ${kasa_logo_red_desktop} 211w`;
  const activeClassName = "underline";
  return (
    <header className="mainHeader">
      <Link to="/Home" className="siteLogo">
        <img  srcSet={logoSrcSet}
              sizes="(max-width: 800px) 145px, 211px"
              src={kasa_logo_red_desktop}
              alt="Logo Kasa"
              title="Chez vous, partout et ailleurs" />
      </Link>
      <ul>
        <li>
          <NavLink  to="/About"
                    className={({ isActive }) => isActive
                    ? activeClassName : undefined}>à propos</NavLink>
        </li>
        <li>
          <NavLink  to="/Home"
                    className={({ isActive }) => isActive
                    ? activeClassName : undefined}>accueil</ NavLink>
        </li>
      </ul>
      <div className="illustration" text="Chez vous, partout et ailleurs">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </header>
  );
}

export default Header;