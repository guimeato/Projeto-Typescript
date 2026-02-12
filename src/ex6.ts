function retornarElemento<T>(array:T[],index:number):T{
  return array[index];
}

const numero = retornarElemento([20,30,40],2);
console.log(numero);

const mercado = retornarElemento(["arroz","batata","frango"],1);
console.log(mercado);