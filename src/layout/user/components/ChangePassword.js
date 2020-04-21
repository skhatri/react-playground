import React, {Component} from "react";
import {connect} from "react-redux";
import {performChangePassword, oldPasswordInput, newPasswordInput, confirmNewPasswordInput} from "../actions/changepw_creators";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";
import {IsLoggedIn} from "../../../app/services/auth";

export class ChangePassword extends Component {

    updateOldPassword(ev) {
        this.props.oldPasswordInput(ev.target.value)
    }

    updateNewPassword(ev) {
        this.props.newPasswordInput(ev.target.value)
    }

    updateConfirmNewPassword(ev) {
        this.props.confirmNewPasswordInput(ev.target.value)
    }

    changePassword() {
        this.props.performChangePassword(this.props.oldPassword, this.props.newPassword, this.props.confirmNewPassword)
    }

    messageStyleName() {
        if (this.props.error) {
            return "alert alert-danger";
        }
        return "";
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.changed !== undefined && this.props.changed === true) {
            this.props.history.push("/");
        }

    }

    componentDidMount() {
        console.log("change pw logged in state", this.props.isLogged);
        console.log("change pw access token", this.props.accessToken);
    }

    changePasswordForm() {
        return (
            <div>
                <span className={this.messageStyleName()}>{this.props.message}</span>
                <form className="form-changepw">
                    <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                         alt=""
                         width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">{this.props.title}</h1>
                    <label htmlFor="inputOldPassword" className="sr-only">Old Password</label>
                    <input type="text" id="inputOldPassword" className="form-control" placeholder="Old Password" required=""
                           autoFocus=""
                           value={this.props.oldPassword}
                           onChange={this.updateOldPassword.bind(this)}/>
                    <label htmlFor="inputNewPassword" className="sr-only">Confirm Password</label>
                    <input type="password" id="inputNewPassword" className="form-control" placeholder="New Password"
                           required=""
                           value={this.props.newPassword}
                           onChange={this.updateNewPassword.bind(this)}/>
                    <label htmlFor="inputConfirmNewPassword" className="sr-only">Confirm New Password</label>
                    <input type="password" id="inputConfirmNewPassword" className="form-control" placeholder="Confirm New Password"
                           required=""
                           value={this.props.confirmNewPassword}
                           onChange={this.updateConfirmNewPassword.bind(this)}/>

                    <button className="btn btn-lg btn-primary btn-block" type="button"
                            disabled={this.props.newPassword === undefined || this.props.newPassword.length < 6 || this.props.newPassword !== this.props.confirmNewPassword}
                            onClick={this.changePassword.bind(this)}>Change Password
                    </button>
                </form>
            </div>
        );
    }
    clientDenied() {
        return (
            <div><span className="alert alert-danger">
                LoggedIn: {this.props.isLogged},
                Logged In 2: {IsLoggedIn()}
                You need to login first. Click <Link to="/signin">here</Link> to login.
            </span></div>
        )
    }
    render() {
        return this.props.isLogged ? this.changePasswordForm(): this.clientDenied()
    }
}

ChangePassword.propTypes = {
    performChangePassword: PropTypes.func.isRequired,
    oldPasswordInput: PropTypes.func.isRequired,
    newPasswordInput: PropTypes.func.isRequired,
    confirmNewPasswordInput: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        oldPassword: state.changepw.input.oldPassword,
        newPassword: state.changepw.input.newPassword,
        confirmNewPassword: state.changepw.input.confirmNewPassword,
        error: state.changepw.output.error,
        message: state.changepw.output.message,
        changed: state.changepw.output.changed,
        isLogged: state.signin.output.loggedIn,
    };
};

export default connect(mapStateToProps, {
    performChangePassword,
    oldPasswordInput,
    newPasswordInput,
    confirmNewPasswordInput,
})(withRouter(ChangePassword));
