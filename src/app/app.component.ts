import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './components/services/login.service';
import { SharedApiService } from './shared/shared-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'receipe';
}