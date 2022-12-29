import { useState } from 'react';
import './Accordion.css';

function Accordion({name, content}) {
  const [isOpen, setIsOpen] = useState(true);
  const handleManageAccordion = (event) => {
    event.preventDefault();

    let button = event.target.nodeName == "BUTTON" ? event.target : event.target.parentNode;
    let buttonParent = button.parentNode;

    if (isOpen) {
      setIsOpen(false);
      buttonParent.classList.remove("up");
      buttonParent.classList.add("down");
    } else {
      setIsOpen(true);
      buttonParent.classList.add("up");
      buttonParent.classList.remove("down");
    }
  }
  let conten = '';
  if (typeof content === "object") {
    const items = content;
    const list = items.map((item) => <li key={item.toString()}>{item}</li>)
    conten = <ul>{list}</ul>;
  } else {
    conten = <p>{content}</p>;
  }

  conten = <div className='content'>{conten}</div>

  return (<div className={`equipment ${isOpen ? 'down' : 'up'}`} >
    <button type="button" onClick={handleManageAccordion}><span>{name}</span><span className="arrow"></span></button>
    {conten}
  </div>)
}

export default Accordion;