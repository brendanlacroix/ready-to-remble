import React, { Component } from 'react';
import classnames from 'classnames';

import './SizeInput.css';

class SizeInput extends Component {
  render() {
    const {
      endpoint,
      ident,
      onChange,
      type,
      value,
      wrapperClasses
    } = this.props;

    const classes = classnames('SizeInput', wrapperClasses);

    return (
      <div className={classes}>
        <label htmlFor={`${ident}-${type}`}>
          {`${ endpoint.charAt(0).toUpperCase() + endpoint.slice(1) } ${ type === 'lineHeight' ? 'line-height' : 'font-size' }:`}
          <input
            id={`${ident}-${type}`}
            data-endpoint={endpoint}
            data-selector={value}
            data-property={type}
            onChange={onChange}
            value={value} />
        </label>
      </div>
    );
  }
}

export default SizeInput;
