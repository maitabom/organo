import { Component } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { Livro } from '../../models/livros';
import { livros } from '../../../data/dummy_livros';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  livro: Livro = livros[0];
}
