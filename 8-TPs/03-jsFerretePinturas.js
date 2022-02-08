/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var farenheit;
	var centigrados;

	farenheit = document.getElementById("txtIdTemperatura").value;
	farenheit = parseFloat(farenheit);


	centigrados = (farenheit -32) * 5 / 9; 

	alert(farenheit + " Farenheit son " + centigrados + " centigrados");

}

function CentigradosFahrenheit () 
{
	var centigrados;
	var farenheit;

	centigrados = document.getElementById("txtIdTemperatura").value;
	centigrados = parseFloat(centigrados);

	farenheit = (centigrados*1.8)  + 32;

	alert(centigrados + " centigrados son " + farenheit +" Farenheit");

}
