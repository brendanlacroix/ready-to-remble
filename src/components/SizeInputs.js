import React, { Component } from 'react';
import SizeInput from './SizeInput';

import './SizeInputs.css';

class SizeInputs extends Component {
  render() {
    const {
      onChange,
      onRemoveSelector,
      sizes
    } = this.props;

    return (
      <section className="SizeInputs">
        {
          Object.keys(sizes.minimum).map((value, key) => {
            return (
              <div className="SizeInputs-entry" key={key}>
                <strong className="SizeInputs-entry-title">{value}</strong>
                <SizeInput endpoint="minimum" wrapperClasses="SizeInputs-font-size-min" onChange={onChange} type="fontSize" ident={key} value={sizes.minimum[value].fontSize} />
                <SizeInput endpoint="maximum" wrapperClasses="SizeInputs-font-size-max" onChange={onChange} type="fontSize" ident={key} value={sizes.maximum[value].fontSize} />

                <SizeInput endpoint="minimum" wrapperClasses="SizeInputs-line-height-min" onChange={onChange} type="lineHeight" ident={key} value={sizes.minimum[value].lineHeight} />
                <SizeInput endpoint="maximum" wrapperClasses="SizeInputs-line-height-max" onChange={onChange} type="lineHeight" ident={key} value={sizes.maximum[value].lineHeight} />

                <button className="SizeInputs-remove-selector" onClick={() => onRemoveSelector(value)}>X</button>
              </div>
            );
          })
        }
      </section>
    );
  }
}

export default SizeInputs;
