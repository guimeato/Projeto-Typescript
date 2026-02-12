type Genero = "masculino" | "feminino";

interface Pessoa {
  nome: string;
  idade: number;
  genero: Genero;
}

function apresentarPessoa(pessoa:Pessoa): string{
   return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`
}

const pessoa : Pessoa = {
  nome: "Maria",
  idade: 30,
  genero:"feminino",
}

console.log(apresentarPessoa(pessoa));