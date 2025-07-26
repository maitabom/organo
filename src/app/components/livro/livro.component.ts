import { Component, input } from '@angular/core';
import { Livro } from '../../models/livros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livro = input.required<Livro>();

  toggleFavorite(){
    this.livro().favorito = !this.livro().favorito;
  }
}
