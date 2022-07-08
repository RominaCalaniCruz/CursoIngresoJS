/*3.	
Romina Calani Cruz 
DIV X 
TP 3--- Enunciado:

    Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let tempConv;

    temperatura=parseFloat(document.getElementById("txtIdTemperatura").value);

    tempConv = (temperatura - 32)/1.8;

    alert(temperatura+" grados Fahrenheit son "+tempConv.toFixed(2)+" grados Centigrados.");
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let tempConv;

    temperatura=parseFloat(document.getElementById("txtIdTemperatura").value);

    tempConv = temperatura * 1.8 + 32;
    
    alert(temperatura+" grados Centigrados son "+tempConv.toFixed(2)+" grados Fahrenheit.");
}
