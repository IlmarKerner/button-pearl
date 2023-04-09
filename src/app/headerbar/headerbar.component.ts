import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent implements OnInit{
  ngOnInit(): void {
    
  }
    constructor() {}
  
    isOpen = false;
  
    openMenu() {
      this.isOpen = true;
    }
  
    closeMenu() {
      this.isOpen = false;
    }

}
