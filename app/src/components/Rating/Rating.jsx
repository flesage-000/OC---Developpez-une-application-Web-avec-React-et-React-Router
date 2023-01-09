import './Rating.css';

function Stars({ rate }) {

  return (
    <ul className="stars">
      <li className={ rate >= 1 ? "star active" : "star" }></li>
      <li className={ rate >= 2 ? "star active" : "star" }></li>
      <li className={ rate >= 3 ? "star active" : "star" }></li>
      <li className={ rate >= 4 ? "star active" : "star" }></li>
      <li className={ rate = 5 ? "star active" : "star" }></li>
    </ul>
  );
}

export default Stars;