import { Component, Input, isDevMode, OnInit } from '@angular/core';

import { UtilsService } from 'app/services/utils.service';
import { ErrorObject } from 'app/interfaces/ErrorObject';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {

  @Input() errorObject: ErrorObject = {
    message: 'Não foi possível carregar a página'
  };

  defaults = {
    title: 'Oops!',
    icon: 'fa-frown-o'
  };

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    if (this.utilsService.isDevMode() && this.errorObject.error) {
      console.error(this.errorObject.error);
    }
  }
}
