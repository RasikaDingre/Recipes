import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user'

import { Session } from './globals';

//mock
let users = [
  new User('Rasika', 'welcome'),
  new User('kavitha@gmail.com', 'hi')
];

@Injectable({ providedIn: 'root' })
export class LoginService {
  private authenticatedUser: User | undefined;

  constructor(private _router: Router) { }

  login(user: User) {
    //http.post(url,user)
    this.authenticatedUser =
      users.find((u) => u.username === user.username);

    if (this.authenticatedUser &&
      this.authenticatedUser.password === user.password) {

      window.localStorage.setItem("user", user.username);
      //$rootScope
      Session.authenticated = true;
      Session.username = user.username;
      Session.jwttoken = "lkfjdskjfsljfdsf kfklsdjfklsdffsfsdfdffsfjsfj32jjk"
      Session.sessionID = "123443434354646"
      //response.headers.jwttoken
      this._router.navigate(['home']);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem("user");
    Session.authenticated = false;
    Session.jwttoken = null
    this._router.navigate(['/']);

  }

  checkCredentials() {
    return true;
  }
}