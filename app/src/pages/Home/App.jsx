import { useEffect, useState } from 'react';
import './App.css';

import Tags from "../../components/Tags/Tags"
import Thumbs from '../../components/Thumbs/Thumbs';
import Accordion from '../../components/Accordion/Accordion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Cover from '../../components/Cover/Cover';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('./data/logements.json')
      .then((response) => response.json()
      .then((data) => setData(data))
      .catch((error) => console.log("error", error))
    )
  }, []);

  const ThumbsList = () => {
    return (
      <div className="Home">
        {
          data.length > 0 && data.map(thumb => <Thumbs key={thumb.id} data={thumb} />)
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