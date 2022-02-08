/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	// alert("muestra un mensaje");
	// document.getElementById("id").value = "mensaje";
	console.log(document.getElementById("txtIdLargo").value);

}
function Circulo () 
{
	//declaro variables
	var radio;
	var perimetro;
	const PI = 3.141592;

	//recojo el radio y lo parseo
	radio = document.getElementById("txtIdRadio").value;
	radio = parseInt(radio);


	perimetro = 2*PI*radio;
	perimetro = perimetro*3;

	alert("Se necesitan " + perimetro.toFixed(2) + " metros de alambre");
	
}
function Materiales () 
{
	var ancho;
	var largo;
	var cemento;
	var cal;
	var superficie;

	//recojo las variables y las parseo
	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);
	//base por altura para sacar el area
	superficie = ancho*largo;

	cemento = superficie*2;
	cal = superficie*3;

	alert(`Se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal`);

}