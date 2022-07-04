/*
Romina Calani Cruz
DIV X
Enunciado:
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; //declara variables locales
	//let numero;
	//let letra;
	//var nombre; declaro variables globales (no hay que usarlas)
	//= es un operador de asignacion
	//nombre = "Romina Calani";//textos con doble comilla
	//numero = 8;//numero sin comilla
	//letra ='a';// letras con comillas simples
	// + es un operador aritmetico o operador de concatenación

	nombre = prompt("Ingrese su nombre:");
	alert("Su nombre es: " + nombre);
}

