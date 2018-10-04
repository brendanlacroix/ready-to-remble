import React, { Component } from 'react';

import TypeSizeInputs from './components/TypeSizeInputs';
import CSSDisplay from './components/CSSDisplay';
// import PreviewWindow from './components/PreviewWindow';

import './App.css';

class App extends Component {
  state = {
    sizes : {
      minimum : {
        [`h1, .h1`] : {
          fontSize   : 35,
          lineHeight : 42
        },
        [`h2, .h2`] : {
          fontSize   : 22,
          lineHeight : 28
        },
        [`h3, .h3, .label`] : {
          fontSize   : 14,
          lineHeight : 20
        },
        body : {
          fontSize   : 17,
          lineHeight : 21
        },
        [`.statCallout`] : {
          fontSize   : 35,
          lineHeight : 42
        },
        [`.quoteCallout`] : {
          fontSize   : 35,
          lineHeight : 40
        }
      },
      maximum : {
        [`h1, .h1`] : {
          fontSize   : 66,
          lineHeight : 76
        },
        [`h2, .h2`] : {
          fontSize   : 42,
          lineHeight : 50
        },
        [`h3, .h3, .label`] : {
          fontSize   : 17,
          lineHeight : 20
        },
        body : {
          fontSize   : 20,
          lineHeight : 30
        },
        [`.statCallout`] : {
          fontSize   : 64,
          lineHeight : 74
        },
        [`.quoteCallout`] : {
          fontSize   : 42,
          lineHeight : 50
        }
      }
    }
  }

  constructor(props) {
    super(props);

    this.updateTypography = this.updateTypography.bind(this);
  }

  updateTypography(e) {
    const sizes = {...this.state.sizes};
    const valueInt = parseInt(e.target.value) || 0;

    if (!isNaN(valueInt)) {
      sizes[e.target.dataset.endpoint][e.target.dataset.selector][e.target.dataset.property] = valueInt;
    }

    this.setState(sizes);
  }

  render() {
    return (
      <div className="App">
        <TypeSizeInputs endpoint="minimum" onChange={this.updateTypography} sizes={this.state.sizes.minimum} />
        <br />
        <TypeSizeInputs endpoint="maximum" onChange={this.updateTypography} sizes={this.state.sizes.maximum} />

        <CSSDisplay sizes={this.state.sizes} />
      </div>
    );

    //<PreviewWindow wrapperClasses="App-preview" sizes={ this.state.sizes } />
    // <PreviewWindow wrapperClasses="App-preview" sizes={ this.state.sizes } />
  }
}

export default App;
