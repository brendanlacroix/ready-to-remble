import React, { Component } from 'react';

import './TypeSizeInputs.css';

class TypeSizeInputs extends Component {
  render() {
    return (
      <section className="TypeSizeInputs">
        {
          Object.keys(this.props.sizes).map((value, key) => {
            return (
              <div key={key}>
                <span>{value}</span>
                <label htmlFor={`${key}-font-size`}>
                  font-size: <input id={`${key}-font-size`} data-endpoint={this.props.endpoint} data-selector={value} data-property="fontSize" onChange={this.props.onChange} value={this.props.sizes[value].fontSize} />
                </label>
                <label htmlFor={`${key}-line-height`}>
                  line-height: <input id={`${key}-line-height`} data-endpoint={this.props.endpoint} data-selector={value} data-property="lineHeight" onChange={this.props.onChange} value={this.props.sizes[value].lineHeight} />
                </label>
              </div>
            );
          })
        }
      </section>
    );
  }
}

export default TypeSizeInputs;
