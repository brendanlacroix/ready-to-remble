import React, { Component } from 'react';

import TypeSizeInputs from './components/TypeSizeInputs';
import AddSelector from './components/AddSelector';
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

    this.addSelector = this.addSelector.bind(this);
    this.removeSelector = this.removeSelector.bind(this);
    this.updateTypography = this.updateTypography.bind(this);
  }

  addSelector(selector) {
    const sizes = {...this.state.sizes};

    sizes.minimum[selector] = {
      fontSize   : 0,
      lineHeight : 0
    };

    sizes.maximum[selector] = {
      fontSize   : 0,
      lineHeight : 0
    };

    this.setState({ sizes });
  }

  removeSelector(selector) {
    const sizes = {...this.state.sizes};

    delete sizes.minimum[selector];
    delete sizes.maximum[selector];

    this.setState({ sizes });
  }

  updateTypography(e) {
    const sizes = {...this.state.sizes};
    const valueInt = parseInt(e.target.value) || 0;

    if (!isNaN(valueInt)) {
      sizes[e.target.dataset.endpoint][e.target.dataset.selector][e.target.dataset.property] = valueInt;
    }

    this.setState({ sizes });
  }

  render() {
    return (
      <div className="App">
        <TypeSizeInputs onChange={this.updateTypography} onRemoveSelector={this.removeSelector} sizes={this.state.sizes} />
        <br />

        <AddSelector onSubmit={this.addSelector} />

        <CSSDisplay sizes={this.state.sizes} />
      </div>
    );
  }
}

export default App;
