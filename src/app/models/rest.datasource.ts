import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of  } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { Advertisement } from "./advertisement.model";
import { QuestionAnswer } from "./questionAnswer.model";
import { User } from "./user.model";
import { ResponseModel } from "./response.model";
import {environment} from "src/environments/environment"

 //const PROTOCOL = "http";
 //const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiurl;
        console.log(this.baseUrl);
        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    // Advertisement
    getAdvertisementList(): Observable<Advertisement[]> {
        return this.http.get<Advertisement[]>(this.baseUrl + "advertisement/list");
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
        return this.http.put<ResponseModel>(`${this.baseUrl}advertisement/edit/${item._id}`,
            item, this.provideToken()).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    deleteAdvertisement(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(`${this.baseUrl}advertisement/delete/${id}`,
            this.provideToken()).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    // Questions & Answers
    getQuestionAnswerList(): Observable<QuestionAnswer[]> {
        return this.http.get<QuestionAnswer[]>(this.baseUrl + "question");
    }

    insertQuestionAnswer(item: QuestionAnswer): Observable<Advertisement> {
        return this.http.post<QuestionAnswer>(
                this.baseUrl + "question/add",
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

    updateQuestionAnswer(item: QuestionAnswer): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(`${this.baseUrl}question/edit/${item._id}/${item.AdvertisementID}`,
            item, this.provideToken()).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    deleteQuestionAnswer(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(`${this.baseUrl}question/delete/${id}`,
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
