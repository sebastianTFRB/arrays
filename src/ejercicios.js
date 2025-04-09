// ejercicios.js
import { usuarios, usuarios_obj } from './data.js';

function insertarEnLista(idElemento, datos) {
  const ul = document.getElementById(idElemento);
  if (!ul) return;

  if (Array.isArray(datos)) {
    datos.forEach(item => {
      const li = document.createElement('li');
      li.textContent = typeof item === 'object' ? JSON.stringify(item) : item;
      ul.appendChild(li);
    });
  } else if (typeof datos === 'object') {
    Object.entries(datos).forEach(([clave, valor]) => {
      const li = document.createElement('li');
      li.textContent = `${clave}: ${valor}`;
      ul.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = datos;
    ul.appendChild(li);
  }
}

// Ejercicio 1
const promedioEdadPorSexo = usuarios.reduce((acc, user) => {
  if (!acc[user.sexo]) acc[user.sexo] = { total: 0, count: 0 };
  acc[user.sexo].total += user.edad;
  acc[user.sexo].count++;
  return acc;
}, {});
Object.keys(promedioEdadPorSexo).forEach(sexo => {
  promedioEdadPorSexo[sexo] = (promedioEdadPorSexo[sexo].total / promedioEdadPorSexo[sexo].count).toFixed(2);
});
insertarEnLista("ejercicio-1", promedioEdadPorSexo);

// Ejercicio 2
const pesoPromedio = usuarios.reduce((acc, user) => acc + user.peso, 0) / usuarios.length;
const nombresPesoAlto = usuarios.filter(u => u.peso > pesoPromedio).map(u => u.nombre);
insertarEnLista("ejercicio-2", nombresPesoAlto);

// Ejercicio 3
const emailBuscado = 'luis_g@fakemail-example.com';
const usuarioPorEmail = usuarios.find(u => u.email.toLowerCase() === emailBuscado.toLowerCase());
insertarEnLista("ejercicio-3", usuarioPorEmail);

// Ejercicio 4
const todosTienenPeso = usuarios.every(u => typeof u.peso === 'number');
insertarEnLista("ejercicio-4", todosTienenPeso);

// Ejercicio 5
const subsetTransformado = usuarios.slice(5, 15).map(u => ({ id: u.id, nombreCompleto: u.nombre.toUpperCase() }));
insertarEnLista("ejercicio-5", subsetTransformado);

// Ejercicio 6
const rangos = usuarios.reduce((acc, u) => {
  let rango = '';
  if (u.edad <= 25) rango = '18-25';
  else if (u.edad <= 35) rango = '26-35';
  else if (u.edad <= 45) rango = '36-45';
  else rango = '46+';
  acc[rango] = (acc[rango] || 0) + 1;
  return acc;
}, {});
insertarEnLista("ejercicio-6", rangos);

// Ejercicio 7
const primerMasculinoMayor40 = usuarios.find(u => u.sexo === 'Masculino' && u.edad > 40);
insertarEnLista("ejercicio-7", primerMasculinoMayor40);

// Ejercicio 8
const letra = 'M';
const existeNombreConLetra = usuarios.some(u => u.nombre.toLowerCase().startsWith(letra.toLowerCase()));
insertarEnLista("ejercicio-8", existeNombreConLetra);

// Ejercicio 9
const combinado = {
  totalUsuarios: usuarios.length,
  nombreUsuarioObjeto: usuarios_obj.nombre,
  empleosUsuarioObjeto: usuarios_obj.trabajo.map(t => t.toUpperCase())
};
insertarEnLista("ejercicio-9", combinado);

// Ejercicio 10
const tiempoTotal = usuarios_obj.empresas.reduce((acc, emp) => acc + emp.tiempo, 0);
insertarEnLista("ejercicio-10", tiempoTotal);

// Ejercicio 11
const empresaMaxTiempo = usuarios_obj.empresas.reduce((max, emp) => emp.tiempo > max.tiempo ? emp : max);
insertarEnLista("ejercicio-11", empresaMaxTiempo);
