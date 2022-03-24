import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('appHeader') appHeader: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  _getHeight() {
    return this.appHeader.nativeElement.clientHeight;
  }

}
