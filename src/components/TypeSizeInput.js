import React, { Component } from 'react';

import './TypeSizeInput.css';

class TypeSizeInput extends Component {
  render() {
    const {
      value,
      key,
      endpoint,
      onChange,
      type
    } = this.props;

    return (
      <div className="TypeSizeInput">
        <label htmlFor={`${key}-${type}`}>
          {`${endpoint} font-size:`} <input id={`${key}-${type}`} data-endpoint={endpoint} data-selector={value} data-property={type} onChange={onChange} value={value} />
        </label>
      </div>
    );
  }
}

export default TypeSizeInput;
