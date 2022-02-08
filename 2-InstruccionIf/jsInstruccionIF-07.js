function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	//para recoger un valor de un select: Se toma el id del select. el valor que va a traer es el del atributo value 
	//del elemento seleccionado
	estadoCivil = document.getElementById("estadoCivil").value;

	estadoCivil = estadoCivil.toLowerCase();
	console.log(estadoCivil);

	if(edad < 18 && estadoCivil != "soltero")
	{
		alert("Usted es muy pequeño para NO estar soltero");
	}
	


}//FIN DE LA FUNCIÓN