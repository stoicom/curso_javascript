//isAdult(17)

//imprimir();

function imprimirWhile()
{
  var companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"];
  var cuantos = companies.length;
  var contador = 0;

  while (contador < cuantos) {
      console.log(companies[contador]);
      contador++;
  };
}

// imprimirFor();


function imprimirFor()
{
  var cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
  var cuantos = cities.length;

  for (let i = 0; i < cuantos; i++) {
        console.log(cities[i]);
  }
}

// imprimirArray();

function imprimirArray()
{
  var companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"];
  var cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
  var nuevaArray = companies.concat(cities);

 // console.log(nuevaArray);
   console.log([...companies, ...cities]); ES6
}

// imprimirArray2();

function imprimirArray2()
{
  var companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"];
  var cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
  var cuantos = cities.length;

  for (let i = 0; i < cuantos; i++) {
        // console.log(companies[i] + ' - ' + cities[i]);
        console.log(`${companies[i]}  -  ${cities[i]}`); 
  }

  // console.log([...companies, ...cities]); ES6
}


//borrarArray2();

function borrarArray2()
{
  var companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"];
  var cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
  // var cuantos = cities.length-1;

  companies.pop();
  cities.pop();
 // delete cities[cuantos];

  for (let i = 0; i < cities.length; i++) {
        console.log(`${companies[i]}  -  ${cities[i]}`); 
  }

  // console.log([...companies, ...cities]); ES6
}

//mostrarA();

function mostrarA()
{
  var companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"];

  for (let i = 0; i < companies.length; i++) {
    if(companies[i].charAt(0) === 'A')
        console.log(companies[i]); 
    }
}


//mostrarMas();

function mostrarMas()
{
  var cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
  console.log(cities.filter(city => city.length >= 10));

  // for (let i = 0; i < cities.length; i++) {

  //   if(cities[i].length >= 10)
  //       console.log(cities[i]); 
  //   }
}

//mostrarOnline();

function mostrarOnline()
{

  var usuarios = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}];

let result = {
  online: [],
  offline: [],
  away: []
}

onlineUsers = usuarios.filter(usuario => usuario.status === 'online' && usuario.lastActivity <= 10);
// console.log(onlineUsers);

var resultadoOnline =  onlineUsers.map(elemento => elemento.username)
// console.log(resultadoOnline);

resultadoOffline = usuarios.filter(usuario => usuario.status === 'offline');
resultadoOffline = resultadoOffline.map(elemento => elemento.username)
// console.log(resultadoOffline);

resultadoAway =  usuarios.filter(usuario =>  usuario.status === 'online' && usuario.lastActivity > 10);
resultadoAway = resultadoAway.map(elemento => elemento.username)

// console.log(resultadoAway);

result = {
    online: resultadoOnline.toString(),
    offline: resultadoOffline.toString(),
    away: resultadoAway.toString()
  }

  console.log(result);
}

//agregarContacto();

function agregarContacto(){
 var cadena =  "Sergio Zamarro, 485648, Adrian Fuentes, 904847"

 var elemento = cadena.split(',');

  function noEsNumero(cual) {
    return isNaN(cual);
  }

  var elementos = elemento.filter(noEsNumero)
  var elementos2 = elemento.filter(element => !noEsNumero(element))
  var contactos =[]

    for (let i = 0; i < elementos2.length; i++) {
      contactos.push({
        username: elementos[i],
        contact: Number(elementos2[i])
      })
    }

console.log(contactos)


   // console.log(elementos);
   // console.log(elementos2);


}

// idioma('irish');

function idioma(nombreIdioma)
{
  var idiomas={
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
  }

    mensajeIdioma = idiomas[nombreIdioma];

    if(!mensajeIdioma)
      mensajeIdioma = "Welcome";

     console.log(mensajeIdioma);
}


  //Ejercicio Sergio

  // var idiomas={
  //     english: 'Welcome',
  //     czech: 'Vitejte',
  //     danish: 'Velkomst',
  //     dutch: 'Welkom',
  //     estonian: 'Tere tulemast',
  //     finnish: 'Tervetuloa',
  //     flemish: 'Welgekomen',
  //     french: 'Bienvenue',
  //     german: 'Willkommen',
  //     irish: 'Failte',
  //     italian: 'Benvenuto',
  //     latvian: 'Gaidits',
  //     lithuanian: 'Laukiamas',
  //     polish: 'Witamy',
  //     spanish: 'Bienvenido',
  //     swedish: 'Valkommen',
  //     welsh: 'Croeso'
  // }
