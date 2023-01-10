import { Link, useNavigate } from 'react-router-dom';

import './Thumbs.css';

function Thumbs({ data }) {
  const navigation = useNavigate();
  const navigate = () => {
    navigation(`/Kasa/${data.id}`);
  }

  return (
  <div  className="thumb"
        style={{ "--thumb-bkg": "url(" + data.cover + ")"}}
        onClick={ navigate }>
    <h2><Link to={`/Kasa/${data.id}`}>{ data.title }</Link></h2>
  </div>)
}

export default Thumbs;