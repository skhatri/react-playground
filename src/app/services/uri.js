
export const ServiceUrls = (function () {
    console.log("environment", process.env.NODE_ENV);
    if (process.env.NODE_ENV === "development") {
        return {
            Todo: "http://localhost:8100",
            ProfileApp: "http://localhost:4040"
        };
    } else {
        return {
            Todo: "",
            ProfileApp: ""
        };
    }
}());
