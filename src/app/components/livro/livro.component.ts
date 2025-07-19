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
    genero: {
      id: 'poesia',
      value: 'Poesia',
      livros: [],
    },
    imagem: 'https://tse4.mm.bing.net/th/id/OIP.N52TTdT_AjGsvgL_4YDCSQHaLi?rs=1&pid=ImgDetMain&o=7&rm=3',
    favorito: false,
  };

  toggleFavorite(){
    this.livro.favorito = !this.livro.favorito;
  }
}
