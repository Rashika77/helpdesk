import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MessageService} from '../../services/message.service'
@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.messageService.emitMessage(data.title);
    });
  }

}
