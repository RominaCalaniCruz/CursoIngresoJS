/*
Romina Calani Cruz
DIV X

Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	let numero;
	let i;
	let cantDiv;

	cantDiv=0;

	do{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
	}while(isNaN(numero) || numero<0);

	for(i=1;i<=numero;i++){
		if(numero%i==0){
			document.write("Numero divisor encontrado: "+i+" <br>");
			cantDiv++;
		}
	}

	document.write("<br> Cantidad de numeros divisores encontrados: "+cantDiv);

}//FIN DE LA FUNCIÓN