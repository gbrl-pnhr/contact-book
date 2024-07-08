import axios, { type AxiosRequestConfig } from "axios";

function apiConfig(baseUrl: string): AxiosRequestConfig {
    return {
      baseURL: baseUrl,
    };
  }

function initAxios(config: AxiosRequestConfig) {
    const instance = axios.create(config);
    instance.interceptors.request.use(
        (request) => {
            return request;
        },
        function (error) {
            return Promise.reject(error);
        }
    )

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    return instance;
}

function api(baseURL= "/api") {
    return initAxios(apiConfig(baseURL));
}


export default api;