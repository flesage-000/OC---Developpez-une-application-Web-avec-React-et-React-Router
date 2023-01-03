import PropTypes from 'prop-types';
import './Thumbs.css';

function Thumbs({ title }) {
  return (<div className="thumb">
    <h2>{ title }</h2>
  </div>)
}

Thumbs.propTypes = {
  title: PropTypes.string,
}

export default Thumbs;