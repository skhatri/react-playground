import {Events} from "../model";

const {ChangePassword} = Events;

const initState = {
    input: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    },
    output: {
        changed: false,
        message: "",
        error: false
    }
};

export function changePasswordReducer(state = initState, action) {
    switch (action.type) {
        case ChangePassword.OldPasswordEntered:
            let oldPwState = Object.assign({}, state);
            oldPwState.input.oldPassword = action.data.oldPassword
            return oldPwState;
        case ChangePassword.NewPasswordEntered:
            let newPwState = Object.assign({}, state);
            newPwState.input.newPassword = action.data.newPassword
            return newPwState;
        case ChangePassword.ConfirmPasswordEntered:
            let confirmPwState = Object.assign({}, state);
            confirmPwState.input.confirmNewPassword = action.data.confirmNewPassword
            return confirmPwState;
        case ChangePassword.ResultFulFilled:
            return Object.assign({}, state, {
                output: action.data
            });
        case ChangePassword.ResultError:
            return Object.assign({}, state, {
                output: action.data
            });
        default:
            return state;

    }
}