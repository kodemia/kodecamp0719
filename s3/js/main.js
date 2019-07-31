var foo = "hola todos";
var bar = "bienvenidos al mundo de javascript";
var asistentes = 75;
var weAreLearning = true;
var loosingTime = false;
var character = "A";

var animalsArray = [
	/*"Gato",
	"Perro",
	"Perico",
	"Foca",
	"a",
	7,
	true,
	false,*/
	{
		name:"Raynor",
		breed:"Ruso Azul",
		owner:"yo"
	},
	{
		name:"Raynor",
		breed:"Ruso Azul",
		owner:"yo"
	},{
		name:"Raynor",
		breed:"Ruso Azul",
		owner:"yo"
	}
];

var perro = {
	name:"Firulais",
	breed:"Eléctrico",
	owner:"Yo merengues",
	age:5,
	vaccines:[
		"Rabia",
		"Parvovirus"
	],
	address:{
		street:"Campo Acalapa",
		block:"Reynosa Tamaulipas",
		city:"CDMX",
		country:"Mexico"
	}
};

var productObject = {
	name:"xxxx",
	description:"asdfasdfasdf",
	price:4444,
	image:"someUrl",
	location:"CDMX"
}

/*operadores aritméticos

adición : +,
sustracción: - ,
multiplicación : * ,
división : / ,
módulo : % 

*/

/*operadores lógicos

mayor que : >,
menor que: <,
igual a: 5 == "5",
extremadamente igual a : 5 === "5",
diferente de : 5 != 6 ,
mayor o igual que : 5 >= 5,
menor o igual que : <=
negación : !foo ,


var zzz;
zzz = "yyy"

/*


/*condicionales

if(10 > 5){
	console.log("true")
}

if(a == b && a > b){
	
}

if(a == b || a > b){
	
} else if (a != b || a > b){

}
else {
	
}

*/

const someFunction = () => {
	alert("hola mundo")
}


const printText = (textToPrint) => {
	console.log(textToPrint);
	return textToPrint;
}


/*crear las siguientes funciones:

*función que me permita sumar 2 números cualesquiera, e imprima el resultado
*función que me permita restar 2 números cualesquiera, e imprima el resultado
*función que me permita comparar la igualdad de los resultados de las dos operaciones anteriores*/


const addition = (a,b) =>{
	console.log(a + b)
	return a + b;
}

const subtraction = (a,b) => {
	console.log(a - b)
	return a - b;
}

const comparation = (ra, rb) => {
	if(ra == rb){
		alert("los números son iguales")
	} else {
		alert("los números son diferentes")
	}
}

const printFirstName = (name) => {
	console.log(name)
	return name;
}

const printLastName = (lastname) =>{
	console.log(lastname)
	return lastname
}

const printName = (name,lastname) =>{
	let userName = printFirstName(name);
	let userLastName = printLastName(lastname);
	console.log(userName + " " + userLastName)
}

var carsCollection = [];

const createCar = (marca, modelo, año) => {
	let carObject = {marca,modelo,año};
	addCar(carObject,carsCollection)
}

const addCar = (addedObject, targetArray) => {
	targetArray.push(addedObject);
}

var productsArray = [];

const getProductData = () => {
	let productName = $("#product-name").val();
	let productDescription = $("#product-description").toggle();
	let productPrice = $("#product-price").val();
	let productLocation = $("#product-location").val();
	let productObject = {productName, productDescription, productPrice, productLocation}
	console.log(productObject);
	productsArray.push(productObject)
	console.log(productsArray)
}

$("#add-product").on("click",() => {
	getProductData();
})