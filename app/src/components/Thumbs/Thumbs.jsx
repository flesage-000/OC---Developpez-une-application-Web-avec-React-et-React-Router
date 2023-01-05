import { Link, useParams } from 'react-router-dom';
import './Thumbs.css';

function Thumbs({ data }) {
  // const { kasaId } = useParams();

  return (<div className="thumb">
    <h2><Link to={`/home/${data.id}`}>{ data.title }</Link></h2>
  </div>)
}

export default Thumbs;