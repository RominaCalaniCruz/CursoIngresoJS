/*
Romina Calani Cruz
DIV X

Enunciado:
El departamento de NUMEROS ESPECIALES del instituto matemático FonteCristo nos está pidiendo 
una aplicación que verifique las distintas cualidades de los números.
Para cada una de estas acciones debemos realizar la lógica para verificar las cualidades pedidas:
A. Se pedirán un número positivo y se mostrará la cantidad de números pares desde 
el número ingresado hasta el cero.
B. Se pedirán un número positivo y se mostrará la cantidad de números impares desde 
el número ingresado hasta el cero.
C. Se pedirán un número positivo y se mostrará la cantidad de números divisibles 
de este número que se encuentran desde el 1 al 100.
D. Se pedirán un número positivo y se mostrará si el número es un número primo o no.
E. Se pedirán un número positivo y se mostrará la cantidad de números Primos desde 
el número ingresado hasta el cero.
*/

function NumerosPares () 
{
 	let numero;
    let i;
    let cantPar;
    let mensaje;

    cantPar = 0;

    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);

    if(numero>=0){
        for(i=0;i<=numero;i++){
            if(i%2==0){
                cantPar++;
            }
        }
    
        mensaje = "La cantidad de numeros pares desde " + numero + " hasta cero es: " + cantPar;
    }
    else{
        mensaje = "Error, ingrese un numero positivo ";
    }
    alert(mensaje);
}

function NumerosImpares()
{
    let numero;
    let i;
    let cantImpar;
    let mensaje;

    cantImpar = 0;

    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    
    if(numero>=0){
        for(i=0;i<=numero;i++){
            if(i%2!=0){
                cantImpar++;
            }
        }
    
        mensaje = "La cantidad de numeros impares desde " + numero + " hasta cero es: " + cantImpar;
    }
    else{
        mensaje = "Error, ingrese un numero positivo";
    }
    
    alert(mensaje);
}

function NumerosDivisibles()
{
    let numero;
    let cantDiv;
    let i;
    let mensaje;

    cantDiv=0;

    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);

    if(numero>0){
        for(i=1;i<=100;i++){
            if(numero%i==0){
                cantDiv++;
            }
        }

        mensaje = "La cantidad de numeros divisibles de " + numero + " es: " + cantDiv;
    }
    else{
        mensaje = "Error, ingrese un numero positivo";
    }
    alert(mensaje);
}

function VerificarPrimo()
{
    let numero;
	let bandera;
	let i;

	numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
	bandera = 1;

    if(numero>0){
        for(i=2;i<numero;i++){
            if(numero%i==0){
                bandera=0;
                mensaje = "No es primo";
                break;
            }
        }
        
        if(bandera==1 ){
           mensaje = "Es primo";
        }
    }
	else{
        mensaje = "Error, ingrese un numero positivo";
    }

    alert(mensaje);
}

function NumerosPrimos()
{
    let numero;
	let divisor;
	let i;
    let j;
    let cantNumPrimo;

	numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    cantNumPrimo=0;

    if(numero>=0){
        for(i=1;i<=numero;i++){
            divisor=0;
            for(j=1;j<=i;j++){
                if(i%j==0){
                    divisor++;
                }
            }
            if(divisor==2){
                cantNumPrimo++;
            }            
        }
        mensaje = "Cantidad: "+cantNumPrimo;
         
    }
	else{
        mensaje = "Error, ingrese un numero positivo";
    }

    alert(mensaje);
}