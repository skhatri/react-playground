import React, { Component } from "react";
import Fibonacci from "./components/Fibonacci";
import Counter from "./components/Counter";
import { StateRenderer } from "./components/StateRenderer";

export class DefaultFragment extends Component {
  render() {
    return (
      <div className="container-fluid w-100">
        <div>&nbsp;</div>
        <div className="row w-100">
          <div className="col-sm-4">
            <Fibonacci title="Fibonacci" />
          </div>
          <div className="col-sm-4">
            <Counter title="Counter" />
          </div>
          <div className="col-sm-4">
            <StateRenderer title="Global State Renderer" />
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultFragment;
