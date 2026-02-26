//    let saludo="HOLA";
//    let edad=22;
//    let esActivo=false;
//    let frutas=["UVA", "mora"];
//    let nulo="null";
//    console.log(saludo);
//   console.log(edad);
//    console.log(esActivo);
//    console.log(frutas);
//    console.log(nulo);

//let nombre_propio="Juana";
//let apellido_propio="Villalba";
//console.log(nombre_propio+apellido_propio);

//let nombre_ejercicio2=prompt("Ingrese nombre");
//let apellido_ejercicio2=prompt("Ingrese apellido");
//let edad_ejercicio2=prompt("Ingrese edad");
//alert("Bienvenido"+ nombre +" "+ apellido);

//    let num1=prompt("Ingrese numero 1");
//    let num2=prompt("Ingrese numero 2");;
//    let resultado=num1+num2;
//    console.log(resultado);

//let largoPelo=prompt("¿Tiene el pelo largo?");

//let edad= prompt("Ingrese edad");
//if(largoPelo==="si"&& edad>=18){
//    console.log(true)
//}
//else{
//    console.log(false)
//}

//let texto=prompt("Ingrese texto");
//alert(texto.length);
let plato=prompt("¿Que quieres cenar? (Pizza/Lasagna)" .toLowerCase);
switch (plato){
    case"Pizza":
    alert("Pizza servida en 40 minutos")
    break;
    case"Lasagna":
    alert("Lasagna servida en 40 minutos")
    break;
    default:
    alert("No esta en el menu")
    break;
}