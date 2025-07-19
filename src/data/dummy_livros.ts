import { Livro } from "../app/models/livros";

export const livros: Livro[] = [
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    genero: {
      id: "romance",
      value: "Romance",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51rJZvVgJpL._SX331_BO1,204,203,200_.jpg",
    favorito: true
  },
  {
    titulo: "O Cortiço",
    autor: "Aluísio Azevedo",
    genero: {
      id: "naturalismo",
      value: "Naturalismo",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51yXvGvQgOL._SX346_BO1,204,203,200_.jpg",
    favorito: false
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: {
      id: "ficcao_científica",
      value: "Ficção Científica",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
    favorito: true
  },
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    genero: {
      id: "infantil",
      value: "Infantil",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX346_BO1,204,203,200_.jpg",
    favorito: true
  },
  {
    titulo: "Crime e Castigo",
    autor: "Fiódor Dostoiévski",
    genero: {
      id: "romance",
      value: "Romance",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/518ZqzjQVgL._SX346_BO1,204,203,200_.jpg",
    favorito: false
  },
  {
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    genero: {
      id: "realismo_magico",
      value: "Realismo Mágico",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51KqQlVqgcL._SX346_BO1,204,203,200_.jpg",
    favorito: true
  },
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    genero: {
      id: "fantasia",
      value: "Fantasia",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51Dd8BmQzAL._SX346_BO1,204,203,200_.jpg",
    favorito: true
  },
  {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    genero: {
      id: "romance",
      value: "Romance",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51FxHNWgs5L._SX346_BO1,204,203,200_.jpg",
    favorito: false
  },
  {
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    genero: {
      id: "suspense",
      value: "Suspense",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51jzYHYI8qL._SX346_BO1,204,203,200_.jpg",
    favorito: false
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    genero: {
      id: "fantasia",
      value: "Fantasia",
      livros: []
    },
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51UoqRQyupL._SX346_BO1,204,203,200_.jpg",
    favorito: true
  }
];
