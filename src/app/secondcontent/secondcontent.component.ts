import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcontent',
  templateUrl: './secondcontent.component.html',
  styleUrls: ['./secondcontent.component.scss'],
})
export class SecondcontentComponent implements OnInit {
  items = [
    {
      image: './assets/img/mantel1.png',
      description: 'BLAUER WALKANZUG',
      price: 180.0,
    },
    {
      image: './assets/img/mantel2.png',
      description: 'ROTER WALKANZUG',
      price: 180.0,
    },
    {
      image: './assets/img/mantel3.png',
      description: 'ROSA WALKANZUG',
      price: 180.0,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  openShoppingCard() {

  }

  addToBasket() {
    
  }
}
