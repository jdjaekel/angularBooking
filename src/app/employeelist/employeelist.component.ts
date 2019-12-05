import { Component } from '@angular/core';
import { employees } from '../employees';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent{

  employees  = employees;

}
