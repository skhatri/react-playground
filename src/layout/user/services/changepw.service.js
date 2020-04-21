import {authenticatedCall} from "../../../app/services/backend";
import {Username} from "../../../app/services/auth";

class ChangePasswordService {
    constructor() {
    }

    performChangePassword(oldPassword, newPassword, confirmNewPassword) {
        let future = new Promise((resolve, reject) => {
            let username = Username();
            console.log("Performing Change Password", username);
            let payload = {
                "username": username,
                "old_password": oldPassword,
                "new_password": newPassword,
                "confirm_password": confirmNewPassword
            };
            authenticatedCall("/api/v1/changepw", payload, (res, rej) => {
                if (res) {
                    resolve(Object.assign({}, res, {
                        message: "Password changed successfully",
                        error: false,
                        changed: true,
                    }));
                } else {
                    reject({
                        message: rej["message"],
                        error: true,
                        changed: false,
                    })
                }
            });
        });
        return future;
    }
}

const changePasswordService = new ChangePasswordService();
export default changePasswordService;