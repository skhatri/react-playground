import {authenticatedGet, authenticatedPost} from "../../../app/services/backend";
import {Username} from "../../../app/services/auth";

class ProfileService {
    constructor() {
    }

    loadProfile() {
        let future = new Promise((resolve, reject) => {
            let username = Username();
            let uuid = username;
            console.log("Loading Profile", username);
            authenticatedGet(`/api/v1/profile/${uuid}`, (res, rej) => {
                if (res) {
                    resolve(Object.assign({}, res, {
                        input: res,
                        output: {
                            message: "",
                            error: false,
                            updated: false,
                        }
                    }));
                } else {
                    reject({
                        message: rej["message"],
                        error: true,
                        updated: false,
                    })
                }
            });
        });
        return future;
    }

    performProfileUpdate(firstName, lastName, email) {
        let future = new Promise((resolve, reject) => {
            let username = Username();
            let uuid = username;
            console.log("Performing Profile Update", username);
            let payload = {
                "uuid": uuid,
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
            };
            authenticatedPost(`/api/v1/profile/${uuid}`, payload, (res, rej) => {
                if (res) {
                    resolve(Object.assign({}, res, {
                        message: "Profile updated successfully",
                        error: false,
                        updated: true,
                    }));
                } else {
                    reject({
                        message: rej["message"],
                        error: true,
                        updated: false,
                    })
                }
            });
        });
        return future;
    }
}

const profileService = new ProfileService();
export default profileService;