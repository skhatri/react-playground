import React, { Component } from "react";
import SignOut from "./components/SignOut";

export class SignOutFragment extends Component {

    render() {
        return (
            <div className="container-fluid w-100">
                <div>&nbsp;</div>
                <div className="row w-100">
                    <div className="col-sm-4">
                        <SignOut/>
                    </div>

                </div>
            </div>
        );
    }
}

export default SignOutFragment;
