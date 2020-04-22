export class UserToken {
    constructor(accessToken, refreshToken, validity, username) {
    }
}

export const Events = {
    SignIn: {
        UsernameEntered: "SIGNIN_USERNAME_INPUT",
        PasswordEntered: "SIGNIN_PASSWORD_INPUT",
        ResultFulFilled: "SIGNIN_RESULT_FULFILLED",
        ResultError: "SIGNIN_RESULT_ERROR",
        Logout: "SIGNIN_LOGOUT"
    },
    ChangePassword: {
        OldPasswordEntered: "CHANGEPW_OLD_PASSWORD_INPUT",
        NewPasswordEntered: "CHANGEPW_NEW_PASSWORD_INPUT",
        ConfirmPasswordEntered: "CHANGEPW_CONFIRM_NEW_PASSWORD_INPUT",
        ResultFulFilled: "CHANGEPW_RESULT_FULFILLED",
        ResultError: "CHANGEPW_RESULT_ERROR"
    },
    Profile: {
        FirstNameEntered: "PROFILE_FIRST_NAME_INPUT",
        LastNameEntered: "PROFILE_LAST_NAME_INPUT",
        EmailEntered: "PROFILE_EMAIL_INPUT",
        ResultFulFilled: "PROFILE_RESULT_FULFILLED",
        ResultError: "PROFILE_RESULT_ERROR",
        LoadProfile: "PROFILE_LOAD"
    }
}