// function getLangauge(languaje){
//   return idiomas[languaje] || 'Welcome'
// }

// console.log(getLangauge('polish'))


// ejercicioObjeto();

// function ejercicioObjeto(){

//     let human = {name: 'Sergio',
//       saludar: function(){
//         return('Hi!')
//       },
//       adios: function(){
//         return('Adios')
//       },
//       cambiarNombre:function(nombre){
//         this.name = nombre;
//       }
//     }

//   console.log(human.cambiarNombre('paco'));
// }




// si el valor esta dentro del array
function isInArray(cadena, valor){
    return cadena.includes(valor);
}
// console.log(isInArray([1, 2, 3], 2));

//proyectos()

function proyectos(){

  let projects = [
  {
      project: 'project1',
      groups: [
          {
              name: 'group1',
              groups: [
                  {
                      name: 'group1.1',
                      groups: []
                  },
                  {
                      name: 'group1.2',
                      groups: [
                          {
                              name: 'group1.2.1',
                              groups: [
                                {
                                  name: 'group1.2.2',
                                  groups: []
                                }
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      project: 'project2',
      groups: [
        {
          name: 'grupo2',
          groups: [{
            name: 'gupo2.1',
            groups: []
          }]
        }
      ]
  }
]


// var nombreProyectos = [];
// var nombreGrupo2 = [];

// for (let i = 0; i < projects.length; i++) {
//   // if(projects[i].groups)
//   nombreGrupo2 = [];

//   nombreProyectos.push({
//     project: projects[i].project,
//     groups: nombreGrupo(projects[i].groups),
//   })
// }

// function nombreGrupo(grupos){
//   for (let i = 0; i < grupos.length; i++) {
//     nombreGrupo2.push(grupos[i].name)
//     nombreGrupo(grupos[i].groups)     
//     }
//   return nombreGrupo2;
// }

//  console.log(nombreProyectos)
// }

var nombreProyectos = [];
for (let i = 0; i < projects.length; i++) {
  nombreProyectos.push({
    project: projects[i].project,
    groups: nombreGrupo(projects[i].groups),
  })
}
function nombreGrupo(grupos){
  var nombreGrupo2 = [];
  for (let i = 0; i < grupos.length; i++) {
    nombreGrupo2.push(grupos[i].name)  
    if (grupos[i].groups.length) nombreGrupo2 = [...nombreGrupo2, ...nombreGrupo(grupos[i].groups)]    
    }
  return nombreGrupo2;
}
 console.log(nombreProyectos)
}


// sumarValores();


// function sumarValores(){


// const inventory = [
//   {type:   "machine", value: 5000},
//   {type:   "machine", value:  650},
//   {type:      "duck", value:   10},
//   {type: "furniture", value: 1200},
//   {type:   "machine", value:   77}
// ]

// inventory.reduce(function(valorAnterior, valorActual){
//   return valorAnterior + valorActual;
// });
// }


// }



 
  
  // function listadoUsuario()
  // {
  //   // var nombreUsuarios = [];
  //   // for (let i = 0; i < people.length; i++) {
  //   //   nombreUsuarios.push(people[i].name)
  //   // }
  //   // var usuariosFinales = nombreUsuarios.join(' , ');
  //  return people.map(usuario => usuario.name).join(', ')
  // }


//   function cuantosSenior()
//   {
//     // var cualesSenior = []
//   //   for (let i = 0; i < people.length; i++) {
//   //     if(people[i].role === "senior"){
//   //       cualesSenior.push(people[i].role)
//   //     }
//   // }
//   return people.filter(usuario => usuario.role.trim() === 'senior').length;
// }

// const teamName = "tooling"
// const people = [{name: "Jennie", role: "senior"},
//                 {name: "Ronald", role: "senior"},
//                 {name: "Martin", role: "junior"},
//                 {name: "Martin", role: "senior"},
//                 {name: "Anneli", role: "senior"}]

// const listadoUsuario = () => people.map(usuario => usuario.name).join(', ')
// const cuantosSenior = () => people.filter(usuario => usuario.role.trim() === 'senior').length
// const resultado = () => `There are ${people.length} people on the tooling team.
// Their names are ${listadoUsuario()}. 
// ${cuantosSenior()} of them have a senior role.`
//console.log(resultado());
  


//Family

let family = {
  name: 'Sergio',
  firstName: 'Zamarro',
  age: 26,
  dad: {
    name: 'Agustin',
    age: 50
  },
  mother: {
    name: 'Yolanda',
    age: 52 
  }
}

const getFamily = () => family
//console.log(getFamily());

let numbers = [1, 2, 3, 1, 5, 5, 2, 7, 25, 32, 25, 69]
//console.log(Array.from(new Set(numbers)));


//Fecha

var ES = new Intl.DateTimeFormat("es-ES")

//console.log(ES.format(new Date()));




const name = Symbol()
let usuario = {
  [name] : 'Michele',
  firstName: 'Stoico',
  age: 37
}

console.log(usuario[name]);
// usuario[name] = name;


// console.log(set);

// function saludar(){
//     function alertasaludo(){
//             console.log("hola " +  quien);
//     }
//     return alertasaludo;
// }
// saludar("Amigo/a")();






// human.name //Sergio
// human.saludar() //Hi!
// human.adios() //Bye
// human.cambiarNombre('Alberto')
// human.name //Alberto




// function isAdult(age){
//     // if(age>=18){
//     //     console.log("es mayor")  
//     // }
//     // else{
//     //     console.log("no es mayor")
//     // }
    
//     console.log("Es " + (age >= 18 ? "mayor" : "menor"));

//   }



// // borrarCaracter('caasd');

// function borrarCaracter(cadena){
//       var numCarac = cadena.length;
//       cadena2 =  cadena.substring(1,numCarac-1)
//       console.log(cadena2);
// }

// // buscaRaton('c...m');



// function buscaRaton(raton)
// {
  

//     if(raton.length >= 4)
//       return;

//     console.log(raton.length);


//     // for (var i = raton.length; i >= 0; i++) {


//     // }

// }

// // var cadenaVerso = "barcelona madrid barcelona praga ibiza ibiza teruel";
// // var espacio = " ";

// // var cadenaADividir = [];
// // dividirCadena(cadenaVerso,espacio);


// // function dividirCadena(cadena,separador)
// // {
// //      var arregloDeCadenas = cadena.split(separador);
// //      console.log(arregloDeCadenas[0]);


// //      if(arregloDeCadenas[0] = arregloDeCadenas.indexOf(arregloDeCadenas))
// //      {

// //      }

// // }

// var cadena = "hola que tal estas";
// var espacio = " ";

// //cambioCadena(cadena,espacio)

// function cambioCadena(cadena,separador)
// {
//   var arregloDeCadenas = cadena.split(separador);

//    var elementos = [];

//    for (var i=0; i < arregloDeCadenas.length; i++) {

//     var palabra = arregloDeCadenas[i]

//     elementos.push(palabra.split('').reverse().join(''));
//     // console.log(palabra.split('').reverse().join(''))

//    }
//    // console.log(elementos.join(' '));


// }


// let languages = [
// {
//   name: 'python',
//   score: 60
//   },
//   {
//   name: 'javascript',
//   score: 50
//   },
//   {
//   name: 'ruby',
//   score: 80
//   }
// ]


// function valido(elemento) {
//   return elemento >= 60;
// }

// //console.log(languages.filter(valido));


// // cadenaCaracteres('hjdbcjassaaa');

//   function cadenaCaracteres(cadena){

//     var cadena;
//     var numCarac = cadena.length;
//     var cadena2 = [];

//     for (var i = numCarac; i >= 0; i++) {
//     }

//     console.log(cadena.search("a"));

//   }

//   // nacimiento()
//   function nacimiento(){


//     var fecha = new Date(1981, 3, 10);

    
//     // console.log(fecha);
//     console.log( "Nací el día " + fecha.getDate() + " del mes " + fecha.getMonth() + " del año " + fecha.getFullYear() );


//       // if(age>=18){
//       //     console.log("es mayor")
//       // }
//       // else{
//       //     console.log("no es mayor")
//       // }
      
//      // console.log("Es " + (age >= 18 ? "mayor" : "menor"));
  
//     }

    
