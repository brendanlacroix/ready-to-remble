import React, { Component } from 'react';

import SelectorGroup from './components/SelectorGroup';
import AddSelector from './components/AddSelector';
import CSSDisplay from './components/CSSDisplay';

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

    this.isDuplicateSelector = this.isDuplicateSelector.bind(this);
    this.addSelector = this.addSelector.bind(this);
    this.removeSelector = this.removeSelector.bind(this);
    this.updateTypography = this.updateTypography.bind(this);
  }

  isDuplicateSelector(selector) {
    if (this.state.sizes.minimum[selector.trim()]) {
      return true;
    }

    return false;
  }

  addSelector(selector) {
    const sizes = {...this.state.sizes};
    const trimmedSelector = selector.trim();

    if (!this.isDuplicateSelector(trimmedSelector)) {
      sizes.minimum[trimmedSelector] = {
        fontSize   : 0,
        lineHeight : 0
      };

      sizes.maximum[trimmedSelector] = {
        fontSize   : 0,
        lineHeight : 0
      };

      this.setState({ sizes });
    }
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
        <header className="App-header">
          <h1 className="App-title"><span role="presentation" className="App-logo">🤼‍♀️</span>Ready to REMble</h1>
          <div className="App-description">
            <p>
              Using <span className="App-ms">rem</span> and <span className="App-ms">vw</span>,
              you can scale your site to look great on any browser... with less fuss (and less ugly whitespace <span role="presentation" className="App-emoji">😓</span>) than CSS grid systems.
            </p>
            <p>
              The problem? It's unlikely that everything scales the same way from mobile to desktop. Your <span className="App-ms">body</span>
              text might only get a big bigger, while your <span className="App-ms">h1</span> shoots to double the size <span role="presentation" className="App-emoji">🚀</span>. Suddenly,
              <span className="App-ms">rem</span> isn't saving you any time &mdash; you're still writing media queries to
              tweak your <span className="App-ms">font-size</span>.
            </p>
            <p>
              <strong>Ready to REmble</strong> takes all your <span className="App-ms">font-size</span> and <span className="App-ms">line-height</span>
              values and calculates an <em>average</em> scaling function <span role="presentation" className="App-emoji">📈</span>. Put that in your <span className="App-ms">:root</span>
              and you can use <span className="App-ms">rem</span> <em>anywhere</em> to get an appropriate measure.
              Use <span className="App-ms">rem</span> for margins, paddings, height, width, <em>everything</em>.
            </p>
            <p>
              Then, that average scaling function is used as the base to create tailored, <span className="App-ms">vw</span>-driven
              functions for each font style you define. Your typography will scale exactly as you specify, leaving you with
              <span role="presentation" className="App-emoji">👏</span>&nbsp;balanced&nbsp;<span role="presentation" className="App-emoji">👏</span>&nbsp;whitespace&nbsp;<span role="presentation" className="App-emoji">👏</span> at <span role="presentation" className="App-emoji">👏</span> any <span role="presentation" className="App-emoji">👏</span> viewport <span role="presentation" className="App-emoji">👏</span>&nbsp;width
              and no media queries to worry about.
            </p>
            <p className="App-last-description-paragraph">
              <span role="presentation" className="App-big-emoji">🎉</span>&nbsp;<span role="presentation" className="App-big-emoji">🎉</span>
            </p>
          </div>
        </header>
        <div className="App-inputs">
          <section className="App-selectors">
            {
              Object.keys(this.state.sizes.minimum).map((selector, key) => {
                return <SelectorGroup
                  key={key}
                  selector={selector}
                  onChange={this.updateTypography}
                  onRemoveSelector={this.removeSelector}
                  sizes={this.state.sizes} />;
              })
            }
          </section>
          <AddSelector wrapperClasses="App-add-selector" onSubmit={this.addSelector} isDuplicateSelector={this.isDuplicateSelector} />
        </div>

        <CSSDisplay sizes={this.state.sizes} />
      </div>
    );
  }
}

export default App;
