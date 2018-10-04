import React, { Component } from 'react';
import TypeSizeInput from './TypeSizeInput';

import './TypeSizeInputs.css';

class TypeSizeInputs extends Component {
  render() {
    const {
      onChange,
      onRemoveSelector,
      sizes
    } = this.props;

    return (
      <section className="TypeSizeInputs">
        {
          Object.keys(sizes.minimum).map((value, key) => {
            return (
              <div key={key}>
                <strong>{value}</strong>
                <TypeSizeInput endpoint="minimum" onChange={onChange} type="fontSize" value={sizes.minimum[value].fontSize} />
                <TypeSizeInput endpoint="maximum" onChange={onChange} type="fontSize" value={sizes.maximum[value].fontSize} />

                <TypeSizeInput endpoint="minimum" onChange={onChange} type="lineHeight" value={sizes.minimum[value].lineHeight} />
                <TypeSizeInput endpoint="maximum" onChange={onChange} type="lineHeight" value={sizes.maximum[value].lineHeight} />

                <button onClick={() => onRemoveSelector(value)}>X</button>
              </div>
            );
          })
        }
      </section>
    );
  }
}

export default TypeSizeInputs;
