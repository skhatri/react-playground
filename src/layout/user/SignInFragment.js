import React, { Component } from "react";
import SignIn from "./components/SignIn";

export class SignInFragment extends Component {

    render() {
        return (
            <div className="container-fluid w-100">
                <div>&nbsp;</div>
                <div className="row w-100">

                    <div className="col-sm-4">
                        <SignIn title="Sign In" />
                    </div>

                </div>
            </div>
        );
    }
}

export default SignInFragment;
