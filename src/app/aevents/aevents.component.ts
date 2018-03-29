import { Component, OnInit } from '@angular/core';

import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';
import { AeventService } from '../services/aevent.service';
import { Aevent, AeventLiteral } from '../models/Aevent';
import { LoginService } from '../services/login.service';


@Component({
    selector: 'app-aevents',
    templateUrl: './aevents.component.html',
    styleUrls: ['./aevents.component.css'],
    providers: [CategoryService,AeventService]
})

export class AeventsComponent implements OnInit
{
    private user_id: number = 0;
    private aevent_list: Array<Aevent> = [];
    private category_list: Array<Category> = [];
    private user_event_list: number[];

    //Injection de dépendance
    constructor(private categoryService: CategoryService,private aeventService: AeventService,private loginService: LoginService){}

    ngOnInit(): void
    {
        this.loginService.getUserId().subscribe( (id)=>{this.user_id = id;} );
        this.getAllCategories();
    }

    public getAllCategories()
    {
        this.categoryService.getAllCategories().subscribe(
            (data)=>{
                for (const category of data.category_list)
                {
                    this.category_list.push(new Category(category.id,category.name));
                }
                this.getAllAevents();
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    public getAllAevents()
    {
        this.aeventService.getAllAevents().subscribe(
            (data)=>{
                this.populateAevents(data.event_list);
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    public getAeventsByCategory(id_category: number)
    {
        this.aeventService.getAeventsByCategory(id_category).subscribe(
            (data)=>{
                this.populateAevents(data.event_list);
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    public populateAevents(aevent_list: AeventLiteral[])
    {
        for (const aevent_literal of aevent_list)
        {
            const aevent: Aevent = new Aevent();

            const index = this.getIndex(this.category_list,aevent_literal.id_category);
            const category_label: string = this.category_list[index].getLabel();

            aevent.setId(aevent_literal.id);
            aevent.setLabel(aevent_literal.name);
            aevent.setDate_start(new Date(aevent_literal.date_start));
            aevent.setDate_end(new Date(aevent_literal.date_end));
            aevent.setPosition(aevent_literal.position);
            aevent.setCategory(category_label);

            this.aevent_list.push(aevent);
        }
    }

    public getIndex(list: Array<Category>,id: number): number
    {
        for(const key in list)
        {
            const obj: Category = list[key];
            if(obj.getId() == id){
                return parseInt(key);
            }
        }
        return 0;
    }

}
