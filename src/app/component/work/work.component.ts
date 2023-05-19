import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Interface/item.interface';
import { ItemsService } from 'src/app/services/items-service.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  items: Item[];
  constructor(itemService: ItemsService) {
    this.items = itemService.item
    console.log(this.items,'ayo n i temi')
  }

  ngOnInit(): void {
  }

}
