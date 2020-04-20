export  function IsLoggedIn() {
    console.log("check login state");
    let tokenStr = window.localStorage.getItem("token");
    if (tokenStr === undefined || tokenStr === "") {
        console.log("token is empty.");
        return false;
    }
    try {
        let token = JSON.parse(tokenStr);
        console.log("parsing token str", token);
        return token.accessToken !== undefined && token.accessToken != "";
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