/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-dialogs/dialog-1`
*/

import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'ngm-dev-block-transfer-dialog',
  templateUrl: './transfer-dialog.component.html',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
})
export class TransferDialogComponent {
  transferForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });
  hidePassword = signal(true);

  onSubmit() {
    if (this.transferForm.valid) {
      console.log('Form submitted:', this.transferForm.value);
    }
  }

  togglePasswordVisibility() {
    this.hidePassword.update((hidePassword) => !hidePassword);
  }
}
