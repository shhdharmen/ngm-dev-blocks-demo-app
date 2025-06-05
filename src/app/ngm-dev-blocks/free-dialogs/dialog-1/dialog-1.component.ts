/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-dialogs/dialog-1`
*/

import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { TransferDialogComponent } from './transfer-dialog.component';

@Component({
  selector: 'ngm-dev-block-dialog-1',
  templateUrl: './dialog-1.component.html',
  imports: [MatIconModule, MatButtonModule, MatDialogModule],
})
export class Dialog1Component {
  private dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(TransferDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dialog confirmed:', result);
      }
    });
  }
}
