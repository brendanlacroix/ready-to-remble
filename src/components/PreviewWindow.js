import React, { Component } from 'react';

import Frame from 'react-frame-component';
import loremIpsum from 'lorem-ipsum';

import './PreviewWindow.css';

class PreviewWindow extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      body,
      quoteCallout,
      statCallout
    } = this.props.sizes;

    const bodyIpsum = loremIpsum();
    const quoteIpsum = loremIpsum({ count : 1 });

    let style = `
      h1 {
        font-size: ${ h1.fontSize }px;
        line-height: ${ h1.lineHeight}px;
      }
      h2 {
        font-size: ${ h2.fontSize }px;
        line-height: ${ h2.lineHeight}px;
      }
      h3 {
        font-size: ${ h3.fontSize }px;
        line-height: ${ h3.lineHeight}px;
      }
      body {
        font-size: ${ body.fontSize }px;
        line-height: ${ body.lineHeight}px;
      }
      .quote-callout {
        font-size: ${ quoteCallout.fontSize }px;
        line-height: ${ quoteCallout.lineHeight}px;
      }
      .stat-callout {
        font-size: ${ statCallout.fontSize }px;
        line-height: ${ statCallout.lineHeight}px;
      }
    `;

    return (
      <div className={ this.props.wrapperClasses }>
        <Frame head={ <style>{ style }</style> }>
          <h1>This is an h1.</h1>
          <h2>This is an h2.</h2>
          <h3>This is an h3.</h3>
          <p>{ bodyIpsum }</p>
          <div className="quote-callout">{ quoteIpsum }</div>
          <div className="stat-callout">150%</div>
        </Frame>
      </div>
    );
  }
}

export default PreviewWindow;
