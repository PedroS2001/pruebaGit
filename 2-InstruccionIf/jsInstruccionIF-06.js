function mostrar()
{
	//declarar las variables
	var edad;

	//tomamos los datos
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted es un adulto");
	}
	else if(edad < 5)
	{
		alert("Usted va al jardin");
	}
	else if(edad < 12)
	{
		alert("Usted es un niño");
	}
	else
	{
		alert("Usted es un adolescente");
	}




	// if(edad >= 18)
	// {
	// 	alert("Usted es un adulto");
	// }
	// else
	// {
	// 	if(edad > 12 && edad < 18)
	// 	{
	// 		alert("Usted es adolescente");
	// 	}
	// 	else
	// 	{
	// 		alert("Usted es un niño");
	// 	}

	// }







	// if(edad > 12 && edad < 18)
	// {
	// 	alert("Usted es adolescente");
	// }
	// if(edad < 12)
	// {
	// 	alert("Usted es un niño");
	// }





















}//FIN DE LA FUNCIÓN

/*
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted es un adulto");
	}
	if(edad > 12 && edad < 18)
	{
		alert("Usted es adolescente");
	}
	if(edad < 12)
	{
		alert("Usted es un niño");
	}


***************************************************
	if(edad >= 18)
	{
		alert("Usted es un adulto");
	}
	else
	{
		if(edad > 12 && edad < 18)
		{
			alert("Usted es adolescente");
		}
		else
		{
			alert("Usted es un niño");
		}

	}

	*************************************
	if(edad >= 18)
	{
		alert("Usted es un adulto");
	}
	else if(edad > 12)
	{
		alert("Usted es adolescente");
	}
	else
	{
		alert("Usted es un niño");
	}

*/