import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header></app-header>
      <alert></alert>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
