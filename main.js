/* Simulador de descuentos */

/*
Es un simulador de compra de bolsas de cemento, cal y arena, el mismo tiene un sistema para aplicar un descuento dependiendo de la cantidad de bolsas totales compradas,
Si el usuario compra mas de 10 bolsas se hace un 5% de descuento.
Si el usuario compra mas de 20 bolsas se hace un 10% de descuento.
Si el usuario compra mas de 30 bolsas se hace un 15% de descuento.
Si el usuario compra mas de 40 bolsas se hace un 30% de descuento.
la aplicacion muestra el total, luego el precio que pagara con descuento y por ultimo la cantidad que se ahorro.

*/


let respuesta = "si";
let bolsas = 0;
let tipoDeBolsa;
let totalDeBolsas = 0;
let totalConDescuento = 0;
let totalDelDescuento = 0;
let cal = 0;
let cemento = 0;
let arena = 0;
let descuento = 0;
let descuentoBolsas = 0;
let total = 0;

totalConDescuento = parseInt(totalConDescuento);
totalDelDescuento = parseInt(totalDelDescuento);
total = parseInt(total);
cal = parseInt(cal);
cemento = parseInt(cemento);
arena = parseInt(arena);


while(respuesta != "no"){
    
    bolsas = prompt("Ingrese cantidad de bolsas");
    bolsas = parseInt(bolsas);
    totalDeBolsas
    if(isNaN(bolsas)){
        alert("ingrese un valor valido")
        continue;
    }
    tipoDeBolsa = prompt("ingrese tipo de bolsa cal, arena, cemento");
    tipoDeBolsa = tipoDeBolsa.toLowerCase();
    switch(tipoDeBolsa){
        case "cal":
            cal += bolsas;
            totalDeBolsas += bolsas;
        break;
        case "arena":
            arena += bolsas;
            totalDeBolsas += bolsas;
        break;
        case "cemento":
            cemento += bolsas;
            totalDeBolsas += bolsas;
        break;
        default:
            alert("valor invalido");
        break;
    }
    respuesta = prompt("¿Quiere seguir comprando?");
    respuesta = respuesta.toLowerCase();
    console.log(totalDeBolsas);
}
console.log(arena);
console.log(cal);
console.log(cemento);

total = cal * 25 + arena * 50 + cemento * 40 ;

console.log(total);
const descuentos = (a, b) => a * b

if(totalDeBolsas >= 10 ){
    if(totalDeBolsas >= 20){
        if(totalDeBolsas >= 30){
            if(totalDeBolsas > 40){
                totalConDescuento = descuentos(total,0.70);
                descuento = 1;
                descuentoBolsas = 30;
            }
            else{
                totalConDescuento = descuentos(total,0.85);
                descuento = 1;
                descuentoBolsas = 15;
            }
        }
        else{
            totalConDescuento = descuentos(total,0.90);
            descuento = 1;
            descuentoBolsas = 10;
        }
    }
    else{
        totalConDescuento = descuentos(total, 0.95);
        descuento = 1;
        descuentoBolsas = 5;
    }
}
totalDelDescuento = total - totalConDescuento;
if(descuento == 1){
    alert("El valor total sin descuento es de " + total + "$");
    alert("El descuetno aplicado es de un " + descuentoBolsas + "%" + " y da un total de " + totalConDescuento + "$" )
    alert("El descuento tiene un valor de " + totalDelDescuento + "$" );
}
else{
    alert("El valor total es de " + total + "$")
}
