import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})
export class LoginComponent implements OnInit
{
    public id_user: number = 0;
    public user_login: string;

    public form_login: string;
    public form_pass: string;

    constructor(private userService: UserService,private loginService: LoginService){}

    ngOnInit()
    {
        //this.isLogged();
        this.sendUserId(this.id_user);
    }

    sendUserId(message: number): void
    {
        // send message to subscribers via observable subject
        this.loginService.sendUserId(message);
    }
 
    clearUserId(): void
    {
        // clear message
        this.loginService.clearUserId();
    }

    public onLogin(id_user: number)
    {
        //On enregistre l'id et le nom
        this.id_user = id_user;
        this.user_login = this.form_login;
        
        //Envoi de l'id au service login
        this.sendUserId(id_user);
                        
        //reset du form
        this.form_login = '';
        this.form_pass = '';
    }

    public login(): void
    {
        const login_pass = {
            login: this.form_login,
            pass: this.form_pass
        };
        this.userService.login(login_pass).subscribe(
            (data)=>{
                if(data){
                    if(data.success){
                        this.onLogin(parseInt(data.id));
                    }
                }
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    public logout(): void
    {
        this.id_user = 0;
        this.sendUserId(0);
    }

    public isLogged()
    {
        this.userService.isLogged().subscribe(
            (data)=>{
                if(data){
                    if(data.success){
                        this.onLogin(parseInt(data.id));
                    }
                }
            },
            (error)=>{
                console.log(error);
            }
        );
    }

}
