import "./Carousel.css";

import { useState } from "react";

function Carousel(pictures) {
  const picturesLength = pictures.pictures.length;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === picturesLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? picturesLength - 1 : current - 1);
  };

  function Slide(picture) {
    return (
      <div  className={ picture.data[1] === current ? "slide active" : "slide" }
            style={{ "--appartmentBanner": `url(${ picture.data[0] })` }}>
        <div className="page">{ picture.data[1] + 1 } / { picturesLength }</div>
      </div>
    )
  }

  return (
    <div className="Carousel">

      <div className="carousel-content">

        { pictures.pictures.map((picture, index) => <Slide key={ index + 1 } data={ [picture, index] } />) }

        { picturesLength > 1 ? <a className="prev" onClick={ prevSlide }>&#10094;</a> : null }
        { picturesLength > 1 ? <a className="next" onClick={ nextSlide }>&#10095;</a> : null }

      </div>

    </div>
  )
}

export default Carousel;