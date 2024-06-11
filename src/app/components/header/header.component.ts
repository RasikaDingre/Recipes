import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  flag: boolean | undefined;
  
  constructor(
    private _service: LoginService,
  ) { }

  logout(event: any) {
    window.alert("You are successfully logged out");
    this.flag = true;
    this._service.logout();
  }
}
