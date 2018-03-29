import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService
{
    private api_url: string = 'http://localhost/jpmc-php/tp_events_angular/api';

    constructor(private http: HttpClient){}

    login(login_pass): Observable<{success: string,id: string}>
    {
        return this.http.post(this.api_url + '/userlogin',login_pass) as Observable<{success: string,id: string}>;
    }

    isLogged(): Observable<{success: string,id: string}>
    {
        return this.http.get(this.api_url + '/islogged') as Observable<{success: string,id: string}>;
    }

}