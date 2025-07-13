import { Component } from '@angular/core';
import { Livro } from '../../models/livros';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livro: Livro = {
    titulo: 'Espumas Flutuantes',
    autor: 'Castro Alves',
  };
}
