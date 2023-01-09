import { Link } from 'react-router-dom';
import './Thumbs.css';

function Thumbs({ data }) {
  return (
  <div  className="thumb"
        style={{ "--thumb-bkg": "url(" + data.cover + ")"}}>
    <h2><Link to={`/Kasa/${data.id}`}>{ data.title }</Link></h2>
  </div>)
}

export default Thumbs;