import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/signin_creators";
import PropTypes from "prop-types";

export class SignIn extends Component {
    change(value) {
        if (value === 1) {
            this.props.increment();
        } else {
            this.props.decrement();
        }
    }

    render() {
        return (
            <div className="card border-primary" style={cardStyle}>
                <div className="card-header">{this.props.title}</div>
                <div className="card-body">
                    <h3>Count: {this.props.count}</h3>
                    <h3>Double: {this.props.doubled}</h3>
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
              {this.props.count}
            </span>
                        <button
                            className="btn btn-success"
                            onClick={this.change.bind(this, 1)}
                        >
                            +
                        </button>
                    </div>
                    <p />
                    <p className="alert alert-warning">
                        Props: {JSON.stringify(this.props)}
                    </p>
                </div>
            </div>
        );
    }
}

const cardStyle = {
    minHeight: "22rem",
};

const wide = {
    minWidth: "5rem",
};

SignIn.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    console.log("state for map props", state);
    return {
        count: state.signin.count,
        doubled: state.signin.doubled,
    };
};

export default connect(mapStateToProps, { increment, decrement })(SignIn);
