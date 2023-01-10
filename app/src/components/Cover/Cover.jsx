import PropTypes from 'prop-types';

import "./Cover.css";

function Cover({ url }) {
  return (<div className="cover" style={{ "--cover":`url(${ url })`}}></div>)
}

Cover.propTypes = {
  url: PropTypes.string,
};

export default Cover;