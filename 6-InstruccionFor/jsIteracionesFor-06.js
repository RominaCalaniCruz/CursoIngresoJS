/*
Romina Calani Cruz
DIV X

Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	let numero;
	let cantPar;
	let i;

	cantPar=0;

	do{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
	}while(isNaN(numero) || numero<0);
	
	for(i=1;i<=numero;i++){
		if((i%2)==0){
			document.write("<br> Numero par: "+i);
			cantPar++;
		}
	}
	document.write("<br> El total de numeros pares fue: "+cantPar);

}//FIN DE LA FUNCIÓN