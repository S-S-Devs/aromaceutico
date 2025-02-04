// main.js

// Función para obtener la fecha de sistema
function getSystemDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return now.toLocaleDateString('en-US', options);
}

// Función para obtener la fecha de última modificación
function getLastModifiedDate() {
  const lastModified = new Date(document.lastModified);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return lastModified.toLocaleDateString('en-US', options);
}

// Mostrar fechas en el elemento con id 'dates'
document.getElementById('dates').innerHTML = `
  <p>Fecha de sistema: ${getSystemDate()}</p>
  <p>Última modificación: ${getLastModifiedDate()}</p>
`;