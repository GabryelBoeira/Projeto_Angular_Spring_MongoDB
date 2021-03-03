import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: Array<MenuItem>;

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: 'home',
      },
      {
        label: 'Usuários',
        routerLink: 'usuario',
        icon: PrimeIcons.USERS,
      },
      {
        label: 'Estados',
        routerLink: 'estados',
        icon: PrimeIcons.MAP,
      },
    ];
  }
}
