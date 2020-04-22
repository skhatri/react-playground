import React, {Component} from "react";
import {connect} from "react-redux";
import {firstNameInput, lastNameInput, emailInput, loadProfileData, performProfileUpdate} from "../actions/profile_creators";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";

export class Profile extends Component {

    updateFirstNameInput(ev) {
        this.props.firstNameInput(ev.target.value)
    }

    updateLastNameInput(ev) {
        this.props.lastNameInput(ev.target.value)
    }

    updateEmailInput(ev) {
        this.props.emailInput(ev.target.value)
    }

    updateProfile() {
        this.props.performProfileUpdate(this.props.firstName, this.props.lastName, this.props.email)
    }

    loadProfileData() {
        this.props.loadProfileData()
    }

    messageStyleName() {
        if (this.props.error) {
            return "alert alert-danger";
        }
        return "";
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.changed !== undefined && this.props.changed === true) {
            this.props.history.push("/signout-on-change");
        }
    }

    componentDidMount() {
        this.loadProfileData()
    }

    formIsIncomplete() {
        return this.props.firstName === undefined || this.props.lastName === undefined || this.props.email === undefined;
    }

    updateProfileForm() {
        return (
            <div>
                <form className="form-changepw">
                    {this.props.error? (<div className={this.messageStyleName()}>{this.props.message}</div>): (<div/>)}
                    <h1 className="h3 mb-3 font-weight-normal">{this.props.title}</h1>
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="First Name" required=""
                           autoFocus=""
                           value={this.props.firstName}
                           onChange={this.updateFirstNameInput.bind(this)}/>
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="Last Name"
                           required=""
                           value={this.props.lastName}
                           onChange={this.updateLastNameInput.bind(this)}/>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" id="email" className="form-control" placeholder="Email"
                           required=""
                           value={this.props.email}
                           onChange={this.updateEmailInput.bind(this)}/>

                    <button className="btn btn-lg btn-primary btn-block" type="button"
                            disabled={this.formIsIncomplete()}
                            onClick={this.updateProfile.bind(this)}>Save
                    </button>
                </form>
            </div>
        );
    }
    clientDenied() {
        return (
            <div><span className="alert alert-danger">
                You need to login first. Click <Link to="/signin">here</Link> to login.
            </span></div>
        )
    }
    render() {
        return this.props.isLogged ? this.updateProfileForm(): this.clientDenied()
    }
}

Profile.propTypes = {
    firstNameInput: PropTypes.func.isRequired,
    lastNameInput: PropTypes.func.isRequired,
    emailInput: PropTypes.func.isRequired,
    performProfileUpdate: PropTypes.func.isRequired,
    loadProfileData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        firstName: state.profile.input.first_name,
        lastName: state.profile.input.last_name,
        email: state.profile.input.email,

        error: state.changepw.output.error,
        message: state.changepw.output.message,
        updated: state.changepw.output.updated,

        isLogged: state.signin.output.loggedIn,
    };
};

export default connect(mapStateToProps, {
    firstNameInput,
    lastNameInput,
    emailInput,
    performProfileUpdate,
    loadProfileData
})(withRouter(Profile));
