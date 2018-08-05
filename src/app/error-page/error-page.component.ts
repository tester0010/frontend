import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
      <div id="errorContent">
        Page Not Found. Redirecting . .
      </div>
  `,
  styles: [`
    #errorContent {
      font-size: 50px;
      margin: 0 auto;
      padding-top: 20%;
      width: 650px;
    }
  `]
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
