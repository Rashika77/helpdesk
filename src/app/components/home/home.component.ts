import { Component, OnInit } from '@angular/core';
import { MessageService} from '../../services/message.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "New Ticket";
  constructor(private messageService: MessageService) {
  }
  ngOnInit() {
     this.messageService.message.subscribe(messageObject => {
      if(messageObject.type === "sectionName"){
        this.title = messageObject.data;
      }
    });
  }

}
