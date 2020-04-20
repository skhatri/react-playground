import signinService from "../services/signin.service";


export function updateUsername(value) {
    return {
        type: "SIGNIN_USERNAME_INPUT",
        data: {
            username: value,
        },
    };
}

export function updatePassword(value) {
    return {
        type: "SIGNIN_PASSWORD_INPUT",
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
                    type: "SIGNIN_RESULT_FULLFILLED",
                    data: data
                });
            }).catch(err => {
            dispatch({
                type: "SIGNIN_RESULT_ERROR",
                data: err
            });
        })
    };
}


export function performLogout() {
    return {
        type: "SIGNIN_LOGOUT",
        data: {
        },
    };
}
