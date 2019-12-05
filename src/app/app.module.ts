import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';


import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 


import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';

import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

import {MatCardModule} from '@angular/material/card';
import { BookingTableComponent } from './booking-table/booking-table.component'; 


import {MatTableModule} from '@angular/material/table'; 
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    BookingTableComponent
     
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: EmployeelistComponent }
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule
    
  ],
  exports:[BookingTableComponent],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
