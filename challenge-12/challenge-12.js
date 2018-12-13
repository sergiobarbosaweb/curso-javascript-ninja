(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
	name : 'Sérgio',
	lastname : 'Barbosa',
	age: 23,
};
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log( Object.keys( person ) );

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({ name: 'Smashing CSS', pages: 255, });
books.push({name:'Javascript de alto desempenho', pages: 280});
books.push({name: 'Fundamentos em HTML5', pages:222 });
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log( books );

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/

console.log(books.pop()); //forma direta

//forma com variável:

var lastBook = books.pop();
console.log( lastBook );

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log( books );

/*
Converta os objetos que ficaram em `books` para strings.
*/
JSON.stringify( books ); //não causa efeito colateral no objeto.
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
books = JSON.stringify(books); //agora o objeto foi convertido para string.
console.log( books );

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse( books );
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

	//forma não aconselhada: (se precisarmos adicionar mais propriedades ao objeto, preciremos também adicionar ao console )

for(var i = 0; i < Object.keys(books).length; i++ ){
	console.log( books[ i ].name, books[ i ].pages ); //dentro de books, i é o índice relacionado ao livro

	//segunda forma: (utilizando for in dentro de for >> um loop em outro)

	for(var i = 0; i < Object.keys(books).length; i++ ){
			for ( var prop in books[i] ){
				console.log(prop+ ': ' + books[i][prop]);
			} //com object.keys o código seria executado 3 vezes(errata do professor)
	}	

	//ou.... Minha forma =) (mais simplificada)

	for (var i = 0; i < books.length; i++){

		for(var prop in books[i]){
			console.log(prop + ': ' +books[i][prop]);
    }

}
//
/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['S', 'é', 'r', 'g', 'i', 'o']
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( myName.join('') );

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( myName.reverse().join('') ); //como o join não causa efeito colateral, meu array continua separado, por isso o .join novamente.

//ou....

var juntar = myName.join('');
console.log(myName.reverse());

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( myName.sort() );


})();
