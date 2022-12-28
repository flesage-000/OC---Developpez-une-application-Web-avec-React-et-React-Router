import "./Carousel.css";

function Carousel(props) {
  let content = '';

  const items = props.pictures;
  const list = items.map((item) => <li key={item.toString()}><img src={item} /></li>)
  content = <ul>{list}</ul>;

  return (<div className="carousel">{content}</div>)
}

export default Carousel;