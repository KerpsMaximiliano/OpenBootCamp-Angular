import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpParams,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IRandomContact, Results } from '../models/random-user.interface';
// import { IRandomContact, Results } from '../models/random-user.interface';

@Injectable({
    providedIn: 'root',
})
export class RandomUserService {
    constructor(private http: HttpClient) {}

    getRandomContact(): Observable<Results> {
        return this.http
            .get<Results>('https://randomuser.me/api')
            .pipe(retry(2), catchError(this.handleError));
    }

    getRandomContacts(n: number, sex?: string): Observable<Results> {
        let params: HttpParams = new HttpParams().set('results', n);

        if (sex) {
            params = params.append('gender', sex);
        }

        return this.http
            .get<Results>('https://randomuser.me/api', { params: params })
            .pipe(retry(2), catchError(this.handleError));
    }

    // getRandomContactsSex(sex: string): Observable<Results> {
    //     const params: HttpParams = new HttpParams().set('gender', sex);

    //     return this.http
    //         .get<Results>('https://randomuser.me/api', {
    //             params: params,
    //         })
    //         .pipe(retry(2), catchError(this.handleError));
    // }

    handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error(`Error status: ${error.error}`);
        } else {
            console.error(`Error status: ${error.status}`);
            console.error(`Error backend: ${error.error}`);
        }
        return throwError(
            () => new Error(`Error en la petición de randomUser`)
        );
    }
}
