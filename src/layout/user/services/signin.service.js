import {authenticatedPost} from "../../../app/services/backend";

class SignInService {
    constructor() {
    }


    performLogin(username, password) {
        console.log("Performing Login", username, password);
        let future = new Promise((resolve, reject) => {
            authenticatedPost("/api/v1/login", {
                "username": username,
                "password": password
            }, (res, rej) => {
                console.log("response", res, "reject", rej);
                if (res) {
                    resolve(Object.assign({}, {
                        accessToken: res.access_token,
                        refreshToken: res.refresh_token,
                        validity: res.validity,
                        username: res.uuid,
                        validUntil: res.valid_until
                    }, {
                        message: "",
                        error: false,
                        loggedIn: true
                    }));
                } else {
                    reject({
                        message: rej["message"],
                        error: true,
                        loggedIn: false
                    })
                }
            });

        });
        return future;
    }
}

const signinService = new SignInService();
export default signinService;