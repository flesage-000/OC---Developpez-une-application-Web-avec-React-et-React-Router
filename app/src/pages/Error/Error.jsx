import './Error.css';
import { useRouteError } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Error() {
  const error = useRouteError();
  console.error(error);

  return(
    <div className="App">
      <Header />
      <div className='error'>
        <p>
          {error.status}
        </p>
        <p>
          {error.status ? 'Oups! La page que vous demandez n\'existe pas.' : error.statusText || error.message}
        </p>
        <a className='underline' href='/'>Retourner sur la page d'accueil</a>
      </div>
      <Footer />
    </div>
  )
}

export default Error;