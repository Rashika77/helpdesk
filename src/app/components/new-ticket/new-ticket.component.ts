import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MessageService } from '../../services/message.service'
import { Iticket } from '../../models/ticket'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  private ticket: Iticket = null;
  userData = null;
  chats = null;
  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService, private cookieService: CookieService) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.messageService.emitMessage({ "type": "sectionName", "data": data.data });
      this.userData = JSON.parse(this.cookieService.get('userData'));
    });
    let chatMessages = [
      this.userData.name+"(2038) has created a ticket 'TCKT000001' for Finance Department",
      "Status: New",
      "Priority: Urgent(P1)",
      "Attachment File: 'screenshot.png' has been uploaded by "+ this.userData.name
    ];
    let chatMessagesStr = chatMessages.join("<br/>");
    let newline = String.fromCharCode(13, 10);
    chatMessagesStr = chatMessagesStr.replace(new RegExp("<br/>", 'g'), newline.toString());
    this.chats = [{ "userData": this.userData, "message": chatMessagesStr, "time": new Date() }, { "userData": this.userData, "message": chatMessagesStr, "time": new Date() }, { "userData": this.userData, "message": chatMessagesStr, "time": new Date() }, { "userData": this.userData, "message": chatMessagesStr, "time": new Date() }, { "userData": this.userData, "message": chatMessagesStr, "time": new Date() }, { "userData": this.userData, "message": chatMessagesStr, "time": new Date() }];
    this.ticket =
      {
        id: "1",
        title: "",
        requesterUser: this.userData.name,
        department: "",
        description: "",
        contact: ""
      }
  }

  clearInputs() {
    this.ticket = {
      id: "1",
      title: "",
      requesterUser: this.userData.name,
      department: "",
      description: "",
      contact: ""
    };
  }
}
