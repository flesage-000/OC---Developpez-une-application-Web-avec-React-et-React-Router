import { Link } from 'react-router-dom';
import './Thumbs.css';

function Thumbs({ data }) {
  return (
  <div  className="thumb"
        style={{ "--thumb-bkg": "url(" + data.cover + ")"}}>
    <h2><Link to={`/home/${data.id}`}>{ data.title }</Link></h2>
  </div>)
}

export default Thumbs;