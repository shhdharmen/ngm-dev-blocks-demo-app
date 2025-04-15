/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-grid-lists/grid-list-1`
*/

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { members } from './grid-list-1.model';
// get classNames using `npx @ngm-dev/cli add utils/functions`
import { classNames } from '../../utils/functions/class-names';

@Component({
  selector: 'ngm-dev-block-grid-list-1',
  templateUrl: './grid-list-1.component.html',
  imports: [MatCardModule, MatIconModule, MatDividerModule],
})
export class GridList1Component {
  members = members;
  classNames = classNames;
}
