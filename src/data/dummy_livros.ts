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
    imagem: "https://images.tcdn.com.br/img/img_prod/1222279/dom_casmurro_autor_machado_de_assis_ed_principis_p70_1891_1_c9c862c8884c98d5c3572694f25123c2.jpg",
    favorito: false
  },
  {
    titulo: "O Cortiço",
    autor: "Aluísio Azevedo",
    genero: {
      id: "naturalismo",
      value: "Naturalismo",
      livros: []
    },
    imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcarrefourbr.vtexassets.com%2Farquivos%2Fids%2F17538269%2FO-Cortico---Aluisio-De-Azevedo.jpg%3Fv%3D637566997105000000&f=1&nofb=1&ipt=dc5c9be2651d8ddf4a0e06dfcdabb19b442ee05ed1b5db72a109953d4aa5b585",
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
    imagem: "https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.SmmXQX9QHaZaXD8BKBSsaAHaLF%3Fpid%3DApi&f=1&ipt=9ada8163ce184047afcebccac200301306219403f7f3b67f07bbffcd3366259a",
    favorito: false
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
