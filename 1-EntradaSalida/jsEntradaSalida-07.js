/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


// var numeroUno;
// var numeroDos;
// var resultado;

function sumar()
{	
	//declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;

	//entrada
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//proceso
	numeroUno = parseFloat(numeroUno);
	numeroDos = parseFloat(numeroDos);

	resultado = numeroUno + numeroDos;

	//salida
	alert("La suma es: " + resultado);
}

function restar()
{	
	//declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;

	//entrada
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//proceso
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno - numeroDos;

	//salida
	alert("La suma es: " + resultado);
}

function multiplicar()
{ 
	//declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;

	//entrada
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//proceso
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno * numeroDos;

	//salida
	alert("La multiplicacion: " + resultado);
}

function dividir()
{
	//declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;

	//entrada
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//proceso
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


	//resultado pasaria a ser un flotante
	resultado = numeroUno / numeroDos;

	//salida
	alert("La divison es: " + resultado);

	//resultado pasaria a ser de tipo string
	resultado = "Hola";

	alert("Despues de cambiar el valor " + resultado);

}

/*

entero: 5, 7, 28
flotante: 5, 65, 7.2, 4.9657
String: "cadenas de texto"
booleano: true o false

*/

