import Axios from "axios";
import {AuthToken} from "./auth"
import {ServiceUrls} from "./uri"

export function authenticatedGet(uri, cb) {
    return authenticatedCall(uri, null, cb, "GET")
}

export function authenticatedPost(uri, payload, cb) {
    return authenticatedCall(uri, payload, cb, "POST")
}

export function authenticatedCall(uri, payload, cb, method = "POST") {
    let accessToken = AuthToken();
    let promise;
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
    };
    const url = `${ServiceUrls.ProfileApp}${uri}`;

    if (method === "POST") {
        promise = Axios.post(url, JSON.stringify(payload), {headers: headers});
    } else {
        promise = Axios.get(url, {headers: headers});
    }

    promise.then((responseData) => responseData.data).then(d => {
        if (typeof cb !== "undefined") {
            let data = d.data;
            if (data.length === 1) {
                cb(data[0], undefined);
            } else {
                cb(undefined, {"message": "unexpected response data 🤯"})
            }
        }
    }).catch((err) => {
        console.log("error received [", err.response.data, "] 😳")
        if (typeof cb !== "undefined") {
            let errs = err.response.data.errors || [];
            if (errs.length > 0) {
                cb(undefined, {message: errs[0].summary});
            } else {
                cb(undefined, {message: "unknown error during change password. 🥵"})
            }
        }
    });
}
