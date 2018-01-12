import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css']
           })
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
                             apiKey: 'AIzaSyDt3F4zQ8xgifvW8rYw4bo5ZMKc648gRuk',
                             authDomain: 'recipe-book-41568.firebaseapp.com'
                           });
  }
}
