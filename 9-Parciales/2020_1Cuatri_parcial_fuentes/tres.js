/*
Romina Noemi Calani Cruz
DIV X

Enunciado: 
1)De una Red Social se debe ingresar una cantidad indeterminada de interacciones diaria de usuarios, 
validando los siguientes datos:
nombre de usuario, 
edad, 
cantidad de likes, 
tipo(“INVITADO” o “VIP”)

Informar:

a)El nombre del usuario de tipo “VIP” más joven.
b)La cantidad total de likes del día.
c)Promedio total de likes de los usuarios del tipo “INVITADO”.
Pedir datos por prompt y mostrar por document.write
*/
function vmostrar()
{
	let nombre;
	let edad;
	let tiempo;
	let tipo;
	let respuesta;
	let nombreJoven;
	let edadJoven;
	let cantUsuarios;
	let sumaInv;
	let cantTotalLikes;
	let promedioLikesInv;
	let bandera;

	respuesta = 's';
	cantTotalLikes = 0;
	promedioLikesInv = 0;
	bandera = 0;
	cantUsuarios = 0;
	sumaInv = 0;

	while(respuesta=='s')
	{
		nombre = prompt("Ingrese nombre de usuario:");
		nombre = nombre.toLowerCase();
		
		do{
			edad = prompt("Ingrese edad:");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad<12 || edad>100);

		do{
			tiempo = prompt("Ingrese cantidad de likes:");
			tiempo = parseInt(tiempo);
		}while(isNaN(tiempo) || tiempo<0);

		do{
			tipo = prompt("Ingrese el tipo:");
			tipo = tipo.toLowerCase();
		}while(tipo != "invitado" && tipo != "vip");

		if(bandera == 0 && tipo=="vip"){
			nombreJoven = nombre;
			edadJoven = edad;
			bandera = 1;
		}
		else{
			if(tipo=="vip" && edad<edadJoven){
				edadJoven = edad;
				nombreJoven = nombre;
			}
		}

		cantTotalLikes += tiempo;

		if(tipo == "invitado"){
			cantUsuarios++;
			sumaInv+=tiempo;
		}
		
		respuesta = prompt("Continuar ingresando datos? s/n");
		respuesta = respuesta.toLowerCase();
	}
	
	if(cantUsuarios>0){
		promedioLikesInv = sumaInv/cantUsuarios;
	}

	document.write("El tipo VIP mas joven es:  "+nombreJoven+"<br>");
	document.write("Cantidad total de likes:  "+cantTotalLikes+"<br>");
	document.write("Promedio total de likes de los usuarios del tipo INVITADO:  "+promedioLikesInv+"<br>");
//	document.write("  <br>");

}

/*
Romina Noemi Calani Cruz
DIV X

Enunciado: 
2)De 10 corredores de moto se deben tomar y validar los siguientes datos del Enduro del Vera
nombre, 
edad, 
tiempo(dato entero expresado en segundos),
sexo.

Informar:

a)El nombre del hombre con mas tiempo(si lo hay).

b)El promedio de la edad de todos los participantes.

c)La cantidad de corredores de sexo femenino.

Pedir datos por prompt y mostrar por document.write
*/
function fmostrar()
{
	let nombre;
	let edad;
	let tiempo;
	let respuesta;
	let i;

	nombre = 0;
	edad = 0;
	tiempo = 0;
	respuesta = 's';

	while(respuesta=='s')
	{
		do{
			nombre = prompt("Ingrese :");
			nombre = nombre.toLowerCase();
		}while(!(isNaN(nombre)));

		do{
			edad = prompt("Ingrese ");
			edad = parseInt(edad);
		}while(isNaN(edad));

		do{
			tiempo = prompt("Ingrese :");
		}while(tiempo);

		
		respuesta = prompt("Continuar ingresando datos? s/n");
		respuesta = respuesta.toLowerCase();
	}



	document.write("  <br>");
	document.write("  <br>");
	document.write("  <br>");
	document.write("  <br>");

}

function mostrar()
{
	let nombre;
	let edad;
	let tiempo;
	let sexo;
	let i;
	let nombreMasTiempo;
	let tiempoHombre;
	let bandera;
	let cantPart;
	let promedio;
	let sumaEdad;
	let cantFemenino;

	bandera = 0;
	tiempoHombre = 0;
	cantPart = 0;
	sumaEdad = 0;
	cantFemenino = 0;

	for(i=0;i<10;i++)
	{
		do{
			nombre = prompt("Ingrese nombre:");
			nombre = nombre.toLowerCase();
		}while(!(isNaN(nombre)));
		
		do{
			edad = prompt("Ingrese edad: ");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad < 20 || edad > 80);//corredores con edad de 20 a 80

		do{
			tiempo = prompt("Ingrese el tiempo en segundos:");
			tiempo = parseInt(tiempo);
		}while(isNaN(tiempo) || tiempo<0);

		do{
			sexo = prompt("Ingrese su sexo f o m");
			sexo = sexo.toLowerCase();
		}while(sexo!='f' && sexo!='m');

		if(bandera == 0 && sexo == 'm'){
			nombreMasTiempo = nombre;
			tiempoHombre = tiempo;
			bandera = 1;
		}
		else{
			if(sexo=='m' && tiempo>tiempoHombre){
				tiempoHombre = tiempo;
				nombreMasTiempo = nombre;
			}
		}
		
		cantPart++;
		sumaEdad += edad;

		if(sexo=='f'){
			cantFemenino++;
		}
	}

	promedio = sumaEdad/cantPart;

	if(tiempoHombre>0){
		document.write("El nombre del hombre con mas tiempo "+nombreMasTiempo+" <br>");
	}
	
	document.write("El promedio de la edad de todos los participantes: "+promedio.toFixed(2)+" <br>");
	
	if(cantFemenino>0){//en caso de que no haya ninguna corredora femenina no muestra el mensaje
		document.write("La cantidad de corredores de sexo femenino: "+cantFemenino+" <br>");
	}
	
}


/*
Numero random:
	nota = Math.floor(Math.random() * 10) + 1;
Numero maximo y minimo:
		if(bandera==0){
			numeroMax=numero;
			numeroMin=numero;
			bandera=1;
		}
		else{
			if(numero<numeroMin){
				numeroMin=numero;
			}
			else if(numero>numeroMax){
				numeroMax=numero;
			}
		}
		
Numero primo ingresado por teclado:
	for(i=2;i<numero;i++){
		if(numero%i==0){
			bandera=0;
			break;
		}
	}
	
	if(bandera==0 || numero==1){
		alert("No es primo");
	}
	else{
		alert("Es primo");
	}
*/