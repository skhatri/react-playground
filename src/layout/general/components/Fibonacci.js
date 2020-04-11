import React, { Component } from "react";

export class Fibonacci extends Component {
  constructor() {
    super();
    this.state = { num: 0, _m: {}, result: 0 };
  }

  _fib(c) {
    if (this.state._m[c]) {
      return this.state._m[c];
    }
    let items = new Array(c + 1);
    for (var i = 0; i <= c; i++) {
      if (i == 0) {
        items[i] = 0;
      } else if (i == 1 || i == 2) {
        items[i] = 1;
      } else {
        items[i] = items[i - 2] + items[i - 1];
      }
      let _m = this.state._m;
      _m[i] = items[i];
    }
    console.log(items);
    return items[c];
  }

  fibo() {
    let currentNumber = this.state.num;
    let result = this._fib(currentNumber);
    this.updateFieldAttribute({ target: { name: "result", value: result } });
  }

  updateFieldAttribute(v) {
    this.setState({
      [v.target.name]: v.target.value,
    });
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
              value={this.state.num}
              name="num"
              onChange={this.updateFieldAttribute.bind(this)}
              placeholder="Nth-Fibonacci"
            />
            &nbsp;
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={this.fibo.bind(this)}
            >
              Calculate
            </button>
          </form>
          <div className="col-sm-4">&nbsp;</div>
          <div className="alert alert-primary" role="alert">
            <p>
              Input:
              <span className="badge badge-success">{this.state.num}</span>
            </p>
            <p>
              Fibonacci:
              <span className="badge badge-primary">{this.state.result}</span>
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

export default Fibonacci;
