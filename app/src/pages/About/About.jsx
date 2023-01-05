import './About.css';

import Header from '../../components/Header/Header';
import Accordion from '../../components/Accordion/Accordion';
import Footer from '../../components/Footer/Footer';

function About() {
  return(
    <div className="App">
      <Header />
      <div class="about">
        <Accordion name="TestList" contentText="" contentList={[
        "Équipements de base",
        "Micro-Ondes",
        "Douche italienne",
        "Frigo",
        "WIFI"
      ]} open={false} />

        <Accordion name="Fiabilité" contentText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." contentList={null} open={false} />

        <Accordion name="Respect" contentText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." contentList={null} open={false} />

        <Accordion name="Service" contentText="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." contentList={null} open={false} />

        <Accordion name="Sécurité" contentText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." contentList={null} open={false} />
      </div>
      <Footer />
    </div>
  )
}

export default About;