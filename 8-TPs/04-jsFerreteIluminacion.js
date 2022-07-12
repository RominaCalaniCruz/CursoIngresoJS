/*
    Romina Calani Cruz
    DIV X
    Enunciado:

    4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantLamp;
    let precioFinal;
    const precio = 35;
    let descuento;
    let marcaLamp;
    let mensaje;
    let impuesto;
    
    cantLamp = document.getElementById("txtIdCantidad").value;
    cantLamp = parseInt(cantLamp);
    marcaLamp = document.getElementById("Marca").value;
    descuento = 0;
    impuesto = 0;
    precioFinal = precio * cantLamp;

    if(cantLamp >= 6)
    {
        descuento = 0.50;
    }
    else
    {
        switch(cantLamp)
        {
            case 5:
                if(marcaLamp == "ArgentinaLuz")
                {
                    descuento = 0.40;
                }
                else
                {
                    descuento = 0.30;
                }
                break;
            case 4:
                if(marcaLamp == "ArgentinaLuz" || marcaLamp == "FelipeLamparas")
                {
                    descuento = 0.25;
                }
                else
                {
                    descuento = 0.20;
                }
                break;
            case 3:
                if(marcaLamp == "ArgentinaLuz")
                {
                    descuento = 0.15;
                }
                else if(marcaLamp == "FelipeLamparas")
                {
                    descuento = 0.10;
                }
                else{
                    descuento = 0.05;
                }
                break;

            default:
                break;
        }
    }
    
    precioFinal = precioFinal - precioFinal * descuento;

    if(precioFinal >= 120)
    {
        impuesto = precioFinal * 0.10;
        mensaje = "Usted pago "+impuesto+" de IIBB.";
        alert(mensaje);
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal + impuesto;

}
