import React, { Component } from "react";
import SignOut from "./components/SignOut";

export class SignOutOnChange extends Component {

    render() {
        return (
            <div className="container-fluid w-100">
                <div>&nbsp;</div>
                <div className="row w-100">
                    <div className="col-sm-4">
                        <SignOut message="You have successfully changed your password. Please login to continue."/>
                    </div>

                </div>
            </div>
        );
    }
}
