import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketCardComponent } from '../basket-card/basket-card.component';

@Component({
  selector: 'app-secondcontent',
  templateUrl: './secondcontent.component.html',
  styleUrls: ['./secondcontent.component.scss'],
})

export class SecondcontentComponent implements OnInit {

  showBasketCard = false;
  selectedSize: any;
  selectedInnerFabric: any;
  

  sizeList = [
    {
      sizeNumber: '62/68',
      sizeLetter: 'S',
    },
    {
      sizeNumber: '72/78',
      sizeLetter: 'S',
    },
    {
      sizeNumber: '82/88',
      sizeLetter: 'S',
    },
    {
      sizeNumber: '92/98',
      sizeLetter: 'S',
    },
    ];
  innerFabricList = [{
    fabricImage: './assets/img/arrow.png',
    fabricName: 'Name A',
  },
  {
    fabricImage: 'assets/img/futterstoff.jpg',
    fabricName: 'Name B',
  },
  {
    fabricImage: 'assets/img/futterstoff.jpg',
    fabricName: 'Name C',
  },
  {
    fabricImage: 'assets/img/futterstoff.jpg',
    fabricName: 'Name D',
  },];

  items = [
    {
      image: './assets/img/mantel1.png',
      description: 'BLAUER WALKANZUG',
      price: 180.0,
      images: ['./assets/img/mantel1.png', './assets/img/mantel1-1.png', './assets/img/mantel1-2.png'],
      showBasketCard: false
    },
    {
      image: './assets/img/mantel2.png',
      description: 'ROTER WALKANZUG',
      price: 180.0,
      images: ['./assets/img/mantel2.png', './assets/img/mantel2-1.png', './assets/img/mantel2-2.png'],
      showBasketCard: false
    },
    {
      image: './assets/img/mantel3.png',
      description: 'ROSA WALKANZUG',
      price: 180.0,
      images: ['./assets/img/mantel3.png', './assets/img/mantel3-1.png', './assets/img/mantel3-2.png'],
      showBasketCard: false
    },
  ];

  selectedProduct: any = this.items[0];
  selectedImage: string = '';

  constructor() {}

  ngOnInit(): void {}

  selectImage(image: string) {
    this.selectedImage = image;
  }

  openShoppingCard(product: any) {
    this.selectedProduct = product;
    this.showBasketCard = true;    
  }

  closeShoppingCard(product: any) {
    this.showBasketCard = false;
  }

  addToBasket() {}
}
