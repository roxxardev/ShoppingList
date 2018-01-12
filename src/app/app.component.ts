import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDt3F4zQ8xgifvW8rYw4bo5ZMKc648gRuk',
      authDomain: 'recipe-book-41568.firebaseapp.com'
    });

    const tokenKey = Object.keys(window.localStorage)
      .filter(
        value => value.startsWith('firebase:authUser')
      )[0];
    this.authService.token = JSON.parse(localStorage.getItem(tokenKey)).stsTokenManager.accessToken;
  }
}
