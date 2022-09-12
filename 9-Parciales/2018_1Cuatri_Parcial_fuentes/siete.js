/*
Romina Calani Cruz
DIV X

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function vmostrar()
{
    let nota;
    let genero;
    let i;
    let promedio;
    let sumaNotas;
    let notaBaja;
    let generoBaja;
    let bandera;
    let cantNotaMasc;
    
    sumaNotas = 0;
    promedio = 0;
    bandera = 0;
    cantNotaMasc = 0;

    for(i = 0; i < 5; i++){
        do{
            nota=prompt("Ingrese la nota: ");
            nota=parseFloat(nota);
        }while(nota<0 || nota>10 || isNaN(nota));

        sumaNotas += nota;

        do{
            genero=prompt("Ingrese el sexo \"F\" o \"M\"").toUpperCase();
        }while(genero!='F' && genero!='M');

        if(bandera == 0){
            notaBaja = nota;
            generoBaja = genero;
            bandera = 1;
        }
        else{
            if(nota<notaBaja){
            notaBaja = nota;
            generoBaja = genero;
            }
        }

        if(genero == 'M' && nota >= 6){
            cantNotaMasc++;
        }

    }

    promedio = sumaNotas / 5;

    document.write("Promedio: " + promedio.toFixed(2));
    document.write("Nota mas baja: " + notaBaja + " sexo: " + generoBaja);
    document.write("Cantidad de varones con nota mayor o igual a 6: " + cantNotaMasc);
    
}
/*
Práctica de Parcial:


Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para 
preparar comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validar("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo de alimento más caro.
d) El promedio de precio por kilo en total.
*/
function mostrar(){
    let peso;
    let tipo;
    let precio;
    let precioXkilo;
    let pesoTotal;
    let descuento;
    let importeTotal;
    let totalConDesc;
    let prodCaro;
    let promedioPrecio;
    let continuar;
    let precioCaro;
    let cantProdTotal;

    pesoTotal = 0;
    descuento = 1;
    totalConDesc = 0;
    importeTotal = 0;
    cantProdTotal = 0;
    precio = 0;
    continuar = 's';
    precioCaro = 0;

    while(continuar=='s'){
        cantProdTotal++;

        do{
            peso = prompt("Ingrese el peso del producto en Kilogramos: ");
            peso = parseFloat(peso);
        }while(peso<10 || peso>1000 || isNaN(peso));
        
        do{
            precio = prompt("Ingrese el precio del producto: ");
            precio = parseFloat(precio);
        }while(precio<0 || isNaN(precio));
    
        do{
            tipo = prompt("Ingrese el tipo de producto.\n V: para vegetal\n A: para animal\n M: para mezcla");
            tipo = tipo.toUpperCase();
        }while(tipo!='V' && tipo!='A' && tipo!='M');

        pesoTotal += peso;
        precioXkilo = precio * peso;
        importeTotal += precioXkilo;

        if(precio>precioCaro){
            precioCaro=precio;
            prodCaro=tipo;
        }

        continuar = prompt("Desea continuar ingresando datos? s/n");
        continuar = continuar.toLowerCase();
    }
    
    if(pesoTotal>=300){
        descuento = 0.75;
    }
    else{
        if(pesoTotal>=100){
            descuento = 0.85
        }
    }

    totalConDesc = importeTotal * descuento;
    promedioPrecio = importeTotal / cantProdTotal;

    document.write("El importe total a pagar: " + importeTotal.toFixed(2));//A

    if(totalConDesc!=importeTotal){
        document.write("<br> El importe total con descuento: " + totalConDesc.toFixed(2));//B
    }

    switch(prodCaro){
        case 'V':
            prodCaro = "Vegetal";
        break;
        case 'A':
            prodCaro = "Animal";
        break;
        default:
            prodCaro = "Mezcla";
    }

    document.write("<br> El tipo de alimento mas caro es: " + prodCaro);//C

    document.write("<br> El promedio del precio total es: " + promedioPrecio.toFixed(2));//D

}
