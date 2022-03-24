import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '@/components/footer/footer.component';
import { HeaderComponent } from '@/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'sample-blog';
  @ViewChild('appContainer') appContainer: ElementRef;
  @ViewChild('appFooter') appFooter: FooterComponent;
  @ViewChild('appHeader') appHeader: HeaderComponent;

  ngAfterViewInit(): void {
    const headerHeight = this.appHeader._getHeight();
    const footerHeight = this.appFooter._getHeight();
    this.appContainer.nativeElement.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`;
  }

}
