function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil =  document.getElementById("estadoCivil").value;
	
	edad = parseInt(edad);
	
	if( !( edad < 18 && estadoCivil != "Soltero") )
	{
		if(estadoCivil == "Soltero" && edad > 17)
		{
			alert("Es soltero y no es menor");
		}
	}


	


}//FIN DE LA FUNCIÓN