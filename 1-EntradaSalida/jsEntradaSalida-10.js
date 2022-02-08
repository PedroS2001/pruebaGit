/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaro variables
	var importe;
	var descuento;
	var resultado;

	//tomo el importe
	importe = document.getElementById("txtIdImporte").value;

	importe = parseFloat(importe);

	//calculo el descuento
	descuento = importe * 0.25;
	resultado = importe - descuento;


	//devuelvo el resultado en el text
	document.getElementById("txtIdResultado").value = resultado;
	

}




/*var pedro = document.getElementById("txtIdResultado");
	pedro.value = resultado;*/