import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-componente2',
  imports: [RouterOutlet],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {
  title = 'Practica';
  //propiedade

 productos = [
  {
    id:1,
    descripcion: "Margaritas",
    precio: 17.00
  },
  {
    id:2,
    descripcion: "Vodka",
    precio: 350.00
  },
  {
    id:3,
    descripcion: "Wisky",
    precio: 120.00
  }
 ]
 //funcion que incrementa el contador 
}



