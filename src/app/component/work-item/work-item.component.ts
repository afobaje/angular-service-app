import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {
@Input() name:string='';
@Input() title:string='';
@Input() level:string='';
@Input() rating?:number;
  constructor() { }

  ngOnInit(): void {
  }

}
