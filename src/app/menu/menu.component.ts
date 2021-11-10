import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * add a class to show responsive menu
   */
  showMenu() {
    let responsiveMenu = <HTMLElement>document.getElementById('responsiveMenu');
    responsiveMenu.style.display = 'flex';
  }


  /**
   * remove a class to hide responsive menu
   */
  hideMenu() {
    let responsiveMenu = <HTMLElement>document.getElementById('responsiveMenu');
    responsiveMenu.style.display = 'none';
  }
}
