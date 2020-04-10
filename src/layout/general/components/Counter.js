import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      doubled: 0,
    };
  }

  change(value) {
    let count = this.state.count + value;
    this.setState({ count: count, doubled: count * 2 });
  }

  render() {
    return (
      <div className="card border-primary" style={cardStyle}>
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">
          <h3>Count: {this.state.count}</h3>
          <h3>Double: {this.state.doubled}</h3>
          <div className="btn-group">
            <button
              className="btn btn-warning"
              onClick={this.change.bind(this, -1)}
            >
              -
            </button>
            <span
              className="font-weight-bold md-2 col-sm-4 border-primary"
              style={wide}
            >
              {this.state.count}
            </span>
            <button
              className="btn btn-success"
              onClick={this.change.bind(this, 1)}
            >
              +
            </button>
          </div>

          <p>Counter card</p>
        </div>
      </div>
    );
  }
}

const cardStyle = {
  minHeight: "19rem",
};

const wide = {
  minWidth: "5rem",
};

export default Counter;
