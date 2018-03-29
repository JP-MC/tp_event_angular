import { Component,OnInit } from '@angular/core';

import { LoginService } from './services/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LoginService]
})
export class AppComponent
{
    private user_id: number;

    constructor(private loginService: LoginService){}

    ngOnInit()
    {
        this.loginService.getUserId().subscribe(
            (id)=>{this.user_id = id;}
        );
    }

}