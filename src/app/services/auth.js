export  function IsLoggedIn() {
    console.log("check login state");
    let tokenStr = window.localStorage.getItem("token");
    if (tokenStr === undefined || tokenStr === "") {
        return false;
    }
    try {
        let token = JSON.parse(tokenStr);
        let isLogged = token.accessToken !== undefined && token.accessToken !== "";
        console.log("login status, loggedIn:", isLogged);
        return isLogged;
    } catch (e) {
        console.log("bad token. clearing it");
        window.localStorage.removeItem("token");
        return false;
    }
}

export  function LogOut() {
    let tokenStr = window.localStorage.getItem("token");
    if (tokenStr !== undefined) {
        window.localStorage.removeItem("token");
    }
}

export function Username() {
    try {
        let tokenStr = window.localStorage.getItem("token");
        let token = JSON.parse(tokenStr);
        return token.username;
    } catch (e) {
    }
    return "";
}

export function AuthToken() {
    //TODO if expired, make a call to refresh and store it
    try {
        let tokenStr = window.localStorage.getItem("token");
        let token = JSON.parse(tokenStr);
        return token.accessToken;
    } catch (e) {
    }
    return "";
}