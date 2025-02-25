import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-componente3',
  standalone: true, // Especifica que el componente es independiente
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  bebidas: any[] = [];
  categoriaSeleccionada: string = 'Cocktail';

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.obtenerBebidas();
  }

  obtenerBebidas(): void {
    this.postsService.obtenerBebidasPorCategoria(this.categoriaSeleccionada).subscribe(
      (respuesta) => {
        console.log('API Response:', respuesta);
        this.bebidas = respuesta.drinks || [];
      },
      (error) => {
        console.error('Error en la API:', error);
      }
    );
  }
}
