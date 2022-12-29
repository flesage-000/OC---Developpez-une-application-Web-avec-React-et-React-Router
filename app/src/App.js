import './App.css';
import Tags from "./components/Tags/Tags.js"
import Thumbs from './components/Thumbs/Thumbs';
import Accordion from './components/Accordion/Accordion';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Cover from './components/Cover/Cover';

function App() {
  return (
    <div className="App">
      <Header />
      <Tags />
      <Thumbs />
      <Accordion name="Equipements" content={['Climatisation', 'Wi-Fi', 'Cuisine', 'Espace de travail', 'Fer à repasser', 'Sèche-cheveux', 'Cintres']} />
      <Accordion name="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." open="true" />
      <Cover cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
      <Carousel pictures={[
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
		]} />
    </div>
  );
}

export default App;