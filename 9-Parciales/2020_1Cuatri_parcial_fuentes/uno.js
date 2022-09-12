/*
Romina Calani Cruz
DIV X


Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:

-el nombre del producto 
-el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-el tipo de inflamable("ignífugo", "combustible", "explosivo" ) 
-y la Marca.

Se debe Informar al usuario lo siguiente:

a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function vmostrar()
{
	let nombre;
	let tipoProd;
	let precio;
	let cantidad;
	let tipoInflamable;
	let marca;
	let i;
	let mayorCantInf;
	let marcaCaro;
	let prodCaro;
	let precioCaro;
	let totalIAC;
	let tipo1;
	let tipo2;
	let tipo3;

	mayorCantInf = 0;
	precioCaro = 99;
	totalIAC = 0;
	tipo1 = 0;
	tipo2 = 0;
	tipo3 = 0;

	for(i=0;i<5;i++){
		do{
			nombre = prompt("Ingrese el nombre del producto: ");
			nombre = nombre.toLowerCase();
		}while(!(isNaN(nombre)));

		do{
			tipoProd = prompt("Cual es el tipo del producto?");
			tipoProd = tipoProd.toUpperCase();
		}while(tipoProd!="ALCOHOL" && tipoProd!="IAC" && tipoProd!="QUAT");

		do{
			precio = prompt("Ingrese el precio del producto: ");
			precio = parseFloat(precio);
		}while(precio<100 || precio>300 || isNaN(precio));

		do{
			cantidad = prompt("Ingrese la cantidad: ");
			cantidad = parseInt(cantidad);
		}while(cantidad<1 || cantidad>1000);

		do{
			tipoInflamable = prompt("Ingrese el tipo de inflamable: ");
			tipoInflamable = tipoInflamable.toLowerCase();
		}while(tipoInflamable!="ignifugo" && tipoInflamable!="combustible" && tipoInflamable!="explosivo");

		do{
			marca = prompt("ingrese la marca: ");
		}while(!(isNaN(marca)));

		switch(tipoInflamable){
			case "ignifugo":
				tipo1++;
			break;
			case "combustible":
				tipo2++;
			break;
			default:
				tipo3++;
		}

		if(tipoProd=="IAC" && precio<201){
			totalIAC+=precio;
		}

		if(precio>precioCaro){
			precioCaro=precio;
			prodCaro=tipoProd;
			marcaCaro=marca;
		}
	}

	if(tipo1>tipo2){
		if(tipo1>tipo3){
			mayorCantInf="ignífugo";
		}
		else{
			mayorCantInf="explosivo";
		}
	}
	else if(tipo2>tipo3){
		mayorCantInf="combustible";
	}
	else{
		mayorCantInf="explosivo";
	}

	//A no entendi la consigna 
	document.write("");
	//B
	document.write("<br> El tipo de inafable con mayor cantidad de unidades es: "+mayorCantInf);
	//C
	document.write("<br> Se compraron en total "+totalIAC+" IAC con precio menor a 200");
	//D
	document.write("<br> El producto mas caro es "+prodCaro+" de la marca "+marcaCaro);

}

/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una 
division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota
*/

function mostrar(){
	let tipo;
	let nombre;
	let cantMat;
	let sexo;
	let nota;
	let edad;
	let respuesta;
	let mejorProm;
	let nombreMejor;
	let nombreJoven;
	let edadJoven;
	let notaF;
	let notaM;
	let notaX;
	let cantF;
	let cantM;
	let cantX;
	let masMat;
	let edadMas;
	let nombreMas;

	respuesta = 's';
	mejorProm = 0;
	edadJoven = 100;
	notaF = 0;
	notaM = 0;
	notaX = 0;
	cantF = 0;
	cantM = 0;
	cantX = 0;
	masMat = 0;

	while(respuesta=='s'){
		do{
			nombre = prompt("Ingrese el nombre: ");
			nombre = nombre.toLowerCase();
		}while(!(isNaN(nombre)));
		do{
			tipo = prompt("Ingrese el tipo de cursada: libre/presencial/remota");
			tipo = tipo.toLowerCase();
		}while(tipo!="libre" && tipo!="presencial" && tipo!="remota");

		do{
			cantMat = prompt("Ingrese la cantidad de materias: (menos de 8)");
			cantMat = parseInt(cantMat);
		}while(cantMat<1 || cantMat>8 || isNaN(cantMat));

		do{
			sexo = prompt("Ingrese su sexo: F (femenino) M (masculino) X (no binario)");
			sexo = sexo.toUpperCase();
		}while(sexo!='F' && sexo!='M' && sexo!='X');

		do{
			nota = prompt("Ingrese su nota promedio");
			nota = parseFloat(nota);
		}while(nota<0 || nota > 10);

		do{
			edad = prompt("Ingrese su edad: ");
			edad = parseInt(edad);
		}while(isNaN(edad));

		if(sexo!='M' && nota>mejorProm){
			mejorProm = nota;
			nombreMejor = nombre;
		}

		if(tipo == "libre" && edad<edadJoven){
			edadJoven = edad;
			nombreJoven = nombre;
		}

		switch(sexo){
			case 'F':
				notaF+=nota;
				cantF++;
			break;
			case 'M':
				notaM+=nota;
				cantM++;
			break;
			default:
				notaX+=nota;
				cantX++;
		}

		if(cantMat>masMat){
			masMat = cantMat;
			edadMas = edad;
			nombreMas = nombre;
		}
		respuesta=prompt("Desea continuar ingresando datos s/n");
		respuesta=respuesta.toLowerCase();
	}


	//A
	document.write("El nombre del mejor promedio es: "+ nombreMejor);
	//B
	document.write("El nombre del mas joven de los alumnos que da libre es: "+nombreJoven);
	//C
	document.write("El promedio entre las mujeres: "+notaF/cantF);
	document.write("El promedio entre los hombres: "+notaM/cantM);
	document.write("El promedio entre no binario: "+notaX/cantX);
	//D
	document.write("El nombre y edad del que cursa mas materias es: "+nombreMas+" / "+edadMas);

}
