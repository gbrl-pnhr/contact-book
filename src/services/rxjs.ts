import { map, Observable, defer } from "rxjs"
import api from "./axios"

const get = <T>(
    url: string,
    baseURL?: string,
    params?: object,
): Observable<T> => {
    return defer(() =>
        api(baseURL).get<T>(url, params)
    ).pipe(map((result) => result.data));
};

const post = <T>(
    url:string,
    contact: object,
    baseURL?: string,
): Observable<T> => {
    return defer(() =>
        api(baseURL).post<T>(url, contact)
    ).pipe(map((result) => result.data));
};

const deleteR = <T>(
    url: string, 
    baseURL?: string
): Observable<T | void> => {
    return defer(() => api(baseURL).delete(url)).pipe(
      map((result) => result.data)
    );
};

export default { get, post, delete: deleteR };
