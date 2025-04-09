// import {usuarios_obj} from './data';

// // ********************************** METODO FOR IN ******************************

//     // for...in: itera sobre los nombres (claves) de las propiedades enumerables.

//     console.log("\n\n--- 4 EJEMPLOS CON for...in ---");

//     // 1. FOR IN: Básico - Imprimir Clave y Valor (con hasOwnProperty)
//     console.log("\n1. Imprimir Clave y Valor:");
//     for (const key in usuarios_obj) {
//     if (Object.hasOwnProperty.call(usuarios_obj, key)) {
//         console.log(`   ${key}: ${usuarios_obj[key]}`);
//     }
//     }

//     // 2. FOR IN: Filtrar por Tipo - Imprimir solo claves cuyo valor es un número
//     console.log("\n2. Imprimir solo claves con valor numérico:");
//     for (const key in usuarios_obj) {
//     if (Object.hasOwnProperty.call(usuarios_obj, key)) {
//         if (typeof usuarios_obj[key] === 'number') {
//         console.log(`   - Clave numérica encontrada: ${key} (Valor: ${usuarios_obj[key]})`);
//         }
//     }
//     }

//     // 3. FOR IN: Construir String - Crear un string con "clave=valor;" solo para strings y booleanos
//     console.log("\n3. Construir string con datos string/boolean:");
//     let stringAttrs = "";
//     for (const key in usuarios_obj) {
//     if (Object.hasOwnProperty.call(usuarios_obj, key)) {
//         const value = usuarios_obj[key];
//         if (typeof value === 'string' || typeof value === 'boolean') {
//         stringAttrs += `${key}=${value}; `;
//         }
//     }
//     }
//     console.log(`   Atributos: ${stringAttrs.trim()}`);

//     // 4. FOR IN: Conteo - Contar cuántas propiedades NO son arrays
//     console.log("\n4. Contar propiedades que NO son arrays:");
//     let countNotArray = 0;
//     for (const key in usuarios_obj) {
//     if (Object.hasOwnProperty.call(usuarios_obj, key)) {
//         if (!Array.isArray(usuarios_obj[key])) {
//         countNotArray++;
//         }
//     }
//     }
//     console.log(`   - Número de propiedades no-array: ${countNotArray}`);


// // ********************************** METODO Object.keys() ******************************

//     // Object.keys(): obtiene un array de claves propias y enumerables.


//     console.log("\n\n--- 4 EJEMPLOS CON Object.keys() ---");
//     const lasClaves = Object.keys(usuarios_obj); // ['id', 'nombre', ..., 'empresas']

//     // 1. KEYS: Básico - Imprimir clave y valor usando forEach
//     console.log("\n1. Imprimir Clave y Valor (forEach):");
//     lasClaves.forEach(key => {
//     console.log(`   ${key}: ${usuarios_obj[key]}`);
//     });

//     // 2. KEYS: Filtrar + Iterar - Mostrar solo clave/valor de claves con longitud > 4
//     console.log("\n2. Mostrar Clave/Valor si longitud(clave) > 4:");
//     lasClaves
//     .filter(key => key.length > 4) // Filtrar claves como 'nombre', 'email', 'ciudad', etc.
//     .forEach(key => {
//         console.log(`   - ${key}: ${usuarios_obj[key]}`);
//     });

//     // 3. KEYS: Mapear - Crear un array de strings en mayúsculas: "CLAVE"
//     console.log("\n3. Crear array de claves en mayúsculas:");
//     const clavesMayusculas = lasClaves.map(key => key.toUpperCase());
//     console.log(`   - Claves en mayúsculas: ${clavesMayusculas.join(', ')}`);

//     // 4. KEYS: Chequear Existencia - Verificar si la clave 'ciudad' existe
//     console.log("\n4. Verificar si existe la clave 'ciudad':");
//     const existeCiudad = lasClaves.includes('ciudad');
//     console.log(`   - ¿La propiedad 'ciudad' existe? ${existeCiudad}`);
//     console.log("-----------------------------");


