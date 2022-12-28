import "./AppartmentBanner.css";

function AppartmentBanner(props) {
  return (<div className="appartmentBanner" style={{ "--appartmentBanner":`url(${props.banner})`}}></div>)
}

export default AppartmentBanner;