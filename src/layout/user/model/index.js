export class UserToken {
    constructor(accessToken, refreshToken, validity, username) {
    }
}

export const Events = {
    SignIn: {
        UsernameEntered: "SIGNIN_USERNAME_INPUT",
        PasswordEntered: "SIGNIN_PASSWORD_INPUT",
        ResultFullFilled: "SIGNIN_RESULT_FULLFILLED",
        ResultError: "SIGNIN_RESULT_ERROR",
        Logout: "SIGNIN_LOGOUT"
    },
    ChangePassword: {
        OldPasswordEntered: "CHANGEPW_OLD_PASSWORD_INPUT",
        NewPasswordEntered: "CHANGEPW_NEW_PASSWORD_INPUT",
        ConfirmPasswordEntered: "CHANGEPW_CONFIRM_NEW_PASSWORD_INPUT",
        ResultFullFilled: "CHANGEPW_RESULT_FULLFILLED",
        ResultError: "CHANGEPW_RESULT_ERROR"
    }
}

