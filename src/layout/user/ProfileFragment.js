import React, { Component } from "react";
import Profile from "./components/Profile";

export class ProfileFragment extends Component {

    render() {
        return (
            <div className="container-fluid w-100">
                <div>&nbsp;</div>
                <div className="row w-100">

                    <div className="col-sm-4">
                        <Profile title="Your Profile" />
                    </div>

                </div>
            </div>
        );
    }
}
