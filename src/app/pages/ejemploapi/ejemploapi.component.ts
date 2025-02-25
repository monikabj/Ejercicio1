import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejemploapi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejemploapi.component.html',
  styleUrl: './ejemploapi.component.css'
})

export class EjemploapiComponent {
  cocteles: any[] = [];
  nombreBusqueda: string = '';

  constructor(private postsService: PostsService) {}

  buscar(): void {
    if (this.nombreBusqueda.trim() !== '') {
      console.log('hola');
      this.postsService.buscarCocteles(this.nombreBusqueda).subscribe((respuesta) => {
        console.log(respuesta);
        this.cocteles = respuesta.drinks || [];
      });
    }
  }
}

