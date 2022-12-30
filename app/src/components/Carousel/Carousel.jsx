import "./Carousel.css";
// https://codepen.io/ambaqinejad/pen/ExRObmr
function slides(event) {
console.log("event", event);
}

function Carousel(props) {
  let content = '';

  const items = props.pictures;
  const list = items.map((item, index) => {
    let activeslide = "";
    if (index == 0) activeslide = true;
    return (<li className="slide" data-active-slide={activeslide} key={item.toString()} ><img src={item} /></li>)
  })
  content = <ul>{list}</ul>;

  // const activeSlide = slides.querySelector("[data-active-slide='true']");

  return (<div className="carousel" onLoad={slides}>{content}</div>)
}

export default Carousel;