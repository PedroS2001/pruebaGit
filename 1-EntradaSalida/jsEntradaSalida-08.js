/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declarar las variables
	var dividendo;
	var divisor;
	var resto;
	var resultado;


	//Traemos los valores por id
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	//los transformo a enteros
	dividendo = parseInt(dividendo);
	divisor	= parseInt(divisor);

	resultado = parseInt(dividendo / divisor);

	// % 

	resto = dividendo % divisor;

	alert("El resultado es: " + resultado + " y el resto: " + resto);
	// alert("el resto de la division es: " + resto);





}















/*
	var numeroDiviendo;
	var numeroDivisor; 
	var resultado ;
	var resto ;


	//Recojo los numeros de los inputs
	numeroDiviendo = document.getElementById("txtIdNumeroDividendo").value;
	numeroDivisor = document.getElementById("txtIdNumeroDivisor").value;

	//Los parseo a numeros
	numeroDiviendo = parseInt(numeroDiviendo);
	numeroDivisor = parseInt(numeroDivisor);

	//si hicieramos una division
	resultado = numeroDiviendo / numeroDivisor;
	//al ser js de un tipado debil, el resultado ya me lo almacena como flotante, pero nosotros no queremos eso
	resultado = parseInt(resultado);

	//El resto de la division 
	resto = numeroDiviendo % numeroDivisor;	


	alert("El resultado es: " + resultado + " y el resto es: " + resto);
*/