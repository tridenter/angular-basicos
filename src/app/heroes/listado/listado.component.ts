import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ["Spiderman", "Ironman", "hulk"];
  heroeBorrado: string | undefined = "";
  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  borrarElemento(){
    this.heroeBorrado = this.heroes.pop();
  }

}
