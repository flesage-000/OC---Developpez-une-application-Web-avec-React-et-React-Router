import './Header.css';

function Header() {
  return (
    <header className='mainHeader'>
      <a className='siteLogo' href="/">Kasa</a>
      <ul>
        <li>
          <a href='/' className='active'>accueil</a>
        </li>
        <li>
          <a href='/About'>à propos</a>
        </li>
      </ul>
      <div className='illustration' text='Chez vous, partout et ailleurs'>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </header>
  );
}

export default Header;