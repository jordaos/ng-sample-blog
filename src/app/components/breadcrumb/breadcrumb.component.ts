import { Component, Input } from '@angular/core';
import { BreadcrumbItem } from 'app/interfaces/BreadcrumbItem';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input() items: BreadcrumbItem[];

  constructor() { }

}
