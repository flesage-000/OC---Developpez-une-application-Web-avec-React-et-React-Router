import logo from './logo.svg';
import './App.css';
import Tags from "./components/Tags/Tags.js"
import Thumbs from './components/Thumbs/Thumbs';
import Accordion from './components/Accordion/Accordion';
import AppartmentBanner from './components/AppartmentBanner/AppartmentBanner';

function App() {
  return (
    <div className="App">
      <Tags />
      <Thumbs />
      <Accordion name="Equipements" content={['Climatisation', 'Wi-Fi', 'Cuisine', 'Espace de travail', 'Fer à repasser', 'Sèche-cheveux', 'Cintres']} />
      <Accordion name="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <AppartmentBanner banner="https://s3-alpha-sig.figma.com/img/bd60/e3fd/509fc8039cc472b31cc9871e23a2e797?Expires=1673222400&Signature=D4gkjLHKH3367YYrFTPGLxkuUl0oZTbhI094T4s9yzF8jaaLPPR~fTDYzUrGJ0EM6scVIZkXKOLNqRODYxrDBcgGaVrse5oKriPaCa4mj0rdouluq-kDw~WcnQsZZeo2FcAFqikH9TClN1e6GyQoq9DT-il3qF7D4VkBCyqYxzZ2A3ex19Jy8~J6JcxCeYAxkot~4S8GWVMpICcyBUWA~PgPEsxL4lqX4xj2cEpirDFETdB7pe34BsRPQMOPA7N6Raij3deu2gxc7uc1IP~bOOQdWlMHMCQHAr9MLeSepzMd-rkO-RqY2kMSqq6bb-c-fFZKvjRe1EXHsPIAIQpaFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
    </div>
  );
}

export default App;