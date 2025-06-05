/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-authentication/login-email-password`
*/

import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'ngm-dev-block-login-email-password',
  templateUrl: './login-email-password.component.html',
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    NgOptimizedImage,
    FormsModule,
  ],
})
export default class LoginEmailPasswordComponent {
  auth = inject(Auth);

  credentials = {
    email: '',
    password: '',
  };

  showAlert = signal(false);
  alertMsg = signal('Please wait! We are logging you in.');
  alertColor = signal('blue');
  inSubmission = signal(false);

  async login() {
    this.showAlert.set(true);
    this.alertMsg.set('Please wait! We are logging you in.');
    this.alertColor.set('blue');
    this.inSubmission.set(true);

    try {
      await signInWithEmailAndPassword(
        this.auth,
        this.credentials.email,
        this.credentials.password
      );
    } catch (e) {
      this.inSubmission.set(false);
      this.alertMsg.set('An unexpected error occured! Please try again later.');
      this.alertColor.set('red');

      console.error(e);

      return;
    }

    this.alertMsg.set('Success! You are now logged in.');
    this.alertColor.set('green');
  }
}
