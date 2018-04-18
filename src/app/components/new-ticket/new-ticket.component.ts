import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MessageService} from '../../services/message.service'
import {Iticket} from '../../models/ticket'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  private ticket: Iticket = null;
  userData = null;
  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService, private cookieService: CookieService) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.messageService.emitMessage({"type":"sectionName","data":data.title});
      this.userData =  JSON.parse(this.cookieService.get('userData'));
    });
    this.ticket=
    {
       id:"1",
       title:"",
       requesterUser: this.userData.name,
       department:"",
       description:"",
       contact:""
     }
  }

  clearInputs(){
    this.ticket={
      id:"1",
      title:"",
      requesterUser: this.userData.name,
      department:"",
      description:"",
      contact:""
    };
  }
}
