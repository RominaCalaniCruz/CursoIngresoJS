/*
Romina Calani Cruz
DIV X

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	let destinoIngresado;
	let ptoCardinal;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			ptoCardinal = "Oeste";
		break;
		case "Cataratas":
			ptoCardinal = "Norte";
		break;
		case "Mar del plata":
			ptoCardinal = "Este";
		break;
		case "Ushuaia":
			ptoCardinal = "Sur";
		break;
	}

	mensaje = destinoIngresado+" se encuentra al " + ptoCardinal;
	
	alert(mensaje);

	
	/*
	Desafío 2:
	Ingresar el nombre y los datos requeridos para calcular el IMC, 
	e informar a la persona si es:
	Bajo peso <18.5
	Peso normal 18,5-24.9
	Pre Obesidad 25-26.9
	Obesidad I 27-29.9
	Obesidad II 30-34.9
	Obesidad III >40 
	*/
	let peso;
	let altura;
	let imc;
	let mensaje2;
	
	peso = prompt("Ingrese su peso en kilogramos: ");
	altura = prompt("Ingrese su altura en metros: ");
	
	peso = parseFloat(peso);
	altura = parseFloat(altura);

	imc = peso / (altura*altura);

	mensaje2 = "Su indice de masa corporal es de: "+imc.toFixed(2)+" kg/m^2";

	alert(mensaje2);

	if(imc<18.5){
		mensaje2 = "Bajo peso";
	}
	else if(imc <25){
		mensaje2 = "Peso normal";
	}
	else if(imc <27){
		mensaje2 = "Pre Obesidad";
	}
	else if(imc <30){
		mensaje2 = "Obesidad I";
	}
	else if(imc <35){
		mensaje2 = "obesidad II";
	}
	else{
		mensaje2 = "Obesidad III";
	}

	alert(mensaje2);

}//FIN DE LA FUNCIÓN