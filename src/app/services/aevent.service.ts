import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Aevent, AeventLiteral } from '../models/Aevent';

interface AeventJson
{
    success: boolean,
    event_list: AeventLiteral[]
}

@Injectable()
export class AeventService {

    private service_url: string = 'http://localhost/jpmc-php/webservice_tp/api';

    constructor(private http: HttpClient){}

    getAllAevents(): Observable<AeventJson>
    {
        return this.http.get(this.service_url + '/event') as Observable<AeventJson>;
    }
    getAeventsByCategory(id_category: number): Observable<AeventJson>
    {
        return this.http.get(this.service_url + '/category/' + id_category) as Observable<AeventJson>;
    }

}