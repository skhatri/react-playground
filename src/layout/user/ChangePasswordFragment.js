import React, { Component } from "react";
import ChangePassword from "./components/ChangePassword";

export class ChangePasswordFragment extends Component {

    render() {
        return (
            <div className="container-fluid w-100">
                <div>&nbsp;</div>
                <div className="row w-100">

                    <div className="col-sm-4">
                        <ChangePassword title="Change Password" />
                    </div>

                </div>
            </div>
        );
    }
}
