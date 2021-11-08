import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './/hero.component.html',
})
export class HeroComponent implements OnInit {

  constructor() {

  }
  title = 'Heroes:';
  nombre:string = 'Superman';
  edad:number = 25;
  ngOnInit(): void {
  }
   mostrarNombreEdad(nombre:string, edad:number){
    this.nombre = nombre;
    this.edad = edad;
    return nombre+edad;
  }

   nombreMayus(nombre:string){
    this.nombre= nombre.toUpperCase();
    return nombre;
  }

  cambiarNombre(nombre:string):string{
    this.nombre = nombre;
    return nombre;
  }

  cambiarEdad(edad:number):number{
    this.edad = edad;
    return edad;
  }
}
