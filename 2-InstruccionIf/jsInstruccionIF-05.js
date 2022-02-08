function mostrar()
{
	//declaramos las variables
	var edad;

	//tomo el dato
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad)

	if( edad < 12 || edad > 17 )
	{
		alert("Usted no es un adolescente");
	}


}//FIN DE LA FUNCIÓN


/*

*/