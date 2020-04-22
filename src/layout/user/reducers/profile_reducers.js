import {Events} from "../model";

const {Profile} = Events;

const initState = {
    input: {
        first_name: "",
        last_name: "",
        email: ""
    },
    output: {
        updated: false,
        message: "",
        error: false,
        changed: false,
    }
};

export function updateProfileReducer(state = initState, action) {
    switch (action.type) {
        case Profile.FirstNameEntered:
            let oldFirstNameState = Object.assign({}, state);
            oldFirstNameState.input.first_name = action.data.firstName
            return oldFirstNameState;
        case Profile.LastNameEntered:
            let oldLastNameState = Object.assign({}, state);
            oldLastNameState.input.last_name = action.data.lastName
            return oldLastNameState;
        case Profile.EmailEntered:
            let oldEmailState = Object.assign({}, state);
            oldEmailState.input.email = action.data.email
            return oldEmailState;
        case Profile.ResultFulFilled:
            return Object.assign({}, state, {
                output: action.data
            });
        case Profile.ResultError:
            return Object.assign({}, state, {
                output: action.data
            });
        case Profile.LoadProfile:
            let loadInput = {
                input: Object.assign({}, state.input, action.data.input),
                output: Object.assign({}, state.output, action.data.output)
            };
            return loadInput;
        default:
            return state;

    }
}