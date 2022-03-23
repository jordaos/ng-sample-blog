import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild('appFooter') appFooter: ElementRef;

  goToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  _getHeight() {
    return this.appFooter.nativeElement.clientHeight;
  }
}
