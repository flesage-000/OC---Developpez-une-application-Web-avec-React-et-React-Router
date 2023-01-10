import { Link, matchRoutes, NavLink, useLocation } from 'react-router-dom';

import './Header.css';
import kasa_logo_red_desktop from './../../assets/medias/kasa_logo_red_211.png';
import kasa_logo_red_mobile from './../../assets/medias/kasa_logo_red_145.png';
import kasa_header_home_picture from './../../assets/medias/kasa_illustration.png';
import kasa_header_about_picture from './../../assets/medias/gustavo-alves-YOXSC4zRcxw-unsplash.png';

function Header() {
  const logoSrcSet = `${kasa_logo_red_mobile} 145w, ${kasa_logo_red_desktop} 211w`;
  const activeClassName = "underline";
  const routes = [{ path: "/" }]

  const useCurrentPath = () => {
    const location = useLocation()
    const [{ route }] = matchRoutes(routes, location)

    return route.path
  }

  console.log("route", useLocation().pathname);

  return (
    <header className="mainHeader">
      <Link to="/" className="siteLogo">
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
          <NavLink  to="/"
                    className={({ isActive }) => isActive
                    ? activeClassName : undefined}>accueil</ NavLink>
        </li>
      </ul>
      { useLocation().pathname === "/" || useLocation().pathname === "/About"
      ? <div  className="illustration"
              style={{ "--headerURL": `url(${ useLocation().pathname === "/" ? kasa_header_home_picture : kasa_header_about_picture })` }}>
          { useLocation().pathname === "/"
          ? <p>Chez vous, partout et ailleurs</p>
          : null }
        </div>
      : null }
    </header>
  );
}

export default Header;