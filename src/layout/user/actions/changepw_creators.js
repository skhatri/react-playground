import changePasswordService from "../services/changepw.service";
import {Events} from "../model";

const {ChangePassword} = Events;

export function oldPasswordInput(value) {
    return {
        type: ChangePassword.OldPasswordEntered,
        data: {
            oldPassword: value,
        },
    };
}

export function newPasswordInput(value) {
    return {
        type: ChangePassword.NewPasswordEntered,
        data: {
            newPassword: value,
        },
    };
}

export function confirmNewPasswordInput(value) {
    return {
        type: ChangePassword.ConfirmPasswordEntered,
        data: {
            confirmNewPassword: value,
        }
    }
}


export function performChangePassword(oldPassword, newPassword, confirmNewPassword) {
    return (dispatch) => {
        changePasswordService.performChangePassword(oldPassword, newPassword, confirmNewPassword)
            .then(data => {
                dispatch({
                    type: ChangePassword.ResultFullFilled,
                    data: data
                });
            }).catch(err => {
            dispatch({
                type: ChangePassword.ResultError,
                data: err
            });
        })
    };
}
