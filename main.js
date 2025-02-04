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


// FORMULARIOS
function initFormularios() {
  const inputs = document.querySelectorAll('input[type="text"], textarea, input[type="email"], input[type="number"]');
  const form = document.getElementById('personal-info-form');

  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      this.style.backgroundColor = '#ff7c86'; // Cambia el color de fondo al enfocar
    });

    input.addEventListener('blur', function () {
      this.style.backgroundColor = ''; // Restaura el color de fondo original
      this.value = this.value.toUpperCase(); // Convierte el texto a mayúsculas
    });
  });

  document.getElementById("datos").onclick = function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    let valid = true;
    inputs.forEach(input => {
      if (!input.value) {
        valid = false;
        input.style.borderColor = 'red'; // Marca el campo vacío en rojo
      } else {
        input.style.borderColor = ''; // Restaura el color del borde
      }
    });

    if (valid) {
      alert('Nombre: ' + form.elements[0].value + '\n'
         + 'Correo: ' + form.elements[1].value + '\n' 
         + 'Edad: ' + form.elements[2].value + '\n');  
      document.getElementById("login").style.display = "none";
      document.getElementById("paginaPrincipal").style.display = "block";
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }
}

// Muestra el formulario
function mostrarLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("paginaPrincipal").style.display = "none";
}

// Muestra la página Principal
function mostrarCaosMelodico() {
  document.getElementById("login").style.display = "none";
  document.getElementById("paginaPrincipal").style.display = "block";
}

window.onload = function() {
  initFormularios();
}