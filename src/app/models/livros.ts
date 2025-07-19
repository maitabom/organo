import { Genero } from "./generos";

export interface Livro {
  titulo: string;
  autor: string;
  genero: Genero;
  imagem?: string;
  favorito: boolean;
}
