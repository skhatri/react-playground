import Axios from "axios";
import {IsLoggedIn, AuthToken } from "./auth"
const base = "http://localhost:4040"


export function authenticatedCall(uri, payload, cb) {
    let accessToken = AuthToken();
    Axios.post(`${base}${uri}`,
        JSON.stringify(payload),
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${accessToken}`
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
                cb(undefined, {message: "unknown error during change password."})
            }
        }
    });
}
