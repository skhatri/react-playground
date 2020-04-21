import React, {Component} from "react";
import {connect} from "react-redux";
import {performLogin, updateUsername, updatePassword} from "../actions/signin_creators";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

export class SignIn extends Component {
    updateEmail(ev) {
        this.props.updateUsername(ev.target.value)
    }

    updatePassword(ev) {
        this.props.updatePassword(ev.target.value)
    }

    performLogin() {
        this.props.performLogin(this.props.username, this.props.password)
    }

    messageStyleName() {
        if (this.props.error) {
            return "alert alert-danger";
        }
        return "";
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.accessToken !== undefined && this.props.accessToken !== "") {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div>
                <span className={this.messageStyleName()}>{this.props.message}</span>
                <form className="form-signin">
                    <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                         alt=""
                         width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">{this.props.title}</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="text" id="inputEmail" className="form-control" placeholder="Email address" required=""
                           autoFocus=""
                           value={this.props.username}
                           onChange={this.updateEmail.bind(this)}/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                           required=""
                           value={this.props.password}
                           onChange={this.updatePassword.bind(this)}/>
                    <button className="btn btn-lg btn-primary btn-block" type="button"
                            disabled={this.props.password.length < 6}
                            onClick={this.performLogin.bind(this)}>Sign in
                    </button>
                </form>
            </div>

        );
    }
}

SignIn.propTypes = {
    performLogin: PropTypes.func.isRequired,
    updateUsername: PropTypes.func.isRequired,
    updatePassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        password: state.signin.input.password,
        username: state.signin.input.username,
        message: state.signin.output.message,
        error: state.signin.output.error,
        accessToken: state.signin.output.accessToken
    };
};

export default connect(mapStateToProps, {
    performLogin,
    updateUsername,
    updatePassword
})(withRouter(SignIn));
