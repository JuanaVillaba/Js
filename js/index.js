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

//const imagenAvatar = document.createElement(`img`);
//imagenAvatar.src='assets/img/avatar.jpeg';
//imagenAvatar.style.width=`30%`;

//const imagenCumbres =document.createElement(`img`);
//imagenCumbres.src=`assets/img/cumbresBorrascosas.png`;
//imagenCumbres.style.width=`50%`;

//let peliculaElegida=prompt("Ingrese su pelicula favorita: Avatar / Cumbres Borrascosas");
//switch (peliculaElegida){
//    case "Avatar":
//     document.write(`Su ticket a sido emitido ${peliculaElegida}`);
//     document.body.appendChild(imagenAvatar);
//     break;
// case "Cumbres Borrascosas":
//     document.write(`Su ticket a sido emitido ${peliculaElegida}`);
//     document.body.appendChild(imagenCumbres);
//     break;
//}

//ARRAY

//ensaladaDeFrutas=["Naranja","Banana","Manzana","Frutilla","Cereza"];
//for(let i=0; i<=4; i++){
//    console.log(`Las frutas que hay en la ensalada son ${ensaladaDeFrutas[i]}`);
//}

//edades=[12,34,57,98,2,30];
//let edadesTotales=0;
//let promedio=0;
//for(let i=0; i<=5; i++){
//    edadesTotales += edades[i];
//    let num= Number;
//    let promedio;
//    console.log(edades[i]);
//    if(i==edades.length-1){
//        promedio = edadesTotales / edades.length;
//        promedio=Math.round(promedio);
//        console.log(`El promedio de las 6 edades son: ${promedio}`);
//    }
//}

//const amigo=["Ryan", "Kieran", "Mark", "Miguel"];
//console.log(amigo);
//for(let i=amigo.length-1; i>=0; i--){
//    if(amigo[i].length!==4){
//        if (i<amigo.length-1){
//            amigo.splice(i,1);
//        }
//        else if(i===amigo.length-1){
//            amigo.pop(i);
//        }       
//    }
//}
//console.log(amigo);

//const listaDeSuper=["jabon","pasta","azucar","arroz","tomates"];
//console.log(listaDeSuper);
//listaDeSuper.push("shampoo");
//console.log(listaDeSuper);
//listaDeSuper.shift();
//console.log(listaDeSuper.length);
//listaDeSuper.indexOf("shampoo");
//console.log(listaDeSuper);

//FUNCIONES

//let saludo= function saludo(){
//    console.log("Bienvenido visitante");
//}
//saludo();

//let calculoMayor= function calculoMayor(num1, num2){
//    if(num1>num2){
//        alert(`El mayor numero es num1: ${num1}`);
//    }
 //   else if(num1==num2){
//        alert(`Los numeros son iguales`);
//    }
//    else{
//        alert(`El mayor numero es num2: ${num2}`);
//    }
//}
//calculoMayor(25,15);
//calculoMayor(25,35);
//calculoMayor(25,25);

//let filtrarAmigos= function(arr){
//    for (let i=arr.length-1; i>=0;i--){
//        if (arr[i].length!==4){
//            if(i<arr.length-1){
//                arr.splice(i,1);
//            }
//            else if(i==arr.length-1){
//                arr.pop(i);
//            }
//        }
//    }
//    return arr;
//}
//const amigo1=["Ryan","Kieran","Mark","Miguel"];
//const amigo2 =["Ringo","Jhon","Paul","George","Ada","Marie"];
//let a = filtrarAmigos(amigo1);
//let b = filtrarAmigos(amigo2);
//console.log(a);
//console.log(b);

//let tirarDatos = function(datos){
//    return datos[Math.floor(Math.random()* datos.length)];
//}
//const dado=[1,2,3,4,5,6];
//let resultadoDado = tirarDatos(dado);
//console.log(resultadoDado);

let toDoList = {
    tipoDeTarea: "Compras",
    dia: "06/03/2026",
    productos: ["jabon","aceite","arroz","shampoo"],
    cantidadDeProductos: 4,
    estado: "pendiente",
    notificacion: function(){
        alert("¡Esta tarea tiene una prioridad urgente!");
    }
}
console.log(toDoList.dia);
console.log(toDoList["tipoDeTarea"]);
console.log(toDoList["cantidadDeProductos"]);
toDoList.notificacion();

const superHeroes ={
    "squadName" : "Super Hero Squad",
    "homeTown" : "Metro City",
    "formed" : 2016,
    "secretBase" : "Super tower",
    "active" : true,
    "members" : [
        {
        "name" : "Molecule Man",
        "age" : 29,
        "secretIdentity" : "Dan Jukes",
        "powers" : ["Radiation resistance","Turning tiny","Radiation blast"]
        },
        {
        "name" : "Madame Uppercut",
        "age" : 39,
        "secretIdentity" : "Jane Wilson",
        "powers" : ["Million tonne punch","Damage resistance","Superhuman reflexes"]
        }
    ]
}
console.log(superHeroes.squadName);
console.log(superHeroes.members[1].name);
console.log(superHeroes.members[1].powers[2]);
console.log(superHeroes.members[1].age);
function backgroundColor(){
    
    let h1= document.querySelector("h1")
    
    if(h1.style.backgroundColor==="yellow"){
        h1.style.backgroundColor="";
    }
    else{
        h1.style.backgroundColor="yellow"
    }
}
function mostrarImagen(){
    let img = document.querySelector("img")
    if(img.style.display==="none"){
        img.style.display = "block";
    }
    else{
        img.style.display = "none";
    }
}