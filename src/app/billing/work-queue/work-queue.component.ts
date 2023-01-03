import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";

@Component({
  selector: 'app-work-queue',
  templateUrl: './work-queue.component.html',
  styleUrls: ['./work-queue.component.scss']
})
export class WorkQueueComponent {

  columnDefs: ColDef[] = [
    {field: 'make'},
    {field: 'model'},
    {field: 'price'}
  ];

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxster', price: 72000}
  ];

  constructor() {
  }


}
