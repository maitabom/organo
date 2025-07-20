import { Component, OnInit } from '@angular/core';
import { Genero } from '../../models/generos';
import { Livro } from '../../models/livros';
import { livros } from '../../../data/dummy_livros';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {
  generos: Genero[] = [];
  livrosGenero: Map<string, Livro[]> = new Map();

  ngOnInit(): void {
    this.livrosGenero = new Map();
    livros.forEach(livro => {
      const generoId = livro.genero.id;

      if (!this.livrosGenero.has(generoId)) {
        this.livrosGenero.set(generoId, []);
      }

      this.livrosGenero.get(generoId)?.push(livro);
    });

    this.generos = [
      {id: 'romance', value: 'Romance', livros: this.livrosGenero.get('romance') || []},
      {id: 'infantil', value: 'Infantil', livros: this.livrosGenero.get('infantil') || []},
      {id: 'ficcao_científica', value: 'Ficção Científica', livros: this.livrosGenero.get('ficcao_científica') || []},
      {id: 'fantasia', value: 'Fantasia', livros: this.livrosGenero.get('fantasia') || []},
    ];
  }
}
