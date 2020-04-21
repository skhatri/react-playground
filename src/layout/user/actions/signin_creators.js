import signinService from "../services/signin.service";
import {Events} from "../model";

const {SignIn} = Events;

export function updateUsername(value) {
    return {
        type: SignIn.UsernameEntered,
        data: {
            username: value,
        },
    };
}

export function updatePassword(value) {
    return {
        type: SignIn.PasswordEntered,
        data: {
            password: value,
        },
    };
}


export function performLogin(username, password) {
    return (dispatch) => {
        signinService.performLogin(username, password)
            .then(data => {
                dispatch({
                    type: SignIn.ResultFullFilled,
                    data: data
                });
            }).catch(err => {
            dispatch({
                type: SignIn.ResultError,
                data: err
            });
        })
    };
}


export function performLogout(message) {
    if (message === undefined) {
        message = "Logged Off!!!";
    }
    return {
        type: SignIn.Logout,
        data: {
            message: message
        },
    };
}
