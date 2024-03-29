import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css']
})
export class BookingTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'employee', 'firstname', 'date', 'time'];
  
  bookings: any[] = [];

  constructor(private fb: FormBuilder, private server: ServerService) { }

  ngOnInit() {
    
    this.getBookings();
  }

  private getBookings()
  {
    this.server.getBookings().then((response: any) => {
      this.bookings = response;
      console.log('Response', this.bookings);
      



    })


  }
  

}
