/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update utils/services`
*/

import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  private readonly breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 640px)')
    .pipe(map(result => result.matches));

  isTablet$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 960px)')
    .pipe(map(result => result.matches));

  isLessThanMD$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 768px)')
    .pipe(map(result => result.matches));

  canViewToc$ = this.breakpointObserver.observe('(max-width: 960px)').pipe(
    map(result => {
      return !result.matches;
    })
  );
}
