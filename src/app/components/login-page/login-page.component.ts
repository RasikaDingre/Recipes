import {Component} from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../services/user';


@Component({
      templateUrl:'./login-page.component.html'
}) 
export class LoginComponent {
    status:boolean=false
    public user = new User('Rasika','welcome');// JSON Binding
    
    public errorMsg:any=''
 
    constructor(private _service:LoginService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Sorry...Invalid Username or Password'
            this.status=false;    
            alert(this.errorMsg)      
      
        }else{
            this.status=true;
        }
    }
}
