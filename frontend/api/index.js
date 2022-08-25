import axios from "axios";
import _ from "lodash";
import qs from "qs";

const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
};

export default axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    responseType: "json",
    headers: headers,
    transformRequest: (data) => qs.stringify(data)
});
