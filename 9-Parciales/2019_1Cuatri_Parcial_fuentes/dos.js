/*
Romina Noemi Calani Cruz
DIV X

Enunciado: 
3)Nos ingresan una cantidad indeterminada de ventas realizadas por las distintas sucursales 
de una Mega Tienda Polirubro, validando los datos ingresados:

nombreCliente del cliente, 
sucursal( “CABA”, “BS.AS.” o “INTERIOR”), 
tipo(“GRANDE”,”MEDIANA”,“PEQUEÑA”),
monto de venta en Pesos.

Informar:

a)El nombreCliente del cliente al que se le vendió menos.

b)El promedio del monto de venta de las sucursales del tipo “PEQUEÑA”.

c)La sucursal con mas cantidad de ventas.

Pedir datos por prompt y mostrar por document.write
*/

function mostrar()
{
    let nombreCliente;
	let sucursal;
	let tipo;
	let respuesta;
	let montoVenta;
    let menorVenta;
    let clienteMenos;
    let promedioPeque;
    let sumaPeque;
    let cantPeque;
    let sucursalMasVentas;
    let ventasCaba;
    let ventasBsAs;
    let ventasInterior;
    let bandera;

	respuesta = 's';
    montoVenta = 0;
    bandera = 0;
    promedioPeque = 0;
    sumaPeque = 0;
    cantPeque = 0;
    ventasCaba = 0;
    ventasBsAs = 0;
    ventasInterior = 0;

	while(respuesta=='s')
	{
		do{
			nombreCliente = prompt("Ingrese el nombre del cliente:");
			nombreCliente = nombreCliente.toLowerCase();
		}while(!(isNaN(nombreCliente)));

		do{
			sucursal = prompt("Ingrese la sucursal: ");
			sucursal = sucursal.toUpperCase();
		}while(sucursal!="CABA" && sucursal!="BS.AS." && sucursal!= "INTERIOR");

		do{
			tipo = prompt("Ingrese el tipo de sucursal:");
            tipo = tipo.toUpperCase();
		}while(tipo!="GRANDE" && tipo!="MEDIANA" && tipo!="PEQUENIA");

		do{
            montoVenta = prompt("Ingrese monto de ventas en pesos: ");
            montoVenta = parseFloat(montoVenta);
        }while(isNaN(montoVenta) || montoVenta < 0);

        if(bandera==0){
            menorVenta = montoVenta;
            clienteMenos = nombreCliente;
            bandera = 1;
        }
        else{
            if(montoVenta<menorVenta){
                menorVenta = montoVenta;
                clienteMenos = nombreCliente;
            }
        }

        if(sucursal=="PEQUENIA"){
            sumaPeque+=montoVenta;
            cantPeque++;
        }

        switch(sucursal){
            case "CABA":
                ventasCaba++;
            break;
            case "BS.AS.":
                ventasBsAs++;
            break;
            default:
                ventasInterior++;
        }

		respuesta = prompt("Continuar ingresando datos? s/n");
		respuesta = respuesta.toLowerCase();
	}

    if(cantPeque>0){
        promedioPeque = sumaPeque/cantPeque;
    }

    if(ventasCaba>ventasBsAs){
		if(ventasCaba>ventasInterior){
			sucursalMasVentas="CABA";
		}
		else{
			sucursalMasVentas="Interior";
		}
	}
	else if(ventasBsAs>ventasInterior){
        sucursalMasVentas="BS.AS.";
	}
	else{
        sucursalMasVentas="Interior";
	}

	document.write("El nombre del cliente al que se le vendió menos: "+clienteMenos+" <br>");
	document.write("El promedio del monto de venta de las sucursales del tipo PEQUEÑA: "+promedioPeque+" <br>");
	document.write("La sucursal con mas cantidad de ventas: "+sucursalMasVentas+" <br>");
	
}
