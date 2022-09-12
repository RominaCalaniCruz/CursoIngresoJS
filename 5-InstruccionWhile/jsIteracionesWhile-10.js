/*
Romina Calani Cruz
DIV X

Enunciado:
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numero;
	let sumaNeg;
	let sumaPos;
	let cantPos;
	let cantNeg;
	let cantCeros;
	let cantNumPar;
	let promedioPos;
	let promedioNeg;
	
	sumaNeg=0;
	sumaPos=0;
	cantPos=0;
	cantNeg=0;
	cantCeros=0;
	cantNumPar=0;
	promedioNeg=0;
	promedioPos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		do{
			numero = prompt("Ingrese un numero: ");
			numero = parseFloat(numero);
		}while(isNaN(numero));
		
		if(numero<0){
			sumaNeg += numero;
			cantNeg++;
		}
		else{
			if(numero==0){
				cantCeros++;
			}
			sumaPos += numero;
			cantPos++;
		}

		if(numero%2==0){
			cantNumPar++;
		}
		respuesta = prompt("Desea continuar? si/no").toLowerCase();
	}

	
	if(cantNeg>0){
		promedioNeg = sumaNeg/cantNeg;
	}
	if(cantPos>0){
		promedioPos = sumaPos/cantPos;
	}

	document.write("La suma de negativos es :"+sumaNeg);
	document.write("<br> La suma de positivos es :"+sumaPos);
	document.write("<br> La cantidad de positivos es :"+cantPos);
	document.write("<br> La cantidad de negativos es :"+cantNeg);
	document.write("<br> La cantidad de ceros es :"+cantCeros);
	document.write("<br> La cantidad de numeros pares es :"+cantNumPar);
	document.write("<br> El promedio de los numeros positivos es :"+promedioPos);
	document.write("<br> El promedio de los numeros negativos es :"+promedioNeg);
	document.write("<br> La diferencia entre num positivos y negativos es :"+(cantPos-cantNeg));
}//FIN DE LA FUNCIÓN