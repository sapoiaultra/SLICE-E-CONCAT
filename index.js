// métodos para operar arrays.

//o método SLICE (não é o SPLICE) também da para operar em arrays
//neste caso, podemos usá-lo para criara novos arrays a partie de partes de um outro array

let nomes = ["João", "Ana", "Carlos", "Antônio"];

// criar um novo array a partir do inicial entre o índice 1(inclusive) e o 3 (exclusive)
let nomes_extraidos= nomes.slice(1,3); //extrai dos indices 1 ao 3 (1 e 2)

console.log(nomes);
console.log(nomes_extraidos);

// métodos para operar arrays.
//o método concat permite juntar vários arrays num só e adicionar ainda mais alguns elementos.

let nomes_1 = ["João", "Ana", "Carlos"];
let nomes_2 = ["Francisco", "Marta", "Catarina"];

let nome = nomes_1.concat(nomes_2);
console.log(nome);

// Adicionando e concatenando
let mais_1= ["João", "Beatriz", "Manoel"];
let mais_2= ["Maria", "Joaquina", "Francisca"];
let mais = mais_1.concat(mais_2, "Fernando", "Marco", "Daniela");

console.log(mais);

console.table(mais);