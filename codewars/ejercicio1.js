//console.log(GetSum(-1, 2))

function GetSum( a,b )
{      
 var maxNum =  Math.max(a, b)
 var minNum =  Math.min(a,b)

 var result = 0

 //var result = [];

for (let i = minNum; i <= maxNum; i++) {

    result +=  i
  //  result.push(i)
} 

// return result.reduce(function(valorAnterior, valorActual){
//     return valorAnterior + valorActual;
//   });
return result;
}

// mostrarMas();

// function mostrarMas()
// {
//   var txt = "bitcoin take over the world maybe who knows perhaps to"
//   var word = txt.split(" ");
//   console.log(Math.min.apply(null, word.map(palabras => palabras.length)))
// }



//Suma entre los valores que hay entre dos números.

//console.log(GetSum(-1, 2))

function GetSum( a,b ){      
 let result = 0
  for (let i =  Math.min(a,b); i <= Math.max(a, b); i++) {
      result +=  i
  } 
return result;
}

//Devuelve el número binario de la suma de dos numeros decimales

console.log(addBinary(11,1))

function addBinary(a,b) {
  let result = a + b
  return result.toString(2)
}


// var num = 125;

// console.log( num.toString(2) ); // "1111101"

// console.log(arrayBinario);

//  return arrayBinario

// }
// function dec2bin(i){
//   return (i<1)?"":dec2bin((i-(i%2))/2)+i%2; 
// }

// var num = 15;



// var amigos = `Luis`;
// console.log(amigos.toString(2));