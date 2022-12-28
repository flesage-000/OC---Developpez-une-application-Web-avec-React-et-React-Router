import logo from './logo.svg';
import './App.css';
import Tags from "./components/Tags/Tags.js"
import Thumbs from './components/Thumbs/Thumbs';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <Tags />
      <Thumbs />
      <Accordion name="Equipements" content={['Climatisation', 'Wi-Fi', 'Cuisine', 'Espace de travail', 'Fer à repasser', 'Sèche-cheveux', 'Cintres']} />
      <Accordion name="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
    </div>
  );
}

export default App;