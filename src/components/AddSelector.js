import React, { Component } from 'react';

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
    return (
      <div className="AddSelector">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="selector" onChange={this.onChange} placeholder="Add a selector" />
          <input type="submit" disabled={!this.state.selector.length} />
        </form>
      </div>
    );
  }
}

export default AddSelector;
