import './App.css';
import Tags from "../../components/Tags/Tags"
import Thumbs from '../../components/Thumbs/Thumbs';
import Accordion from '../../components/Accordion/Accordion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Cover from '../../components/Cover/Cover';

function App() {
  return (
    <div className="App">
      <Header />
      <Tags />
      <Thumbs />
      <Accordion name="Equipements" contentList={['Climatisation', 'Wi-Fi', 'Cuisine', 'Espace de travail', 'Fer à repasser', 'Sèche-cheveux', 'Cintres']} contentText="" open={false} />
      <Accordion name="Respect" contentList={null} contentText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." open={true} />
      <Cover url="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
      <Carousel pictures={[
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
		]} />
      <Footer />
    </div>
  );
}

export default App;