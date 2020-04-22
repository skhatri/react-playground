import profileService from "../services/profile.service";
import {Events} from "../model";

const {Profile} = Events;

export function firstNameInput(value) {
    return {
        type: Profile.FirstNameEntered,
        data: {
            firstName: value,
        },
    };
}

export function lastNameInput(value) {
    return {
        type: Profile.LastNameEntered,
        data: {
            lastName: value,
        },
    };
}

export function emailInput(value) {
    return {
        type: Profile.EmailEntered,
        data: {
            email: value,
        }
    }
}

export function loadProfileData() {
    return (dispatch) => {
        profileService.loadProfile()
            .then(data => {
                dispatch({
                    type: Profile.LoadProfile,
                    data: data,
                });
            }).catch(err => {
            dispatch({
                type: Profile.ResultError,
                data: err,
            })
        });
    };
}

export function performProfileUpdate(firstName, lastName, email) {
    return (dispatch) => {
        profileService.performProfileUpdate(firstName, lastName, email)
            .then(data => {
                dispatch({
                    type: Profile.ResultFulFilled,
                    data: data
                });
            }).catch(err => {
            dispatch({
                type: Profile.ResultError,
                data: err
            });
        })
    };
}
