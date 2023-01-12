import "./Cover.css";

function Cover({ url }) {
  return (<div className="cover" style={{ "--cover":`url(${ url })`}}></div>)
}

export default Cover;