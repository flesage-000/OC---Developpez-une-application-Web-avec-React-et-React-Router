import { useState } from 'react';
import './Accordion.css';

function Accordion({name, content, open}) {
  let [isOpen, setIsOpen] = useState(open || false);

  const handleAccordion = (event) => {
    event.preventDefault();

    isOpen = setIsOpen(!isOpen);
  }

  const SetContent = () => {
    let accordionContent = '';
    if (typeof content === "object") {
      const items = content.map((item) => <li key={item.toString()}>{item}</li>)
      accordionContent = <ul>{items}</ul>;
    } else accordionContent = <p>{content}</p>;
    return accordionContent;
  }

  return (
  <div className='accordion'>
    <button className={`arrow ${isOpen ? 'up' : 'down'}`} type='button' onClick={handleAccordion}>{name}</button>
    <div className='content'>
      <SetContent />
    </div>
  </div>
  );
}

export default Accordion;