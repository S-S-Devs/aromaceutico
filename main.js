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

// Función para obtener el nombre y la versión del navegador
function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = "Desconocido";
  let browserVersion = "Desconocida";

  if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
    browserVersion = userAgent.split("Firefox/")[1];
  } else if (userAgent.indexOf("SamsungBrowser") > -1) {
    browserName = "Samsung Internet";
    browserVersion = userAgent.split("SamsungBrowser/")[1];
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    browserName = "Opera";
    browserVersion = userAgent.split("OPR/")[1] || userAgent.split("Opera/")[1];
  } else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Microsoft Internet Explorer";
    browserVersion = userAgent.split("rv:")[1];
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Microsoft Edge";
    browserVersion = userAgent.split("Edge/")[1];
  } else if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1) {
    browserName = "Google Chrome";
    browserVersion = userAgent.split("Chrome/")[1].split(" ")[0];
  } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
    browserName = "Safari";
    browserVersion = userAgent.split("Version/")[1].split(" ")[0];
  } else if (userAgent.indexOf("Edg") > -1) {
    browserName = "Microsoft Edge";
    browserVersion = userAgent.split("Edg/")[1];
  }

  return `${browserName} ${browserVersion}`;
}

// Mostrar información del navegador en el elemento con id 'browser-info'
document.getElementById('browser-info').textContent = `Navegador: ${getBrowserInfo()}`;