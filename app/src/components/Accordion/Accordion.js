import { createElement } from 'react';
import './Accordion.css';

function manageAccordion(event) {
  event.preventDefault();

  let button = event.target.nodeName == "BUTTON" ? event.target : event.target.parentNode;
  let buttonParent = button.parentNode;

  if (buttonParent.classList.contains("up")) {
    buttonParent.classList.remove("up");
    buttonParent.classList.add("down");
  } else {
    buttonParent.classList.add("up");
    buttonParent.classList.remove("down");
  }
}

function Button() {
  let button = createElement("button", {type: "button", onClick: manageAccordion}, createElement("span", null, "Equipement"), createElement("span", {className: "arrow"}))

  return (button)
}

function Accordion(props) {
  let content = '';
  if (typeof props.content === "object") {
    const items = props.content;
    const list = items.map((item) => <li key={item.toString()}>{item}</li>)
    content = <ul>{list}</ul>;
  } else {
    content = <p>{props.content}</p>;
  }
  content = <div className='content'>{content}</div>

  return (<div className="equipment down">
    <button type="button" onClick={manageAccordion}><span>{props.name}</span><span className="arrow"></span></button>
    {content}
  </div>)
}

export default Accordion;