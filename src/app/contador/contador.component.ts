import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hello {{ title}}</h1>

    <button (click)="acumular(base * -1)">-1</button>

    {{contador}}

    <button (click)="acumular(base)">+1</button>

  `
})
export class ContadorComponent {
  title = 'bases';
  base: number = 5;

  contador: number = 0;

  acumular(valor: number) {
    this.contador += valor;
  }

  resta() {
    this.contador--;
  }

  suma() {
    this.contador++;
  }

}
