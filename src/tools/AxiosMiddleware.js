import axios from 'axios';

export default class AxiosMiddleware {
    init = () => {
        console.log("INIT");
        axios.defaults.headers.common['Token'] = "test";

        axios.interceptors.request.use(req => {
            //req.baseURL = "http://localhost:8080"; // TODO: change API endpoint
            return req;
        });

        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                const originalReq = err.config;
                if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
                    originalReq.__retry = true;
                    // TODO: handle no perm
                    console.log("no perm");
                }
            });
        });
    }
}