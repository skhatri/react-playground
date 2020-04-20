import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

export class Navigate extends Component {

    loggedInMenu() {
        return (<div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
                <span className="nav-item nav-link">TODO</span>
            </Link>
            <Link to="/widgets" className="nav-item nav-link">
                <span className="nav-item nav-link">Calculator</span>
            </Link>

            <span className="nav-item">Welcome! {this.props.username}</span>
            <Link to="/signout" className="nav-item nav-link">
                <span className="nav-item nav-link">Sign Out</span>
            </Link>
            <Link to="/changepw" className="nav-item nav-link">
                <span className="nav-item nav-link">Change Password</span>
            </Link>
        </div>)
    }

    notLoggedInMenu() {
        return (<div className="navbar-nav">
            <Link to="/widgets" className="nav-item nav-link">
                <span className="nav-item nav-link">Calculator</span>
            </Link>
            <Link to="/register" className="nav-item nav-link">
                <span className="nav-item nav-link">Register</span>
            </Link>
            <Link to="/signin" className="nav-item nav-link">
                <span className="nav-item nav-link">Sign In</span>
            </Link>

        </div>)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
                <a className="navbar-brand" href="#">
                    Your Profile
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="App">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {
                        this.props.loggedIn ? this.loggedInMenu() : this.notLoggedInMenu()
                    }
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.signin.output.loggedIn,
        username: state.signin.output.username
    };
};

export default connect(mapStateToProps, {})(Navigate);