import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { ghcolors } from 'react-syntax-highlighter/styles/prism';

import './CSSDisplay.css';

class PreviewWindow extends Component {
  browserDefaultFontSize = 16;
  minimumBrowserWidth = 320;
  maximumBrowserWidth = 1440;

  getMinimumBrowserWidthInREM() {
    return this.minimumBrowserWidth / this.getAverageScaling(this.props.sizes.minimum);
  }
  getMaximumBrowserWidthInREM() {
    return this.maximumBrowserWidth / this.getAverageScaling(this.props.sizes.maximum);
  }
  getRootMinimumFontSizeInREM() {
    return this.getAverageScaling(this.props.sizes.minimum) / this.browserDefaultFontSize;
  }
  getRootMaximumFontSizeInREM() {
    return this.getAverageScaling(this.props.sizes.maximum) / this.browserDefaultFontSize;
  }
  getRootStyle()   {
    const minimumSize = this.getAverageScaling(this.props.sizes.minimum);
    const maximumSize = this.getAverageScaling(this.props.sizes.maximum);
    const minimumFontSizeInREM = this.getRootMinimumFontSizeInREM();
    const viewportCalc = this.minimumBrowserWidth / 100;
    const scaleCalc = (100 * (maximumSize - minimumSize) / (this.maximumBrowserWidth - this.minimumBrowserWidth));

    return `
      :root {
        font-size: calc(${minimumFontSizeInREM}rem + ((1vw - ${viewportCalc}px) * ${scaleCalc}));
      }`;
  }
  getStyleDeclaration(selector) {
    const averageScaleMin = this.getAverageScaling(this.props.sizes.minimum);
    const averageScaleMax = this.getAverageScaling(this.props.sizes.maximum);

    const minimumFontSizeInREM = this.props.sizes.minimum[selector].fontSize / averageScaleMin;
    const maximumFontSizeInREM = this.props.sizes.maximum[selector].fontSize / averageScaleMax;
    const fontSizeScaleCalc = (100 * (maximumFontSizeInREM - minimumFontSizeInREM) / (this.getMaximumBrowserWidthInREM() - this.getMinimumBrowserWidthInREM()));

    const minimumLineHeightInREM = this.props.sizes.minimum[selector].lineHeight / averageScaleMin;
    const maximumLineHeightInREM = this.props.sizes.maximum[selector].lineHeight / averageScaleMax;
    const lineHeightScaleCalc = (100 * (maximumLineHeightInREM - minimumLineHeightInREM) / (this.getMaximumBrowserWidthInREM() - this.getMinimumBrowserWidthInREM()));

    this.logCalculations(selector, minimumFontSizeInREM, minimumLineHeightInREM, fontSizeScaleCalc, lineHeightScaleCalc);

    return `
      ${selector} {
        font-size: calc(${minimumFontSizeInREM}rem + ((1vw - ${(this.getMinimumBrowserWidthInREM() / 100)}rem) * ${fontSizeScaleCalc}));
        line-height: calc(${minimumLineHeightInREM}rem + ((1vw - ${(this.getMinimumBrowserWidthInREM() / 100)}rem) * ${lineHeightScaleCalc}));
      }`;
  }
  logCalculations(selector, minimumFontSizeInREM, minimumLineHeightInREM, fontSizeScaleCalc, lineHeightScaleCalc) {
    const fontSizeMin = (minimumFontSizeInREM*(this.getRootMinimumFontSizeInREM()*16)) + ((3.2 - ((this.getMinimumBrowserWidthInREM() / 100)*(this.getRootMinimumFontSizeInREM()*16))) * fontSizeScaleCalc);
    const lineHeightMin = (minimumLineHeightInREM*(this.getRootMinimumFontSizeInREM()*16)) + ((3.2 - ((this.getMinimumBrowserWidthInREM() / 100)*(this.getRootMinimumFontSizeInREM()*16))) * lineHeightScaleCalc);
    const fontSizeMax = (minimumFontSizeInREM*(this.getRootMaximumFontSizeInREM()*16)) + ((14.4 - ((this.getMinimumBrowserWidthInREM() / 100)*(this.getRootMaximumFontSizeInREM()*16))) * fontSizeScaleCalc);
    const lineHeightMax = (minimumLineHeightInREM*(this.getRootMaximumFontSizeInREM()*16)) + ((14.4 - ((this.getMinimumBrowserWidthInREM() / 100)*(this.getRootMaximumFontSizeInREM()*16))) * lineHeightScaleCalc);

    console.log('---------------------------------------------------------------------');
    console.log(`Selector: "${selector}"`);

    if (this.props.sizes.minimum[selector].fontSize !== fontSizeMin) {
      console.log(`%cfont-size at ${this.minimumBrowserWidth}:    ${fontSizeMin}px`, 'color: red');
    } else {
      console.log(`font-size at ${this.minimumBrowserWidth}:    ${fontSizeMin}px`);
    }

    if (this.props.sizes.minimum[selector].lineHeight !== lineHeightMin) {
      console.log(`%cline-height at ${this.minimumBrowserWidth}:  ${lineHeightMin}px`, 'color: red');
    } else {
      console.log(`line-height at ${this.minimumBrowserWidth}:  ${lineHeightMin}px`);
    }

    if (this.props.sizes.maximum[selector].fontSize !== fontSizeMax) {
      console.log(`%cfont-size at ${this.maximumBrowserWidth}:   ${fontSizeMax}px`, 'color: red');
    } else {
      console.log(`font-size at ${this.maximumBrowserWidth}:   ${fontSizeMax}px`);
    }

    if (this.props.sizes.maximum[selector].lineHeight !== lineHeightMax) {
      console.log(`%cline-height at ${this.maximumBrowserWidth}: ${lineHeightMax}px`, 'color: red');
    } else {
      console.log(`line-height at ${this.maximumBrowserWidth}: ${lineHeightMax}px`);
    }
  }
  getAverageScaling(sizes) {
    let averageFontSizeScale = 0;
    let averageLineHeightScale = 0;

    Object.keys(sizes).forEach((value) => {
      averageFontSizeScale += sizes[value].fontSize;
      averageLineHeightScale += sizes[value].lineHeight;
    });

    return Math.round((averageFontSizeScale + averageLineHeightScale) / (Object.keys(sizes).length * 2));
  }
  render() {
    console.log('Average (min): ', this.getAverageScaling(this.props.sizes.minimum));
    console.log('Average (max): ', this.getAverageScaling(this.props.sizes.maximum));

    console.log('Browser min width REM', this.getMinimumBrowserWidthInREM());
    console.log('Browser max width REM', this.getMaximumBrowserWidthInREM());

    let code = this.getRootStyle();

    Object.keys(this.props.sizes.minimum).forEach((value, key) => {
      code += this.getStyleDeclaration(value);
    });

    return (
      <div className="CSSDisplay">
        <div className="CSSDisplay-key">
          <h3>{`At ${this.minimumBrowserWidth}px browser width, divide pixels by ${this.getAverageScaling(this.props.sizes.minimum)} to convert to rems.`}</h3>
          <h3>{`At ${this.maximumBrowserWidth}px browser width, divide pixels by ${this.getAverageScaling(this.props.sizes.maximum)} to convert to rems.`}</h3>
        </div>
        <pre>
          <SyntaxHighlighter style={ghcolors}>{ code }</SyntaxHighlighter>
        </pre>
      </div>
    );
  }
}

export default PreviewWindow;
