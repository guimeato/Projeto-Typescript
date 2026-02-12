interface ILivro {
  titulo: string,
  autor: string,
  anoPublicacao: number
}

const resumirLivro = (livro:ILivro) => {
  console.log(`O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`);
}

resumirLivro({
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  anoPublicacao: 1899
});