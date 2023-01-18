import React from 'react';

import './App.css';

import logements from '../../data/logements.json';

import Thumbs from '../../components/Thumbs/Thumbs';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function App() {
  const ThumbsList = () => {
    return (
      <div className="Home">
        {
          logements.length > 0 && logements.map(thumb => <Thumbs key={thumb.id} data={thumb} />)
        }
      </div>
    )
  };

  return (
    <div className="App">

      <Header />

      <ThumbsList />

      <Footer />

    </div>
  );
}

export default App;