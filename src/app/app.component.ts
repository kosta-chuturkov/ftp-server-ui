import {Component} from '@angular/core';
import {EventEmitterService} from './_services/event-emitter.service';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header [user]="loggedInUserMail"></app-header>
      <alert></alert>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  loggedInUserMail: string;
  constructor(private eventEmitterService: EventEmitterService) {
    this.eventEmitterService.userEmailEventEmitter.subscribe(data => this.loggedInUserMail = data);
  }
}
