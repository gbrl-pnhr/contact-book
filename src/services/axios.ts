import axios, {type AxiosInstance, type AxiosRequestConfig} from "axios";

function apiConfig(baseUrl: string): AxiosRequestConfig {
    return {
      baseURL: baseUrl,
    };
  }

function initAxios(config: AxiosRequestConfig, token?:any){
    const instance = axios.create(config);
    instance.interceptors.request.use(
        (request) =>{
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
            alert(error);
            return Promise.reject(error);
        }
    );

    return instance;
}

function api(baseURL= "/api", token?: any) {
    return initAxios(apiConfig(baseURL), token);
  }


export default api;