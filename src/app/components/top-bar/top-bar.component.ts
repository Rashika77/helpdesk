import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MessageService } from '../../services/message.service'


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];
  id: string = null;
  tickets=[
    {id: 'ticket1'},
    {id: 'ticket2'},
    {id: 'ticket3'},
    {id: 'ticket4'},
    {id: 'ticket5'}
  ]
  constructor(private messageService : MessageService) { }

  ngOnInit() {
    this.messageService.message.subscribe(messageObject => {
      if(messageObject.type === "newtab"){
        this.tickets.push({id: messageObject.data});
      }
    });
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    if ((value || '').trim()) {
      this.tickets.push({ id: value.trim() });
    }
    if (input) {
      input.value = '';
    }
  }
  remove(ticket: any): void {
    let index = this.tickets.indexOf(ticket);

    if (index >= 0) {
      this.tickets.splice(index, 1);
    }
  }

  addClass(id: any) {
    this.id = id;
  }
}
