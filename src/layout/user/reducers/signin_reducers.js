const initState = {
    input: {
        username: "",
        password: ""
    },
    output: {
        message: "",
        error: false
    }
}

export function signinReducer(state = initState, action) {
    switch (action.type) {
        case "SIGNIN_RESULT_FULLFILLED":
            console.log("Signin Result", action.data);
            let loginState = Object.assign({}, state)
            loginState.input.password = "";
            loginState.output = action.data;
            window.localStorage.setItem("token", JSON.stringify(action.data));
            return loginState;
        case "SIGNIN_PASSWORD_INPUT":
            window.localStorage.removeItem("token");
            console.log("state input before pass", state.input)
            let pwState = Object.assign({}, state)
            pwState.input.password = action.data.password;
            return pwState;
        case "SIGNIN_USERNAME_INPUT":
            window.localStorage.removeItem("token");
            let userState = Object.assign({}, state)
            userState.input.username = action.data.username;
            return userState;
        case "SIGNIN_RESULT_ERROR":
            window.localStorage.removeItem("token");
            let errorState = Object.assign({}, state)
            errorState.input.password = "";
            errorState.output = action.data;
            return errorState;
        case "SIGNIN_LOGOUT":
            window.localStorage.removeItem("token");
            let signoutState = Object.assign({}, state, {
                output: {
                    loggedIn: false,
                    username: "",
                    error: false,
                    message: "Logged Out!"
                }
            });
            return signoutState;
        default:
            console.log("Action Type", action.type);
            return state;
    }
}
