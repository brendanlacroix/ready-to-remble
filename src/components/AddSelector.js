import React, { Component } from 'react';
import classnames from 'classnames';

import './AddSelector.css';

class AddSelector extends Component {
  state = {
    selector : ''
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ selector : event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.selector);
  }

  render() {
    const classes = classnames('AddSelector', this.props.wrapperClasses);

    return (
      <div className={classes}>
        <form className="AddSelector-form" onSubmit={this.onSubmit}>
          <input className="AddSelector-input" type="text" name="selector" onChange={this.onChange} placeholder="Add a selector..." />
          <input className="AddSelector-submit" type="submit" disabled={!this.state.selector.length} value="+" />
        </form>
      </div>
    );
  }
}

export default AddSelector;
