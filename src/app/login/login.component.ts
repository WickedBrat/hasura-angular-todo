import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public auth: AuthService, private router: Router) {
    if (auth.isAuthenticated()) {
      router.navigate(['/add-item']);
    }
  }
  ngOnInit() {
  }

}
