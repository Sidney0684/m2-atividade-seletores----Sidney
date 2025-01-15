/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/

//const ingredients1 = document.getElementById("ingredients");

//console.log (ingredients1)

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/

//const titulo = document.getElementsByTagName("h1");

//console.log (titulo)


/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/

//const classRecipe = document.getElementsByClassName ("recipe");

//console.log (classRecipe)


/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/

const todosElementos = document.getElementsByTagName("h2")

for(let i=0; i<todosElementos.length; i++) {
  todosElementos[i].style.color ="blue";
}

/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/

const todosInputs = document.getElementsByTagName("input");

for(let i=0; i<todosInputs.length; i++) {
  todosInputs[i].style.borderColor ="red"};