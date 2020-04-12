import React, { Component } from "react";
import store from "../../../app/stores";

const stateMapper = function (instance) {
  const onEvent = function () {
    instance.setState({ global: store.getState() });
  };
  store.subscribe(onEvent);
};

export class StateRenderer extends Component {
  constructor() {
    super();
    stateMapper(this);
  }
  componentWillMount() {
    this.setState({ global: {} });
  }

  change(value) {}

  render() {
    return (
      <div className="card border-primary" style={cardStyle}>
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">
          <p className="alert alert-warning">
            {Object.keys(this.state.global).map((node) => {
              return (
                <span key={node}>
                  <p>
                    <span class="badge badge-primary">{node}</span>:{" "}
                    {JSON.stringify(this.state.global[node])}
                  </p>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    );
  }
}

const cardStyle = {
  minHeight: "22rem",
};

const mapStateToProps = (state) => {
  console.log("state for map props", state);
  return {
    count: state.counter.count,
    doubled: state.counter.doubled,
  };
};
