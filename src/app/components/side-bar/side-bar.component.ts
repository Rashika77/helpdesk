import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service'
import { debug } from 'util';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private untitledTabCount: number = 1;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  addTicket() {
    this.messageService.emitMessage({ "type": "newtab", "data": "Untitled " + this.untitledTabCount++ });
  }

}
