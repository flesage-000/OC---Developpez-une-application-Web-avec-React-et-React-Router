import "./Cover.css";

function Cover(props) {
  return (<div className="cover" style={{ "--cover":`url(${props.cover})`}}></div>)
}

export default Cover;