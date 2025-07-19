import { Component, input } from '@angular/core';
import { Livro } from '../../models/livros';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livro = input.required<Livro>();
  protected entity: Livro = this.livro();

  toggleFavorite(){
    this.entity.favorito = !this.entity.favorito;
  }
}
