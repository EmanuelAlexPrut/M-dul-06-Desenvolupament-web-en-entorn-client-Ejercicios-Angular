import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
})
export class ListadoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listaHeroes: string[] = ["Superman", "Antman", "Batman", "Thor"];
  borrado: string = "Se ha borrado a:"+this.listaHeroes[0];
  listaEdades: number[] = [29, 33, 45, 19];

  borrarHeroe(): void{
      this.listaHeroes[0] = '';
      this.listaEdades[0] = 0;

  }
}

