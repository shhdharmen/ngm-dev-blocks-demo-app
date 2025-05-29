/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update components/breadcrumbs`
*/

import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  Directive,
  input,
  contentChildren,
  inject,
  TemplateRef,
  contentChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Directive({
  selector: '[ngmDevBlockUiBreadcrumbItem]',
})
export class BreadcrumbItemDirective {
  public templateRef = inject(TemplateRef);
}

@Directive({
  selector: '[ngmDevBlockUiBreadcrumbSeparator]',
})
export class BreadcrumbSeparatorDirective {
  public templateRef = inject(TemplateRef);
}

@Component({
  selector: 'ngm-dev-block-ui-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  imports: [MatButtonModule, MatIconModule, NgTemplateOutlet],
})
export class BreadcrumbsComponent {
  ariaLabel = input<string>('breadcrumbs', { alias: 'aria-label' });

  items = contentChildren<BreadcrumbItemDirective>(BreadcrumbItemDirective);
  separatorTemplateRef = contentChild<BreadcrumbSeparatorDirective>(
    BreadcrumbSeparatorDirective
  );
}
