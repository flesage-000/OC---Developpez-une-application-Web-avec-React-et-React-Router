import './Header.css';

function Header() {
  return (
    <header className='mainHeader'>
      <a className='siteLogo' href="#">Kasa</a>
      <ul>
        <li>
          <a href='#' className='active'>accueil</a>
        </li>
        <li>
          <a href='#'>à propos</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;