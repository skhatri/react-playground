
class SignInService {
    constructor() {
    }

    performLogin(username, password) {
        if (password === "password") {

        }
        console.log("Performing Login", username, password);
        let future = new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    if (username === "suresh") {
                        let token = {
                            accessToken: "abcdef",
                            refreshToken: "ghijkl",
                            validity: 1000,
                            username: username,

                        };
                        resolve(Object.assign({}, token, {
                            message: "",
                            error: false,
                            loggedIn: true
                        }));
                    } else {
                        reject({
                            message: "Invalid Username/Password",
                            error: true,
                            loggedIn: false
                        })
                    }
                }, 2000
            )
        });
        return future;
    }
}

const signinService = new SignInService();
export default signinService;