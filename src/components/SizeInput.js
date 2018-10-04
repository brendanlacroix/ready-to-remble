import React, { Component } from 'react';
import classnames from 'classnames';

import './SizeInput.css';

class SizeInput extends Component {
  render() {
    const {
      endpoint,
      name,
      onChange,
      type,
      selector,
      value,
      wrapperClasses
    } = this.props;

    const classes = classnames('SizeInput', wrapperClasses);

    return (
      <div className={classes}>
        <label className="SizeInput-label" htmlFor={name}>{`${ endpoint } ${ type === 'lineHeight' ? 'line-height' : 'font-size' }:`}</label>
        <input
          id={name}
          className="SizeInput-field"
          data-endpoint={endpoint}
          data-selector={selector}
          data-property={type}
          onChange={onChange}
          value={value} />
      </div>
    );
  }
}

export default SizeInput;
