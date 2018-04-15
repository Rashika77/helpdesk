import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MessageService} from '../../services/message.service'
@Component({
  selector: 'app-assigned-tickets',
  templateUrl: './assigned-tickets.component.html',
  styleUrls: ['./assigned-tickets.component.css']
})
export class AssignedTicketsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.messageService.emitMessage(data.title);
    });
  }

}
