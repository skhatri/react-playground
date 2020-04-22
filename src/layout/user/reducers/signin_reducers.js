import {Events} from "../model";
const {SignIn} = Events;

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
        case SignIn.ResultFulFilled:
            console.log("SignIn Result", action.data);
            let loginState = Object.assign({}, state)
            loginState.input.password = "";
            loginState.output = action.data;
            window.localStorage.setItem("token", JSON.stringify(action.data));
            console.log("login state", loginState);
            return loginState;
        case SignIn.PasswordEntered:
            window.localStorage.removeItem("token");
            console.log("state input before pass", state.input)
            let pwState = Object.assign({}, state)
            pwState.input.password = action.data.password;
            return pwState;
        case SignIn.UsernameEntered:
            window.localStorage.removeItem("token");
            let userState = Object.assign({}, state)
            userState.input.username = action.data.username;
            return userState;
        case SignIn.ResultError:
            window.localStorage.removeItem("token");
            let errorState = Object.assign({}, state)
            errorState.input.password = "";
            errorState.output = action.data;
            return errorState;
        case SignIn.Logout:
            window.localStorage.removeItem("token");
            let signoutState = Object.assign({}, state, {
                output: {
                    loggedIn: false,
                    username: "",
                    error: false,
                    message: action.data.message
                }
            });
            console.log("sign out", "state", signoutState);
            return signoutState;
        default:
            console.log("Action Type", action.type);
            return state;
    }
}
