import { Injectable } from '@angular/core';
import { Item } from '../Interface/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  item:Item[]=[
    {
      name:'rapid Coder',
      title:'I will write your figma to html and css',
      level:'pro seller',
      rating:1
    },
    {
      name:'rapid Coder',
      title:'I will write your figma to html and css',
      level:'pro seller',
      rating:2
    },
    {
      name:'rapid Coder',
      title:'I will write your figma to html and css',
      level:'pro seller',
      rating:3
    },
    {
      name:'rapid Coder',
      title:'I will write your figma to html and css',
      level:'pro seller',
      rating:4
    },
    {
      name:'rapid Coder',
      title:'I will write your figma to html and css',
      level:'pro seller',
      rating:5
    },
    {
      name:'rapid Coder',
      title:'I will write your figma to html and css',
      level:'pro seller',
      rating:6
    },
    {
      name:'rapid Coder',
      title:'I will write your figma to html and css',
      level:'pro seller',
      rating:7
    },
    {
      name:'Ikukoyi David',
      title:'I will create excellent pixel perfect website with accompanying animations',
      level:'expert',
      rating:10
    }
  ]
  constructor() { }
}
