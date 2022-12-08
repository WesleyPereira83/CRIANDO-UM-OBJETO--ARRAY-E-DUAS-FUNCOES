/*Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.*/


let pessoa = {
    nome: "Pedro",
    idade: 25,
    altura: 1.72,
    profissão:"engenheiro mecânico",
    carros:["pulse abarth", "kia sportage", "azera"] ,
    animais:{
        cachorro:{
            raça: "dog alemão",
            cor: "preto"
        }   
    },
   comprar: function(v, x, z, k, valor){
    console.log(v + ", " + x + " com " + z + " anos de idade e " + k + "m de altura " + "já comprou um " + pessoa.carros[1] + " por " + valor + " reais.")
   
   },
   lista: function(a, b, c, d){
    console.log(a + " vendeu os carros que tinha antigamente, eram eles: " + b + ", " + c +  " e o " + d  + "." )
   
   }
    
    }


pessoa.comprar(pessoa.nome, pessoa.profissão, pessoa.idade, pessoa.altura, "R$ 130.000,00")
pessoa.lista(pessoa.nome, pessoa.carros[0], pessoa.carros[1], pessoa.carros[2] )
//console.log(pessoa.nome + " é um " + pessoa.profissão + " renomado.")
//console.log(pessoa.comprar(pessoa.nome + " adquiriu um cachorro da raça " + pessoa.animais.cachorro.raça + " por " + 30.000 ))