import React from 'react';

import { Link } from 'react-router-dom';

import './Error.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Error() {
  return(
    <div className="App">

      <Header />

      <div className="error">

        <p>
          404
        </p>

        <p>
          Oups! La page que vous demandez n'existe pas.
        </p>

        <Link to="/"
              className="underline">Retourner sur la page d'accueil</Link>

      </div>

      <Footer />

    </div>
  )
}

export default Error;