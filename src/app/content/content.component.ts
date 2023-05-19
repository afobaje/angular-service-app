import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {

  public searchText: string = '';
  constructor() {

  }

  

  onSubmit() {
    alert(this.searchText)
    this.searchText = ''
  }
}
