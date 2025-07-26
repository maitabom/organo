import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { Genero } from '../../models/generos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent, CommonModule],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  genero = input.required<Genero>();



}
