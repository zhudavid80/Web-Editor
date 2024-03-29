import { Injectable, OnInit ,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmitSubService {
  eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  setEmitEventSub(event) {
    this.eventEmitter.next(event)
  }
  
  getEmitEventSub() {
    return this.eventEmitter;
  }
}