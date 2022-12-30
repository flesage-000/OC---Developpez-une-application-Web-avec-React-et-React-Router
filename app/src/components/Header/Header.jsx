import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='mainHeader'>
      <a className='siteLogo' href="/">Kasa</a>
      <ul>
        <li>
          <Link to='/About'>à propos</Link>
        </li>
        <li>
          <Link to='/' className='underline'>accueil</Link>
        </li>
      </ul>
      <div className='illustration' text='Chez vous, partout et ailleurs'>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </header>
  );
}

export default Header;