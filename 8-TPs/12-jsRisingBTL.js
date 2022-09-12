/*RISING BTL. 
Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y 
cargas maliciosas) y luego asignarla a cuadros de textos. 

12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	let edad;
 	let genero;
 	let estadoCivil;
	let sueldo;
	let legajo;
	let nacionalidad;

	do{	
		edad = prompt("Ingrese una edad entre 18 y 90 inclusive");
		edad = parseInt(edad);
	}while(edad>17 && edad <91);	
	
	do{
		genero = prompt("Ingrese su genero F (femenino) o M (masculino)");
		genero = genero.toUpperCase();
	}while(genero != "F" && genero != "M");

	do{
		estadoCivil = prompt ("Ingrese su estado civil \n1: para soltero\n2: para casados\n3: para divorciados\n4: para viudos");
		estadoCivil = parseInt(estadoCivil);
	}while(estadoCivil>0 && estadoCivil<5)

	do{
		sueldo = prompt("Ingrese su sueldo bruto no menor a 8000");
	}while(sueldo<8000);

	do{
		legajo = prompt("Ingrese su legajo");
		legajo = parseInt(legajo);
	}while(legajo>999 && legajo<10000);
	
	do{
		nacionalidad = prompt("Ingrese su nacionalidad\nA: para argentinos\nE: para extranjeros\nN: para nacionalizados");
		nacionalidad = nacionalidad.toUpperCase();
	}while(nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N");
}
