import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '@/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'todo-list';
  @ViewChild('appContainer') appContainer: ElementRef;
  @ViewChild('appFooter') appFooter: FooterComponent;
  @ViewChild('appHeader') appHeader: ElementRef;

  ngAfterViewInit(): void {
    const headerHeight = this.appHeader.nativeElement.clientHeight;
    const footerHeight = this.appFooter._getHeight();
    this.appContainer.nativeElement.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`;
  }

}