// // ********************************** METODO Object.values() ******************************

//     // Object.values(): obtiene un array de valores propios y enumerables.

//     console.log("\n\n--- 4 EJEMPLOS CON Object.values() ---");
//     const losValores = Object.values(usuarios_obj);

//     // 1. VALUES: Básico - Imprimir cada valor
//     console.log("\n1. Imprimir cada valor:");
//     losValores.forEach((value, index) => {
//     console.log(`   Valor ${index + 1}:`, value);
//     });

//     // 2. VALUES: Filtrar + Mapear - Obtener solo los valores que son strings y convertirlos a mayúsculas
//     console.log("\n2. Obtener valores string en mayúsculas:");
//     const valoresStringMayus = losValores
//     .filter(value => typeof value === 'string') // Solo strings
//     .map(str => str.toUpperCase()); // Convertir a mayúsculas
//     console.log(`   - Valores string en mayúsculas:`, valoresStringMayus);

//     // 3. VALUES: Chequear con 'every' - Verificar si todos los valores primitivos son "truthy"
//     console.log("\n3. ¿Todos los valores primitivos son 'truthy'?");
//     const primitivos = losValores.filter(v => !(Array.isArray(v) || (typeof v === 'object' && v !== null)));
//     const todosTruthy = primitivos.every(value => Boolean(value)); // Verifica si todos son verdaderos en contexto booleano
//     console.log(`   - ¿Son todos los primitivos truthy? ${todosTruthy}`); // El 'id' es truthy, 'nombre' también, etc.

//     // 4. VALUES: Encontrar - Usar find() en los valores para encontrar el primer array que contiene 'secretaria'
//     console.log("\n4. Encontrar el primer array de trabajos que incluya 'secretaria':");
//     const arrayTrabajoEspecifico = losValores.find(value =>
//         Array.isArray(value) && value.includes('secretaria')
//     );
//     console.log(`   - Array encontrado:`, arrayTrabajoEspecifico || "Ninguno");


// // ********************************** METODO Object.entries() ******************************

//     // Object.entries(): obtiene un array de pares [clave, valor].

//     console.log("\n\n--- 4 EJEMPLOS CON Object.entries() ---");
//     const lasEntradas = Object.entries(usuarios_obj); // [['id', 11223344], ...]

//     // 1. ENTRIES: Básico - Imprimir Clave y Valor con for...of y destructuring
//     console.log("\n1. Imprimir Clave y Valor (for...of):");
//     for (const [key, value] of lasEntradas) {
//     console.log(`   ${key}:`, value);
//     }

//     // 2. ENTRIES: Filtrar - Mostrar solo entradas cuya clave empiece con 'e' ('email', 'edad', 'empresas')
//     console.log("\n2. Mostrar entradas donde la clave empieza con 'e':");
//     const entradasConE = lasEntradas.filter(([key, value]) => key.startsWith('e'));
//     for (const [key, value] of entradasConE) {
//         console.log(`   - ${key}:`, value);
//     }

//     // 3. ENTRIES: Mapear - Crear un array de strings "La propiedad [KEY] es de tipo [TYPE]"
//     console.log("\n3. Mapear a strings describiendo la propiedad y su tipo:");
//     const descripciones = lasEntradas.map(([key, value]) => {
//         const type = Array.isArray(value) ? 'array' : typeof value;
//         return `La propiedad '${key}' es de tipo '${type}'`;
//     });
//     console.log(`   - Descripciones:`);
//     descripciones.forEach(d => console.log(`     ${d}`));

//     // 4. ENTRIES: Construir Objeto - Crear un nuevo objeto solo con id, nombre y ciudad
//     console.log("\n4. Crear un nuevo objeto con solo id, nombre, ciudad:");
//     const objetoParcial = lasEntradas.reduce((nuevoObj, [key, value]) => {
//     if (['id', 'nombre', 'ciudad'].includes(key)) {
//         nuevoObj[key] = value;
//     }
//     return nuevoObj;
//     }, {});
//     console.log(`   - Objeto parcial creado:`, objetoParcial);