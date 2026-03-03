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
//let plato=prompt("¿Que quieres cenar? (Pizza/Lasagna)" .toLowerCase);
//switch (plato){
//    case"Pizza":
//    alert("Pizza servida en 40 minutos")
//    break;
//    case"Lasagna":
//    alert("Lasagna servida en 40 minutos")
//    break;
//    default:
//    alert("No esta en el menu")
//    break;
//}

//tarea 2

//let estadoDeAnimo=prompt("¿Como estas? (triste/contento)");
//if(estadoDeAnimo==="triste"|| estadoDeAnimo==="Triste"||estadoDeAnimo==="TRISTE"){
//    console.log("No estes triste");
//}
//else{
//    console.log("Que bien");
//}

//let numeroSecreto=14;
//let adivinar=prompt("Adivina el numero secreto");
//if(numeroSecreto===adivinar){
//    console.log("Felicidades has acertado");
//}
//else{
//    console.log("EQUIVOCADO");
//}

//let imagenAvatar="https://www.google.com/imgres?q=avatar%20imagenes%20cartelera%20cine&imgurl=https%3A%2F%2Flumiere-a.akamaihd.net%2Fv1%2Fimages%2Fe9fa83c7242fb46fa962150a60301d4e_2764x4096_7a402a9f.jpeg%3Fregion%3D0%2C0%2C2764%2C4096&imgrefurl=https%3A%2F%2Fwww.20thcenturystudiosla.com%2Fnovedades%2Favatar-regresa-a-los-cines-poster-y-fecha-de-re-estreno&docid=lou3XhmOUVloAM&tbnid=djiNNxRgyzAlXM&vet=12ahUKEwjG4sjvvPeSAxWdu5UCHUgSAocQnPAOegQIGhAB..i&w=2764&h=4096&hcb=2&ved=2ahUKEwjG4sjvvPeSAxWdu5UCHUgSAocQnPAOegQIGhAB";
//let imagenCumbres="";
//let peliculaElegida=prompt("Ingrese su pelicula favorita: \ -Avatar \-Cumbres Borrascosas");

//switch (peliculaElegida){
//    case "Avatar":
//        document.write(`Su ticket a sido emitido ${peliculaElegida}`);
//        break;
//    case "Cumbres Borrascosas":
//        document.write(`Su ticket a sido emitido ${peliculaElegida}`);
//        break;
//}

//ensaladaDeFrutas=["Naranja","Banana","Manzana","Frutilla","Cereza"];
//for(let i=0; i<=4; i++){
//    console.log(`Las frutas que hay en la ensalada son ${ensaladaDeFrutas[i]}`);
//}

//edades=[12,34,57,98,2,30];

//for(let i=0; i<=5; i++){
//    let edadesTotales= edades[i];
//    let num= Number;
//    let promedio;
//    console.log(edades[i]);
    
//    if(i!=5){
//        edadesTotales += edades[i];
//        num  += edadesTotales;
//    }
//    else{
//        console.log(num);
//        promedio = edadesTotales / edades.length;
//        console.log(`El promedio de las 6 edades son: ${promedio}`);
//    }
//}

//const amigo=["Ryan", "Kieran", "Mark", "Miguel"];
//console.log(amigo);
//for(let i=0; i<4; i++){
//    let temp= amigo[i];
//    if(temp.length >4){
//        if (i<3){
//            amigo.splice(i);
//        }
//        else if(i===4){
//            amigo.pop(i);
//        }       
//        console.log(amigo);
//    }
//}
//console.log(amigo);

//FUNCIONES

let saludo= function saludo(){
    console.log("Bienvenido visitante");
}
saludo();

let calculoMayor= function calculoMayor(num1, num2){
    if(num1>num2){
        alert(`El mayor numero es num1: ${num1}`);
    }
    else if(num1==num2){
        alert(`Los numeros son iguales`);
    }
    else{
        alert(`El mayor numero es num2: ${num2}`);
    }
}
calculoMayor(25,15);
calculoMayor(25,35);
calculoMayor(25,25);

let filtrarAmigos= function(arr){
    for (let i=0; i<arr.length;i++){
        if (arr[i].length>4 || arr[i].length<4){
            if(i<arr.length-1){
                arr.splice(i,1);
            }
            else if(i==arr.length-1){
                arr.pop(i);
            }
        }
    }
    return arr;
}

const amigo1=["Ryan","Kieran","Mark","Miguel"];
const amigo2 =["Ringo","Jhon","Paul","George","Ada","Marie"];
let a = filtrarAmigos(amigo1);
let b = filtrarAmigos(amigo2);
console.log(a);
console.log(b);

let tirarDatos = function(datos){
    return datos[Math.floor(Math.random()* datos.length)];
}
const dado=[1,2,3,4,5,6];
let resultadoDado = tirarDatos(dado);
console.log(resultadoDado);