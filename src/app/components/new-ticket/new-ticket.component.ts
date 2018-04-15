import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MessageService} from '../../services/message.service'
@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.messageService.emitMessage(data.title);
    });
  }
}
