import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() { setTimeout(() => this.router.navigateByUrl('/'), 2000); }

}
