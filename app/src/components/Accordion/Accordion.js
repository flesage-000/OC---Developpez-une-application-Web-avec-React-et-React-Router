import React from 'react';
import './Accordion.css';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.isOpen || false };
  }

  render() {
    const handleAccordion = (event) => {
      event.preventDefault();

      this.state.isOpen = this.setState({isOpen: !this.state.isOpen});
    }

    const SetContent = () => {
      let content = '';
      if (typeof this.props.content === "object") {
        const items = this.props.content.map((item) => <li key={item.toString()}>{item}</li>)
        content = <ul>{items}</ul>;
      } else content = <p>{this.props.content}</p>;
      return content;
    }

    return (
    <div className='accordion'>
      <button className={`arrow ${this.state.isOpen ? 'up' : 'down'}`} type='button' onClick={handleAccordion}>{this.props.name}</button>
      <div className='content'>
        <SetContent />
      </div>
    </div>
    );
  }
}