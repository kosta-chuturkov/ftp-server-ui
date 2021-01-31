import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class EventEmitterService {
  @Output() userEmailEventEmitter = new EventEmitter<string>();
  constructor() {
  }
}
