import Axios from "axios";

const base = "http://localhost:4040"

/*
        Axios.post(`${base}/api/v1/login`, JSON.stringify({"username": username, "password": password}),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            }
        )

     fetch(`${base}/api/v1/login`, {
            method: "POST",
            body: JSON.stringify({"username": username, "password": password}),
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000",
                "Accept": "application/json",
            },
        }).then((res) => res.json())

 */
class SignInService {
    constructor() {
    }

    async login(username, password, cb) {
        Axios.post(`${base}/api/v1/login`, JSON.stringify({"username": username, "password": password}),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            }
        ).then((responseData) => responseData.data).then(d => {
            if (typeof cb !== "undefined") {
                let data = d.data;
                if (data.length === 1) {
                    cb(data[0], undefined);
                } else {
                    cb(undefined, {"message": "unexpected response data"})
                }
            }
        }).catch((err) => {
            console.log("error received [", err.response.data, "]")
            if (typeof cb !== "undefined") {
                let errs = err.response.data.errors || [];
                if (errs.length > 0) {
                    cb(undefined, {message: errs[0].summary});
                } else {
                    cb(undefined, {message: "unknown error during login."})
                }
            }
        });
    }

    performLogin(username, password) {
        console.log("Performing Login", username, password);
        let future = new Promise((resolve, reject) => {
            if (username === "suresh" && password === "password") {
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
                this.login(username, password, (res, rej) => {
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
            }
        });
        return future;
    }
}

const signinService = new SignInService();
export default signinService;