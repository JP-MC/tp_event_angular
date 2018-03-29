import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category, CategoryLiteral } from '../models/Category';

export interface CategoryJson
{
    success: boolean,
    category_list: CategoryLiteral[]
}

@Injectable()
export class CategoryService
{
    private service_url: string = 'http://localhost/jpmc-php/webservice_tp/api';

    constructor(private http: HttpClient){}

    getAllCategories(): Observable<CategoryJson>
    {
        return this.http.get(this.service_url + '/category') as Observable<CategoryJson>;
    }
}
