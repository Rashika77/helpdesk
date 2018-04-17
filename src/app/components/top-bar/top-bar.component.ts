import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

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

  tickets=[
    {id: 'ticket1'},
    {id: 'ticket2'},
    {id: 'ticket3'},
    {id: 'ticket4'},
    {id: 'ticket5'}
  ]
  constructor() { }

  ngOnInit() {
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

}
