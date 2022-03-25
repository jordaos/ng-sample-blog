import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('appHeader') appHeader: ElementRef;
  constructor() { }

  _getHeight() {
    return this.appHeader.nativeElement.clientHeight;
  }
}
