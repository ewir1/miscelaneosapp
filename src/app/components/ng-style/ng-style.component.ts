import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">Hola mundo... Esto es una etiqueta!!</p>

    <button class="btn btn-primary mr-2" (click)="tamano = tamano + 5">
      <i class="fas fa-plus"></i>
    </button>
    <button class="btn btn-danger" (click)="tamano = tamano - 5">
      <i class="fas fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano = 20;

  constructor() {}

  ngOnInit() {}
}
