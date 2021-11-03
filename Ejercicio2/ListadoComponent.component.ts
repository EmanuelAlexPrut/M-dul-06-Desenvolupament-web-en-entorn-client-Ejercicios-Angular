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
  listaEdades: number[] = [29, 33, 45, 19];
}
