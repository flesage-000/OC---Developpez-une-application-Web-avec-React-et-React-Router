import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import logements from '../../../public/data/logements.json';

import './Kasa.css';

import Tags from "../../components/Tags/Tags"
import Thumbs from '../../components/Thumbs/Thumbs';
import Accordion from '../../components/Accordion/Accordion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Cover from '../../components/Cover/Cover';
import Rating from '../../components/Rating/Rating';
import Hostname from '../../components/Hostname/Hostname';

function Kasa() {
  const { kasaId } = useParams();
  const kasa = logements.filter(data => data.id == kasaId)[0];

  return (
    <div className="App">
      <Header />

      <div className="Kasa">

        <div className="description_primary">

          <h1>{ kasa.title }</h1>

          <p>
            <small>{ kasa.location }</small>
          </p>

          <Tags tags={ kasa.tags } />

        </div>

        <div className="description_host">

          <Hostname names={ kasa.host.name } />

          <div className="avatar">
            <img src={ kasa.host.picture } alt="Avatar de `${ kasa.host.name }`" title={ kasa.host.name } />
          </div>

          <Rating rate={ kasa.rating } />

        </div>

        <div className="accordions">
          <Accordion name="Description" contentText={ kasa.description } />
          <Accordion name="équipements" contentList={ kasa.equipments } />
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Kasa;