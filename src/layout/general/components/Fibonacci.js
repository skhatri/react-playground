import React, { Component } from "react";
import { connect } from "react-redux";
import {
  nthFibonacci,
  updateFibInput,
} from "../../../redux/actions/fibonacci_creators";
import PropTypes from "prop-types";

export class Fibonacci extends Component {
  updateNum(ev) {
    this.props.updateFibInput(ev.target.value);
  }
  findNthFibonacci() {
    this.props.nthFibonacci(this.props.num);
  }
  getStyle() {
    console.log("how often");
    return this.props.cache_hit === "yes"
      ? "badge badge-success"
      : "badge badge-danger";
  }

  render() {
    return (
      <div className="card border-primary" style={cardStyle}>
        <div className="card-header">
          <h3>{this.props.title}!</h3>
        </div>

        <div className="card-body">
          <form className="form form-inline navbar-form pull-left">
            <input
              type="text"
              className="form-control mb-2 col-md-4"
              value={this.props.num}
              name="num"
              onChange={this.updateNum.bind(this)}
              placeholder="Nth-Fibonacci"
            />
            &nbsp;
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={this.findNthFibonacci.bind(this)}
            >
              Calculate
            </button>
          </form>
          <div className="col-sm-4">&nbsp;</div>
          <div className="alert alert-primary" role="alert">
            <p>
              Input:
              <span className="badge badge-success">{this.props.num}</span>
            </p>
            <p>
              Result:{" "}
              <span className="badge badge-primary">{this.props.result}</span>
            </p>
            <p>
              Cache Hit:{" "}
              <span className={this.getStyle()}>{this.props.cache_hit}</span>
            </p>
          </div>
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
    num: state.fibonacci.num,

    cache_hit: state.fibonacci.cache_hit,
    result: state.fibonacci.result,
  };
};

Fibonacci.propTypes = {
  nthFibonacci: PropTypes.func.isRequired,
  updateFibInput: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { nthFibonacci, updateFibInput })(
  Fibonacci
);
