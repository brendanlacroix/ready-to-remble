import React, { Component } from 'react';

import SelectorGroup from './SelectorGroup';

import './SizeInputs.css';

class SizeInputs extends Component {
  render() {
    return (
      <section className="SizeInputs">
        {
          Object.keys(this.props.sizes.minimum).map((selector, key) => {
            return <SelectorGroup key={key} selector={selector} {...this.props} />;
          })
        }
      </section>
    );
  }
}

export default SizeInputs;
