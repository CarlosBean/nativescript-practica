import { Component, OnInit } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');

@Component({
  selector: 'ns-signup',
  moduleId: module.id,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  public confirmPassword: string;
  public error: string;
  constructor() {
    this.email = '';
    this.password = '';
  }

  public signUp() {
    if (this.password != this.confirmPassword) {
      return (this.error = 'No coinciden las contraseñas');
    }

    this.error = '';

    console.log(this.email, this.password);

    firebase
      .createUser({
        email: this.email,
        password: this.password
      })
      .then(response => console.log('Resultadode la operación: ', response))
      .catch(err => {
        this.error = JSON.stringify(err);
        console.log(err);
      });
  }
  ngOnInit(): void {}
}
