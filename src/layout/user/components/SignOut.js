import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {performLogout} from "../actions/signin_creators"
import PropTypes from "prop-types";

export class SignOut extends Component {

    componentDidMount() {
        this.props.performLogout(this.props.message);
        this.props.history.push("/signin");
    }

    render() {
        return (
            <div>Please wait...</div>
        );
    }
}

SignOut.propTypes = {
    performLogout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    performLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignOut));