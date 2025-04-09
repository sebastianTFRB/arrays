import {usuarios} from './data.js';

// ********************************** METODO FOREACH ******************************
    console.log("\n--- VARIOS EJEMPLOS CON forEach ---");

    // Ejemplo 1: Imprimir nombre y edad de cada usuario
    console.log("1. Lista Nombre y Edad:");
    usuarios.forEach(usuario => {
    console.log(`   - ${usuario.nombre} tiene ${usuario.edad} años.`);
    });

    // Ejemplo 2: Calcular suma de pesos usando una variable externa
    let pesos = 0
    usuarios.forEach(usuario => {
    usuario.peso  += pesos;
    });
    console.log(`\n2. Suma total de pesos (calculada con forEach): ${pesos.toFixed(2)} kg`);


    // Ejemplo 3: Mostrar usuarios numerados usando el índice
    console.log("\n4. Usuarios numerados:");
    usuarios.forEach((usuario, indice) => {
    console.log(`   ${indice + 1}. ${usuario.nombre}`);
    });

// ********************************** METODO MAP ******************************

    // map: Crea un NUEVO array transformando cada elemento del original según la función callback. 
    // El nuevo array siempre tiene la misma longitud que el original.

//     console.log("\n--- VARIOS EJEMPLOS CON map ---");

//     // Ejemplo 1: Crear un array solo con los emails de los usuarios
     //const listaDeEmails = usuarios.map(usuario => usuario.email);
     //console.log(listaDeEmails`${usuario.email}`);

//     // Ejemplo 2: Crear un array de strings formateados "ID: [id] - Nombre: [nombre]"
     const listaFormateada = usuarios.map(usuario => `ID: ${usuario.id} - Nombre: ${usuario.nombre}`);
     console.log(`2. Array de strings formateados (primeros 2): ["${listaFormateada[0]}", "${listaFormateada[1]}", ...]`);

     // Ejemplo 3: Crear un array de objetos con solo 'id' y 'pesoEnLibras'
     const KILOS_A_LIBRAS = 2.20462;
     let  id ;
     let pesoEnLibras;
     const usuariosConPesoLibras = usuarios.map(usuario => {
     return {
         id: usuario.id,
         pesoEnLibras: (usuario.peso * KILOS_A_LIBRAS).toFixed(2) // Calcular y redondear
     };
     });
     console.log(`3. Array con ${id, pesoEnLibras} (primeros 2):`, usuariosConPesoLibras.slice(0, 2),JSON.stringify(id),JSON.stringify(pesoEnLibras));

//     // Ejemplo 4: Crear un array que indique si cada usuario es mayor d
//   e 40 años (boolean)
//     const esMayorDe40 = usuarios.map(usuario => usuario.edad > 40);
//     console.log(`4. Array indicando si es mayor de 40 (primeros 5): [${esMayorDe40.slice(0,5).join(', ')}, ...]`);


// // ********************************** METODO FILTER ******************************
//     // OBJETIVO: Primero, filtraremos para obtener solo a los usuarios de sexo Masculino que tengan
//     //           entre 30 y 50 años (inclusive).

//     // 1. Filtrar: Hombres entre 30 y 50 años
     const hombresFiltrados = usuarios.filter(usuario =>
         usuario.sexo === 'Masculino' &&
         usuario.edad >= 30 &&
         usuario.edad <= 50
     );
//     // filter: Recorre los 40 usuarios y crea un nuevo array (hombresFiltrados) que solo contiene 
//     // aquellos que cumplen ambas condiciones: ser 'Masculino' y tener una edad entre 30 y 50.

     const metodoFilter = document.getElementById('metodo-filter');
    hombresFiltrados.map((user) => {
         const li = document.createElement('li');
        li.append(`User: ${user.nombre} edad: ${user.edad}`)
        metodoFilter.append(li)
     })

// // ********************************** METODO REDUCE ******************************
    

     // Ejemplo 1: Calcular la suma total de todas las edades
     const sumaEdades = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad, 0);
     console.log(`1. Suma total de edades: ${sumaEdades}`);

     // Ejemplo 2: Encontrar al usuario con el mayor peso (devuelve el objeto usuario completo)
     const usuarioMasPesado = usuarios.reduce((usuarioMaxPeso, usuarioActual) => {
     return usuarioActual.peso > usuarioMaxPeso.peso ? usuarioActual : usuarioMaxPeso;
     }, usuarios[32]); // Iniciar con el primer usuario como referencia
     console.log(`2. Usuario con mayor peso: ${usuarioMasPesado.nombre} (${usuarioMasPesado.peso} kg)`);

//     // Ejemplo 3: Crear un string con todos los emails separados por ", "
     
     const listaEmails = usuarios.reduce((stringEmails, usuario, indice) => {
     return stringEmails + usuario.email + (indice < usuarios.length - 1 ? ", " : ""); // Añadir coma excepto al final
     }, ""); // Iniciar con string vacío
     console.log(`3. Lista de emails: ${listaEmails}`);

//     // Ejemplo 4: Crear un objeto que mapea ID de usuario a su nombre (útil para búsquedas rápidas por ID)
     const mapaIdNombre = usuarios.reduce((mapa, usuario) => {
     mapa[usuario.id] = usuario.nombre; // Clave = ID, Valor = Nombre
     return mapa;
    }, {}); // Iniciar con objeto vacío
     console.log(`4. Mapa ID->Nombre (primeros 5): { 1: '${mapaIdNombre[1]}', 2: '${mapaIdNombre[2]}', 3: '${mapaIdNombre[3]}', 4: '${mapaIdNombre[4]}', 5: '${mapaIdNombre[5]}' ... }`);

//     // Ejemplo 5: // Objetivo: Agrupar a los usuarios por década de edad. El resultado será un objeto donde cada clave 
//     // es un rango de edad (ej: "30-39") y el valor es un array con los nombres de los usuarios en esa década.

//     const usuariosPorDecada = usuarios.reduce((acumulador, usuario) => {
//         // 1. Calcular la década (ej: 28 -> 20, 45 -> 40)
//         const decadaInicio = Math.floor(usuario.edad / 10) * 10;
//         // 2. Crear la clave del objeto (ej: "20-29", "40-49")
//         const claveDecada = `${decadaInicio}-${decadaInicio + 9}`;
      
//         // 3. Si la clave (década) no existe aún en el acumulador, crearla con un array vacío
//         if (!acumulador[claveDecada]) {
//           acumulador[claveDecada] = [];
//         }
      
//         // 4. Añadir el nombre del usuario al array de su década correspondiente
//         acumulador[claveDecada].push(usuario.nombre);
      
//         // 5. Devolver el acumulador modificado para la siguiente iteración
//         return acumulador;
//     }, {}); // {} es el valor inicial del acumulador (un objeto vacío)
      
//       // Mostrar el resultado agrupado
//     const metodoReduce = document.getElementById('metodo-reduce');
//     console.log("Usuarios agrupados por década de edad:");
//     Object.keys(usuariosPorDecada).sort().forEach(decada => { // Ordenar décadas para mejor visualización
//         const li = document.createElement('li');
//         li.append(` ${decada}: ${usuariosPorDecada[decada].join(', ')}`)
//         metodoReduce.append(li)
//         // console.log(` ${decada}: ${usuariosPorDecada[decada].join(', ')}`);
//     });

//     // Este reduce no solo suma o cuenta, sino que transforma la estructura del array en un objeto agrupado.
//     // Requiere lógica dentro del callback para calcular la clave, inicializar arrays dinámicamente y poblar la nueva estructura.

// // ********************************** METODO SLICE ******************************
//     console.log("\n--- VARIOS EJEMPLOS CON slice ---");

//     // Ejemplo 1: Obtener los primeros 4 usuarios del array
     const primerosCuatro = usuarios.slice(3, 4); // Índice 0 hasta (antes de) 4
     console.log(`1. Primeros 4 usuarios (IDs): ${primerosCuatro.map(u => u.id).join(', ')}`);

//     // Ejemplo 2: Obtener un subconjunto del medio (del índice 10 al 14)
//     const segmentoMedio = usuarios.slice(10, 15); // Índice 10 hasta (antes de) 15
//     console.log(`2. Usuarios del índice 10 al 14 (IDs): ${segmentoMedio.map(u => u.id).join(', ')}`);

//     // Ejemplo 3: Obtener los últimos 3 usuarios del array
//     // Se puede hacer calculando el índice o usando índices negativos
//     const ultimosTres = usuarios.slice(-3); // Desde 3 posiciones antes del final hasta el final
//     // Alternativa: const ultimosTres = usuarios.slice(usuarios.length - 3);
//     console.log(`3. Últimos 3 usuarios (IDs): ${ultimosTres.map(u => u.id).join(', ')}`);

//     // Ejemplo 4: Crear una copia superficial (shallow copy) de los primeros 2 usuarios
//     const copiaSuperficial = usuarios.slice(0, 2);
//     copiaSuperficial[0].nombre = "NOMBRE_CAMBIADO_TEMPORALMENTE"; // Cambiar nombre en la copia
//     console.log(`4. ¿Nombre cambiado en copia afecta original? Original[0].nombre = ${usuarios[0].nombre}`); // ¡Sí afecta! Porque los objetos internos se copian por referencia.
//     usuarios[0].nombre = 'Carlos'; // Restaurar el nombre original
//     console.log(`   (Nombre restaurado en original: ${usuarios[0].nombre})`);


// // ********************************** METODO FIND ******************************

//     console.log("\n--- VARIOS EJEMPLOS CON find ---");

//     // Ejemplo 1: Encontrar el primer usuario llamado 'Laura'
//     const lauraEncontrada = usuarios.find(usuario => usuario.nombre === 'Laura');
//     if (lauraEncontrada) {
//     console.log(`1. Se encontró a Laura con ID: ${lauraEncontrada.id}`);
//     } else {
//     console.log("1. No se encontró a ningún usuario llamado Laura.");
//     }

//     // Ejemplo 2: Encontrar el primer usuario mayor de 65 años
//     const mayorDe65 = usuarios.find(usuario => usuario.edad > 65);
//     if (mayorDe65) {
//     console.log(`2. Primer usuario mayor de 65 encontrado: ${mayorDe65.nombre} (Edad: ${mayorDe65.edad})`);
//     } else {
//     console.log("2. No se encontró ningún usuario mayor de 65 años.");
//     }

//     // Ejemplo 3: Encontrar el primer usuario cuyo email contenga '123'
//     const emailCon123 = usuarios.find(usuario => usuario.email.includes('123'));
//     if (emailCon123) {
//         console.log(`3. Primer usuario con '123' en el email: ${emailCon123.nombre} (Email: ${emailCon123.email})`);
//     } else {
//         console.log("3. No se encontró ningún usuario con '123' en su email.");
//     }

//     // Ejemplo 4: Encontrar el primer usuario Masculino que pese exactamente 80.9 kg
//     const hombrePesoExacto = usuarios.find(usuario => usuario.sexo === 'Masculino' && usuario.peso === 80.9);
//     if (hombrePesoExacto) {
//         console.log(`4. Usuario masculino con peso 80.9kg encontrado: ${hombrePesoExacto.nombre} (ID: ${hombrePesoExacto.id})`);
//     } else {
//         console.log("4. No se encontró ningún usuario masculino con peso exacto de 80.9 kg.");
//     }


    
// // ********************************** METODO SOME ******************************
//     // some: Comprueba si AL MENOS UN elemento cumple la condición. Devuelve true o false. 
//     // Detiene la iteración tan pronto encuentra un 'true'.
    
//     console.log("\n--- VARIOS EJEMPLOS CON some ---");

//     // Ejemplo 1: ¿Hay algún usuario menor de 20 años?
//     const hayMenorDe20 = usuarios.some(usuario => usuario.edad < 20);
//     console.log(`1. ¿Hay algún usuario menor de 20 años? ${hayMenorDe20}`); // Debería ser true (Andrés tiene 19)

//     // Ejemplo 2: ¿Hay algún usuario llamado 'Ricardo'?
//     const hayAlgunRicardo = usuarios.some(usuario => usuario.nombre === 'Ricardo');
//     console.log(`2. ¿Hay algún usuario llamado 'Ricardo'? ${hayAlgunRicardo}`); // Debería ser true

//     // Ejemplo 3: ¿Hay alguna mujer que pese más de 70 kg?
//     const hayMujerMas70kg = usuarios.some(usuario => usuario.sexo === 'Femenino' && usuario.peso > 70);
//     console.log(`3. ¿Hay alguna mujer que pese más de 70 kg? ${hayMujerMas70kg}`); // Debería ser true (Marta)

//     // Ejemplo 4: ¿Hay algún usuario cuyo email no contenga '@fakemail-example.com'? (Validación)
//     const hayEmailInvalido = usuarios.some(usuario => !usuario.email.includes('@fakemail-example.com'));
//     console.log(`4. ¿Hay algún email con formato inválido? ${hayEmailInvalido}`); // Debería ser false si todos son correctos

// // ********************************** METODO EVERY ******************************

//     // every: Comprueba si TODOS los elementos cumplen la condición. Devuelve true o false. 
//     // Detiene la iteración tan pronto encuentra un 'false'.

//     console.log("\n--- VARIOS EJEMPLOS CON every ---");

//     // Ejemplo 1: ¿Todos los usuarios tienen 18 años o más?
//     const todosMayoresDe18 = usuarios.every(usuario => usuario.edad >= 18);
//     console.log(`1. ¿Todos los usuarios tienen 18 años o más? ${todosMayoresDe18}`); // Debería ser true

//     // Ejemplo 2: ¿Todos los usuarios tienen un email (propiedad 'email' existe y no es vacía)?
//     const todosTienenEmailValido = usuarios.every(usuario => usuario.email && usuario.email.length > 0);
//     console.log(`2. ¿Todos los usuarios tienen un email válido (no vacío)? ${todosTienenEmailValido}`); // Debería ser true

//     // Ejemplo 3: ¿Todos los usuarios pesan menos de 100 kg?
//     const todosPesanMenos100 = usuarios.every(usuario => usuario.peso < 100);
//     console.log(`3. ¿Todos los usuarios pesan menos de 100 kg? ${todosPesanMenos100}`); // Debería ser true según los datos generados

//     // Ejemplo 4: ¿Todos los usuarios tienen un ID numérico mayor que 0?
//     const todosTienenIdPositivo = usuarios.every(usuario => typeof usuario.id === 'number' && usuario.id > 0);
//     console.log(`4. ¿Todos los usuarios tienen un ID numérico positivo? ${todosTienenIdPositivo}`); // Debería ser true


// // ********************************** METODO FINDINDEX ******************************

//     // findIndex: Devuelve el ÍNDICE del PRIMER elemento que cumple la condición. Si ninguno la cumple, devuelve -1.
//     console.log("\n--- VARIOS EJEMPLOS CON findIndex ---");

//     // Ejemplo 1: Encontrar el índice del primer usuario llamado 'Santiago'
//     const indiceSantiago = usuarios.findIndex(usuario => usuario.nombre === 'Santiago');
//     console.log(`1. Índice del usuario 'Santiago': ${indiceSantiago}`); // Debería ser 8

//     // Ejemplo 2: Encontrar el índice del primer usuario con edad menor a 20 años
//     const indiceMenorDe20 = usuarios.findIndex(usuario => usuario.edad < 20);
//     console.log(`2. Índice del primer usuario menor de 20: ${indiceMenorDe20}`); // Debería ser 6 (Andrés)

//     // Ejemplo 3: Encontrar el índice del primer usuario Femenino que pese menos de 55 kg
//     const indiceMujerLigera = usuarios.findIndex(usuario => usuario.sexo === 'Femenino' && usuario.peso < 55);
//     console.log(`3. Índice de la primera mujer con peso < 55kg: ${indiceMujerLigera}`); // Debería ser 10 (Valentina) o 14 (Isabella) o 22 (Clara) - devuelve el primero que encuentra.

//     // Ejemplo 4: Encontrar el índice del usuario con ID 33
//     const indiceId33 = usuarios.findIndex(usuario => usuario.id === 33);
//     console.log(`4. Índice del usuario con ID 33: ${indiceId33}`); // Debería ser 32