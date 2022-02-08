/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultado;

	numeroUno =  document.getElementById("txtIdPrecioUno").value;
	numeroDos =  document.getElementById("txtIdPrecioDos").value;
	numeroTres =  document.getElementById("txtIdPrecioTres").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);

	resultado = numeroUno + numeroDos + numeroTres;

	alert("La suma de los precios es de: " + resultado);

}
function Promedio () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultado;

	numeroUno =  document.getElementById("txtIdPrecioUno").value;
	numeroDos =  document.getElementById("txtIdPrecioDos").value;
	numeroTres =  document.getElementById("txtIdPrecioTres").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);

	resultado = (numeroUno+numeroDos+numeroTres)/3;

	alert("El promedio es: " + resultado.toFixed(2));
}
function PrecioFinal () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var aumento;
	var precioSinIva;
	var precioFinal;

	numeroUno =  document.getElementById("txtIdPrecioUno").value;
	numeroDos =  document.getElementById("txtIdPrecioDos").value;
	numeroTres =  document.getElementById("txtIdPrecioTres").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres)

	precioSinIva = (numeroUno+numeroDos+numeroTres);
	aumento = precioSinIva*(21/100);

	precioFinal = precioSinIva + aumento;

	alert("El precio de los productos es de: " + precioSinIva + "\nEl IVA es de: " + aumento + "\nY el precio final es de: " + precioFinal);
}