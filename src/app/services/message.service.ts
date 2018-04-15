import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MessageService {
  public message = new EventEmitter<String>();
  constructor() { }
  emitMessage(data){
    this.message.emit(data);
  }
}
