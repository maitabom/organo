import { Livro } from "./livros";

export interface Genero {
  id: string;
  value: string;
  livros: Livro[];
}
