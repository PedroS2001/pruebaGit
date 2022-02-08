/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaramos las variables
	var sueldo;
	var resultado;
	var aumento;

	//Traer los valores por id
	sueldo = document.getElementById("txtIdSueldo").value;

	//parsear el valor
	sueldo = parseFloat(sueldo);

	//calculamos el aumento y el resultado
	aumento = sueldo * (10/100);
	resultado = sueldo + aumento;

	//mostramos el resultado
	document.getElementById("txtIdResultado").value = resultado;

}

























/*
var sueldo;
	var aumento;
	var sueldoConAumento;

	//obtengo el sueldo y lo convierto a numero
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);


	//calculo el 10% de ese sueldo
	// aumento = sueldo * (10 / 100);
	aumento = sueldo * 0.1;


	//calculo el sueldo con aumento
	sueldoConAumento = sueldo + aumento;


	document.getElementById("txtIdResultado").value = sueldoConAumento;

*/