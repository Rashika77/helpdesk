import { Component, OnInit } from '@angular/core';
import { MessageService} from '../../services/message.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = null;
  constructor(private messageService: MessageService) {
  }
  ngOnInit() {
    this.messageService.message.subscribe((title)=>{
      this.title = title;
    });
  }

}
