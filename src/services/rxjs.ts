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
    baseURL: string,
    contact: Object
): Observable<T> => {
    return defer(() =>
        api(baseURL).post<T>(baseURL, contact)
    ).pipe(map((result) => result.data));
};

export default { get, post };
