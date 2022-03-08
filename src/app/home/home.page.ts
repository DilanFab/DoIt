import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      img:'assets/img/Book.svg',
      titulo: 'Material de Apoyo<br>Biblioteca'
    },
    {
      img:'assets/img/Smart.svg',
      titulo: 'Registro de Avance<br>Progresión'
    }
  ];

  constructor() {}

}
