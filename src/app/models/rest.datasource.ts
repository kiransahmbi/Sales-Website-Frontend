import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of  } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { Advertisement } from "./advertisement.model";
import { User } from "./user.model";
import { ResponseModel } from "./response.model";

 const PROTOCOL = "http";
 const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "http://localhost:3000/";
        console.log(this.baseUrl);
        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    // Advertisement
    getAdvertisementList(): Observable<Advertisement[]> {
        return this.http.get<Advertisement[]>(this.baseUrl + "Advertisement/advertisement");
    }

    insertAdvertisement(item: Advertisement): Observable<Advertisement> {
        return this.http.post<Advertisement>(
                this.baseUrl + "Advertisement/add",
                item, 
                this.provideToken()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {
                console.log(error.error);
                return of(error.error);
            }));
    }

    updateAdvertisement(item: Advertisement): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(`${this.baseUrl}Advertisement/edit/${item._id}`,
            item, this.provideToken()).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    deleteAdvertisement(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(`${this.baseUrl}Advertisement/delete/${id}`,
            this.provideToken()).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    // User endpoint of the API
    authenticate(user: string, pass: string): Observable<ResponseModel> {
        return this.http.post<any>(this.baseUrl + "users/signin", 
        {
            username: user, 
            password: pass
        }).pipe(
            map(response => {
                // console.log(response);
                this.auth_token = response.success ? response.token : null;
                return response;
            }),
            catchError(error => {return of(error.error)})
        );
    }

    signupUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "users/signup", user)
            .pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    // Previously called getOptions()
    private provideToken() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        }
    }
}
