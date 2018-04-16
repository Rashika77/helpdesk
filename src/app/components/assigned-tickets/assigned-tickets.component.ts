import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MessageService } from '../../services/message.service'
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { IticketList } from '../../models/ticket-list'
@Component({
  selector: 'app-assigned-tickets',
  templateUrl: './assigned-tickets.component.html',
  styleUrls: ['./assigned-tickets.component.css']
})
export class AssignedTicketsComponent implements OnInit {
  displayedColumns = ['id', 'title', 'created_on', 'status', 'assignee'];
  dataSource: MatTableDataSource<IticketList>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService) {
    const tickets: IticketList[] = [];
    for (let i = 1; i <= 100; i++) { tickets.push(createNewTicket(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(tickets);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.messageService.emitMessage(data.title);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  refresh() {
  }

}
function createNewTicket(id: number): IticketList {
  var ticket: IticketList = null;
  ticket = {
    id: id.toString(),
    title: 'title',
    created_on: '07/07/2007',
    status: 'status',
    assignee: 'assignee'
  };
  return ticket;
}
