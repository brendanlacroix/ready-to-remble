import React, { Component } from 'react';
import classnames from 'classnames';

import SizeInput from './SizeInput';

import './SelectorGroup.css';

class SelectorGroup extends Component {
  state = {
    isDeleteHover : false
  }

  constructor(props) {
    super(props);

    this.onDeleteMouseEnter = this.onDeleteMouseEnter.bind(this);
    this.onDeleteMouseLeave = this.onDeleteMouseLeave.bind(this);
  }

  onDeleteMouseEnter() {
    this.setState({ isDeleteHover : true })
  }

  onDeleteMouseLeave() {
    this.setState({ isDeleteHover : false })
  }

  render() {
    const {
      onChange,
      onRemoveSelector,
      selector,
      sizes
    } = this.props;

    const classes = classnames('SelectorGroup', {
      [`SelectorGroup-remove-selector-hover`] : this.state.isDeleteHover
    });

    return (
      <div className={classes}>
        <strong><span className="SelectorGroup-selector">{selector}</span> {"{"}</strong>
        <SizeInput endpoint="minimum" wrapperClasses="SelectorGroup-input" onChange={onChange} type="fontSize" name={`${selector}-min-font-size`} selector={selector} value={sizes.minimum[selector].fontSize} />
        <SizeInput endpoint="maximum" wrapperClasses="SelectorGroup-input" onChange={onChange} type="fontSize" name={`${selector}-max-font-size`} selector={selector} value={sizes.maximum[selector].fontSize} />

        <SizeInput endpoint="minimum" wrapperClasses="SelectorGroup-input" onChange={onChange} type="lineHeight" name={`${selector}-min-line-height`} selector={selector} value={sizes.minimum[selector].lineHeight} />
        <SizeInput endpoint="maximum" wrapperClasses="SelectorGroup-input" onChange={onChange} type="lineHeight" name={`${selector}-max-line-height`} selector={selector} value={sizes.maximum[selector].lineHeight} />

        <button className="SelectorGroup-remove-selector" onMouseEnter={this.onDeleteMouseEnter} onMouseLeave={this.onDeleteMouseLeave} onClick={() => onRemoveSelector(selector)}>X</button>
        <strong>{"}"}</strong>
      </div>
    );
  }
}

export default SelectorGroup;
